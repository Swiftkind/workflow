import os
import re
import json
from PIL import Image
from io import BytesIO

from urllib.request import urlopen, Request
from urllib.parse import quote

from django.conf import settings
from django.core.files.base import ContentFile
from django.shortcuts import get_object_or_404
from django.utils import timezone


class Query(object):
    """ helper class used for querying with
        model serializers
    """
    def __init__(self, *args, **kwargs):
        return super(Query, self).__init__(*args, **kwargs)

    @property
    def _model(self):
        try:
            return self.serializer_class.Meta.model
        except Exception as e:
            raise Exception("Model Serializer not found")

    def _get(self, _model, **kwargs):
        """ get an object based on the keyword arguments
            raise an HTTP404 if not found.
        """
        return get_object_or_404(_model, **kwargs)

    def _filter(self, _model, **kwargs):
        """ get the list of objects based on the
            keyword arguments.
        """
        return _model.objects.filter(**kwargs)
    

class ImageDownload(object):
    """ image downloader
    """
    def __init__(self, *args, **kwargs):
        return super(ImageDownload, self).__init__(*args, **kwargs)

    def download(self, url):
        """ download from the image source and
            save it locally.
        """
        req = self.request(url)
        inputfile, outputfile = BytesIO(urlopen(req).read()), BytesIO()

        img = Image.open(inputfile)
        img = img.convert("RGB") if img.mode != "RGB" else img
        img.thumbnail((192, 192), Image.ANTIALIAS)
        img.save(outputfile, "JPEG")

        self.image.save(os.path.basename(
            self._clean_url(url)),
            ContentFile(outputfile.getvalue()),
            save=False,
        )

    def request(self, url):
        return Request(url, headers={'User-Agent': 'Browser'})

    def _clean_url(self, url):
        proto, address = url.split("//")
        return f"{proto}//{quote(address)}"


class JSONParser(object):

    def to_json(self, data):
        """ converts querydict to json
        """
        return json.dumps(data)

    def to_dict(self, data):
        """ converts querydict to dict
        """
        return json.loads(json.dumps(data))

    def _clean_list(self, items):
        """ remove empty items on string
        """
        itemlist = list(filter(None, items))
        if len(itemlist) < 3:
            itemlist.append("")
            return itemlist

        return itemlist

    def _clean_text(self, text, separator='```'):
        """ clean raw text from slack api
        """
        return self._clean_list(
            text.replace("\r\n", "").replace("\n", "").split(separator))

    def _get_report_keys(self, text, key_format=r'\:\w+\:'):
        """ identify and get the key from the report text
        """
        return [i.replace(":", "") for i in re.findall(r'\:\w+\:', text)]

    def _report_to_dict(self, report, key_format=r'\:\w+\:'):
        """ convert raw text to key value
        """
        result = dict()

        data = self._clean_list(re.split(key_format, report))
        # get the keys of the report
        keys = self._get_report_keys(report, key_format)

        for index, key in enumerate(keys):
            result.update({key: data[index]})

        return result

    def _construct_report(self, text):
        """ returns a list of dictionaries containing the
            report data.
        """
        result = []
        reports = self._clean_text(text)

        for report in reports:
            _dict = self._report_to_dict(report)
            if _dict: result.append(_dict)

        return result



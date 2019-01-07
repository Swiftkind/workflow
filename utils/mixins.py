import os
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



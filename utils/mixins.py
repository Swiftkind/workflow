import os
import re
import json

import datetime
from datetime import datetime as dtime, timedelta

from PIL import Image
from io import BytesIO

from urllib.request import urlopen, Request
from urllib.parse import quote

from django.conf import settings
from django.core.files.base import ContentFile
from django.core.mail import EmailMessage
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, _get_queryset
from django.template.loader import get_template
from django.utils import timezone

from xhtml2pdf import pisa

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

class PDFHelper(object):
    """ Helper on pdf related stuffs
    """
    def produce_payroll_pdf_as_a_response(self, data):
        html, pdf_details = self.prepare_payroll_processing(data)
        return self._produce_pdf_as_a_response(html)

    def produce_payroll_as_an_attachment(self, data):
        html, pdf_details = self.prepare_payroll_processing(data)
        return self._produce_pdf_as_an_attachment(html, pdf_details)

    def prepare_payroll_processing(self, data):
        employee_name = f"{data.get('user').get('id')}_{data.get('user').get('last_name')}"

        title = f"{employee_name}_{data.get('date_from')}" 

        # # fetching and setting up necessary data
        context = {'data': data, 'title': title}
        template = get_template('report/payroll_report.html')
        html = template.render(context)

        pdf_details = {
            "title": title,
            "payroll_owner": data.get('user').get('email')
        }
        return html, pdf_details

    def _produce_pdf_as_an_attachment(self, html, pdf_details):
        """
            This produces any html that is passed as an attachment
        """
        result = BytesIO()
        pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
        return result.getvalue(), pdf_details

    def _produce_pdf_as_a_response(self, html):
        """
            This produces any html that is passed as a pdf response
        """
        # Create a Django response object, and specify content_type as pdf
        response = HttpResponse(content_type='application/pdf')
        # Define that this is an attachment. 
        response['Content-Disposition'] = 'attachment;'
        pisaStatus = pisa.CreatePDF(html, dest=response)
        
        return response

class MailHelper(object):
    """ Email helper
    """

    def send_payroll_email(self, receipent, pdf, pdf_details, subject="Payroll Report", 
        message="Attached here is a copy of your payroll report"):
        # Payroll report details
        subject = subject
        message = message
        sender = settings.EMAIL_HOST
        receipient = receipent

        # Sending the actual email
        email = EmailMessage(subject, message, sender, [receipent])
        if isinstance(pdf, list):
            for details, pdf_file in zip(pdf_details, pdf):
                email.attach(details.get("title"), pdf_file, 'application/pdf')
        else:
            email.attach(pdf_details.get('title'), pdf, 'application/pdf')

        email.send()

class PermissionHelper(object):
    """ Permissions helper
    """

    def check_get_query_result_if_exists(self, model, *args, **kwargs):
        """
            Checks if the query exists, return True if it exists, else false
        """
        # Allows dynamic get querysets
        queryset = _get_queryset(model)

        try:
            # Put the args and kwargs in the filter for filtering
            exists = queryset.get(*args, **kwargs)
            return True
        except queryset.model.DoesNotExist as e:
            # If queryset does not exist. Return False
            return False

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
        text = re.sub(r'(`{3})*\s*(:)\s*(content|reference|hours)\s*(:)\s*', r'\1\2\3\4', text)
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


class TZ(object):
    """ timezone helper to manage
        calculated time and date
    """
    def __init__(self, *args, **kwargs):
        return super(TZ, self).__init__(*args, **kwargs)

    def get_server_time(self):
        """ global server date and time configuration
        """
        return dict(
            # current timezone aware date and time.
            datetime=timezone.now(),
            # current timezone
            tz=settings.TIME_ZONE
        )

    def last_n_months(self, month_num=1):
        """ get the month based on the `month_num`.
        """
        return [
            timezone.now() - datetime.timedelta(days=month_num*30),
            timezone.now()
        ]

    def dt_range(self, start, interval=7):
        given_date = dtime.strptime(start, "%Y-%m-%d").date()
        # compute the start of the week value
        start_of_week = given_date - timedelta(days=given_date.weekday())
        #compute the end of the week value
        end_of_week = start_of_week + timedelta(days=interval)

        return start_of_week, end_of_week
        
    def _timestamp(self, dt):
        """ format the timestamp
        """
        return f"{dt.strftime('%b %d, %Y-%H:%M:%S')}"
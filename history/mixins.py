import re
import json

from urllib.request import urlopen
from urllib.parse import urlencode

from django.conf import settings
from django.shortcuts import get_object_or_404

from accounting.models import Project
from users.models import SlackToken


class Curl(object):
    """ contains method that allow to send
        requests to external apis.
    """
    def __init__(self, *args, **kwargs):
        return super(Curl, self).__init__(*args, **kwargs)

    def to_urlparams(self, url, **params):
        """ converts parameters/dictionary to
            urlencode format.
        """
        return f"{url}{urlencode(params)}"

    def get_request(self, url):
        """ send a GET request to the external url
        """
        return json.loads(urlopen(f"{url}").read())


class SlackAPI(Curl):
    """ slack api endpoints
    """
    def __init__(self, *args, **kwargs):
        return super(SlackAPI, self).__init__(*args, **kwargs)

    def get_groupinfo(self, group_id, user_token):
        """ sends a request to slack api `groups` to
            retrieve the channel info (private)
        """
        return self.get_request(self.to_urlparams(
            url=settings.SLACK_API_GROUPS_INFO,
            channel=group_id,
            token=user_token
        ))


class DailyStandup(SlackAPI):
    """ daily standup mixin
    """
    def __init__(self, *args, **kwargs):
        return super(DailyStandup, self).__init__(*args, **kwargs)

    def to_json(self, data):
        """ converts querydict to json
        """
        return json.dumps(data)

    def to_dict(self, data):
        """ converts querydict to dict
        """
        return json.loads(json.dumps(data))

    def get_user_token(self, user):
        """ get user slack token
        """
        return get_object_or_404(SlackToken, user=user)

    def get_project(self, channel_id, channel_name, token=None):
        """ get the project instance using the slack
            channel_id
        """
        # check if the channel is public or private. private
        # channels doesn't provide the channel name. (it needs
        # another separate call to retrieve the channel_name)
        if channel_name != 'privategroup':
            # channel is public, check if the channel is already
            # registered in the database, if not create one.
            return self._create_project(channel_id, channel_name)

        # retrieve the private channel data (specifically the channel_name)
        resp = self.get_groupinfo(group_id=channel_id, user_token=token)
        # get channel based on the retrieved channel name
        return self._create_project(channel_id, resp['group']['name'])

    def _create_project(self, channel_id, channel_name):
        """ create a channel based on the channel_name
        """
        channel, created = Project.objects.get_or_create(channel_name=channel_name)
        if not channel.channel_id:
            # set channel id if it is not saved.
            channel.channel_id = channel_id
            channel.save()

        return channel

    def splitreport(self, text):
        """ split the reports to 3 section.
            set#1 : what i have worked on
            set#2 : what i am planning to do.
            set#3 : issues/blockers
        """
        workedon, todo, blockers = self._clean_list(re.split(r'\[\w+\]', text))

        return (
            self._construct_report(workedon),
            self._construct_report(todo),
            self._construct_report(blockers),
        )

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
        return self._clean_list(text.replace("\r\n", "").split(separator))

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
            result.append(self._report_to_dict(report))

        return result
            


        
        



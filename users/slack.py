import json

from urllib.request import urlopen
from urllib.parse import urlencode

from django.conf import settings

from .models import User, SlackToken


class Slack(object):
    """ slack authentication
    """
    SLACK_AUTHORIZE = 'https://slack.com/oauth/authorize?'
    SLACK_AUTH_ACCESS = 'https://slack.com/api/oauth.access?'

    def __init__(self, *args, **kwargs):
        return super(Slack, self).__init__(*args, **kwargs)

    def get_authorize_url(self):
        """ return the authorize url supplied
            with the required parameters.
        """
        params = urlencode(dict(
            client_id=settings.SLACK_CLIENT_ID,
            scope=settings.SLACK_SCOPE,
            redirect_uri=settings.SLACK_AUTH_CALLBACK_URL
        ))
        return f"{self.SLACK_AUTHORIZE}{params}"

    def auth_access(self, code):
        """ return the requestor's data using the
            temporary code from the authorize request.
        """
        params = urlencode(dict(
            client_id=settings.SLACK_CLIENT_ID,
            client_secret=settings.SLACK_CLIENT_SECRET,
            code=code,
            redirect_uri=settings.SLACK_AUTH_CALLBACK_URL
        ))
        return urlopen(f"{self.SLACK_AUTH_ACCESS}{params}")

    def parsedata(self, data):
        """ parse json data to dictionary
        """
        return json.loads(data)

    def get_or_create_user(self, **kwargs):
        """ get or create user
        """
        user, created = User.objects.get_or_create(email=kwargs['email'])
        # save user slack id
        user.slack_id = user.slack_id or kwargs.get('id')
        user.is_active = True
        user.save()

        return user

    def get_or_create_token(self, access_token, user):
        """ get or create access token
        """
        token, created = SlackToken.objects.get_or_create(user=user)
        if created or token.token != access_token:
            token.token = access_token
            token.save()

        return token

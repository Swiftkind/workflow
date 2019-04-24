import datetime

from django.conf import settings
from django.contrib.auth import authenticate
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _

from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import User, SlackToken
from .slack import Slack

from django.contrib.auth.password_validation import validate_password


class AuthTokenSerializer(serializers.Serializer):
    """ auth token serializer
    """
    user = None

    email = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)

    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
        return super(AuthTokenSerializer, self).__init__(*args, **kwargs)

    def validate(self, data):
        """ validate email credentials
        """
        email, password = data.values()

        if not email or not password:
            msg = _('Must include "email" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        self.user = authenticate(request=self.request,
            email=email, password=password)

        if not self.user:
            msg = _('Unable to log in with provided credentials.')
            raise serializers.ValidationError(msg, code='authorization')

        return data

    def get_token(self):
        """ get or generate a user token that is valid for
            `settings.AUTH_TOKEN_EXPIRY_TIME`
        """
        if not self.user:
            msg = _('Unable to login with provided credentials.')
            raise serializers.ValidationError(msg, code="authorization")

        token, created = Token.objects.get_or_create(user=self.user)
        expiry_date = token.created + datetime.timedelta(days=settings.AUTH_TOKEN_EXPIRY_TIME)
        
        if not created and expiry_date < timezone.now():
            # delete token
            token.delete()
            # generate a new one
            token = Token.objects.create(user=self.user)

        return token


class ShortUserSerializer(serializers.ModelSerializer):
    """ user serializer with only basic
        information.
    """
    full_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'first_name',
            'last_name',
            'full_name',
            'image',
            'birthdate',
        )

    def get_full_name(self, instance):
        """ return the complete name of
            the user.
        """
        return instance.get_full_name()


class UserSerializer(serializers.ModelSerializer):
    """ user serializer
    """
    deductions = serializers.SerializerMethodField(read_only=True)
    plans = serializers.SerializerMethodField(read_only=True)
    full_name = serializers.SerializerMethodField(read_only=True)
    position_type = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'first_name',
            'last_name',
            'full_name',
            'birthdate',
            'image',
            'position',
            'position_type',
            'date_started',
            'deductions',
            'plans'
        )

    def __init__(self, *args, **kwargs):
        return super(UserSerializer, self).__init__(*args, **kwargs)

    def get_deductions(self, instance):
        """ get the list of deduction from
            the payroll app.
        """
        # imported implicitly as it will raise a circular import
        # error when imported globally. `uses.serializers` is imported
        # in the payroll.serializers.
        from payroll.serializers import DeductionSerializer

        return DeductionSerializer(instance.deductions.all(), many=True).data

    def get_plans(self, instance):
        """ get the list of plans from the
            payroll app.
        """
        # imported implicitly as it will raise a circular import
        # error when imported globally. `uses.serializers` is imported
        # in the payroll.serializers.
        from payroll.serializers import PlanSerializer

        return PlanSerializer(
            PlanSerializer.Meta.model.objects.filter(user=instance),
            many=True,
        ).data

    def get_full_name(self, instance):
        """ return the complete name of
            the user.
        """
        return instance.get_full_name()


class SlackAuthSerializer(Slack, serializers.Serializer):
    """ slack auth serializer
    """
    token = None
    code = serializers.CharField(write_only=True)

    class Meta:
        model = SlackToken

    def validate(self, data):
        """ check if the code is valid and if the
            user is a valid member of the swiftkind
            team.
        """
        resp = self.auth_access(data.get('code'))
        data = self.parsedata(resp.read())

        # check if the request is successful. raise an
        # error message if the request is invalid
        if not data['ok']:
            raise serializers.ValidationError(_(data['error']), code="authorization")

        # check if the user is part of the team. Deny access to
        # users who are not part of the team.
        if data['team_id'] != settings.SLACK_TEAM_ID:
            raise serializers.ValidationError(_("Invalid user credentials."), code="authorization")

        # check if the user is an existing user. if new, create a new user,
        # else, allow access.
        resp = self.get_userinfo(data['user_id'], data['access_token'])
        userdata = self.parsedata(resp.read())

        if not userdata['ok']:
            raise serializers.ValidationError(_('User not found.'))

        user = self.get_or_create_user(
            email=userdata['user']['profile']['email'],
            first_name=userdata['user']['profile'].get('first_name'),
            last_name=userdata['user']['profile'].get('last_name'),
            id=data['user_id'],
        )
        # check if the user has no avatar yet.
        # add an avatar using the slack avatar.
        imgurl = userdata['user']['profile']['image_192']
        if not user.image:
            user.download_img(imgurl)
            user.save()

        # set access token
        self.token = self.get_or_create_token(
            access_token=data['access_token'], user=user)

        return data

    def get_redirect_url(self):
        """ return the redirect url based on the 
            generated access_token from the slack server
        """
        return f"{settings.SLACK_AUTH_LOGIN_REDIRECT}{self.token.token}/"

class AddPasswordSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    """
    new_password = serializers.CharField(required=True)
    confirm_new_password = serializers.CharField(required=True)
    
    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
        return super(AddPasswordSerializer, self).__init__(*args, **kwargs)

    def validate(self, data):
        new_password, confirm_new_password = data.values()

        if new_password != confirm_new_password:
            raise serializers.ValidationError({"new_password": "Password do not match"}, code="authorization")

        return data

    def validate_new_password(self, value):
        validate_password(value)
        return value

class ChangePasswordSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    confirm_new_password = serializers.CharField(required=True)


    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
        return super(ChangePasswordSerializer, self).__init__(*args, **kwargs)

    def validate(self, data):
        old_password, new_password, confirm_new_password = data.values()

        if not self.request.user.check_password(old_password):
            raise serializers.ValidationError(_("Wrong password."), code="authorization")
        
        if new_password != confirm_new_password:
            raise serializers.ValidationError(_("Password do not match."), code="authorization")

        return data
        

    def validate_new_password(self, value):
        validate_password(value)
        return value
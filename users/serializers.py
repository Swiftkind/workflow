import datetime

from django.conf import settings
from django.contrib.auth import authenticate
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _

from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import User


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


class UserSerializer(serializers.ModelSerializer):
    """ user serializer
    """
    deductions = serializers.SerializerMethodField()
    plans = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'first_name',
            'last_name',
            'birthdate',
            'image',
            'position',
            'position_type',
            'date_started',
            'deductions',
            'plans'
        )

    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
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

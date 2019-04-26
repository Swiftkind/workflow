from django.conf import settings
from django.http import HttpResponseRedirect

from rest_framework import parsers, renderers
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from utils.mixins import Query, TZ
from .slack import Slack
from .serializers import (
    AuthTokenSerializer,
    UserSerializer,
    SlackAuthSerializer,
    PasswordSerializer,
)

from .models import User


class Login(APIView):
    """ user authentication endpoint
    """
    authentication_classes = ()
    permission_classes = (AllowAny,)
    parser_classes = (parsers.FormParser, parsers.MultiPartParser, parsers.JSONParser,)
    render_classes = (renderers.JSONRenderer,)
    serializer_class = AuthTokenSerializer

    def post(self, *args, **kwargs):
        """ accepts post data that contains user credentials
            and validates it. Returns a generated token.
        """
        serializer = self.serializer_class(
            data=self.request.data, request=self.request)
        serializer.is_valid(raise_exception=True)

        # TODO: bind the response data to the serializer
        # to make it much cleaner and robust
        return Response({
            'token': serializer.get_token().key,
            'user_id': serializer.user.id
        }, status=200)

class ChangePassword(APIView):
    """
        User Password EndPoint
    """
    permission_classes = (IsAuthenticated,)
    
    def post(self, *args, **kwargs):
        """
            Create User Password
        """
        serializer = PasswordSerializer(
            data=self.request.data, request=self.request)

        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=204)

    def put(self, *args, **kwargs):
        """
            Update User Password
        """
        serializer = PasswordSerializer(
            data=self.request.data, request=self.request)
        
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=204)

class SlackAuth(Query, Slack, ViewSet):
    """ slack authentication endpoint
    """
    authentication_classes = ()
    permission_classes = (AllowAny,)
    serializer_class = SlackAuthSerializer

    def get(self, *args, **kwargs):
        serializer = self.serializer_class(data=self.request.query_params)
        serializer.is_valid(raise_exception=True)

        return HttpResponseRedirect(
            serializer.get_redirect_url())

    def config(self, *args, **kwargs):
        return Response({'authorize_url': self.get_authorize_url()}, status=200)

    def get_usertoken(self, *args, **kwargs):
        # get the slack token. returns 404 if
        # not found.
        access_token = self._get(self._model, **kwargs)

        return Response({
            'token': access_token.user.get_token().key,
            'user_id': access_token.user.id
        }, status=200)


class User(TZ, ViewSet):
    """ user endpoint
    """
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        serializer = self.serializer_class(
            instance=self.request.user)
        return Response(serializer.data, status=200)

    def update(self, *args, **kwargs):
        serializer = self.serializer_class(
            data=self.request.data, instance=self.request.user)
        
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=200)

    def servertime(self, *args, **kwargs):
        """ calendar endpoint.
            globally used datetime.
        """
        return Response(self.get_server_time(), status=200)
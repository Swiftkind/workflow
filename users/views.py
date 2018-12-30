from rest_framework import parsers, renderers
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from utils.mixins import Query

from .serializers import AuthTokenSerializer, UserSerializer


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


class User(ViewSet):
    """ user endpoint
    """
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        serializer = self.serializer_class(
            instance=self.request.user,
            request=self.request
        )
        return Response(serializer.data, status=200)
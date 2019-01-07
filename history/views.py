from rest_framework import parsers, renderers
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

#from .serializers import StandupSerializer


class Standup(ViewSet):
    """ daily standup endpoint
    """
    #serializer_class = StandupSerializer

    def post(self, *args, **kwargs):
        #import pdb;pdb.set_trace()
        return Response(status=200)
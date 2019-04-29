from rest_framework import parsers, renderers
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from utils.mixins import Query

from .serializers import StandupSerializer, ReportSerializer
from .models import Standup as stand_up_model


class Standups(Query, ViewSet):
    """ daily standups endpoint that receives report
        from our slack workplace (SLACK API)

        *IMPORTANT: Do not ADD authentication on this
            view as it will prevent the standups from
            slack to go through.
    """
    serializer_class = StandupSerializer

    def post(self, *args, **kwargs):
        # this post method is being
        # used by slack api.
        serializer = self.serializer_class(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=200)
        
    def get(self, *args, **kwargs):
        serializer = ReportSerializer(stand_up_model.objects.filter(user=self.request.user)
        , many=True)

        return Response(serializer.data, status=200)

class Standup(Query, ViewSet):
    """ daily report endpoint
    """
    serializer_class = ReportSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        serializer = self.serializer_class(
            self._get(self._model, **kwargs))

        return Response(serializer.data, status=200)
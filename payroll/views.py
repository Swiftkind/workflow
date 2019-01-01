from rest_framework import parsers, renderers
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from utils.mixins import Query

from .serializers import PayrollSerializer


class Payroll(Query, ViewSet):
    """ payroll worksheet endpoint
    """
    serializer_class = PayrollSerializer
    #permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        serializer = self.serializer_class(
            instance=self._get(self._model, **kwargs)
        )
        return Response(serializer.data, status=200)

    def filter(self, *args, **kwargs):
        serializer = self.serializer_class(
            instance=self._filter(
                self._model,
                user=self.request.user,
                **self.request.query_params.dict(),
            ),
            many=True,
        )
        return Response(serializer.data, status=200)
from rest_framework import parsers, renderers
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework.viewsets import ViewSet

from utils.mixins import Query
from .serializers import ProjectDetailsSerializer

# Create your views here.
class ProjectDetails(Query, ViewSet):
    """ project details
    """
    serializer_class = ProjectDetailsSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        serializer = self.serializer_class(
            self._get(self._model, **kwargs), context={'request': self.request})
        return Response(serializer.data, status=200)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from utils.mixins import Query
from .serializers import ProjectSerializer

# Create your views here.
class ProjectDetail(Query, ViewSet):
    """ project detail
    """
    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        serializer = self.serializer_class(
            self._get(self._model, **kwargs))
        return Response(serializer.data, status=200)
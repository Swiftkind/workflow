from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from utils.mixins import Query
from .serializers import ProjectDetailSerializer

# Create your views here.
class ProjectDetail(Query, ViewSet):
    """ project details
    """
    serializer_class = ProjectDetailSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        serializer = self.serializer_class(
            self._get(self._model, **kwargs))
        return Response(serializer.data, status=200)
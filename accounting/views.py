from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.generics import ListAPIView

from utils.mixins import Query
from .serializers import ProjectSerializer

from .models import Project

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

class ProjectsList(Query, ListAPIView):
    """ get all projects
    """
    queryset = None
    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        query_set = Project.objects.all()
        return query_set
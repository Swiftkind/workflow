from datetime import datetime, timedelta

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from rest_framework.generics import ListAPIView

from utils.mixins import Query, TZ

from .serializers import StandupSerializer, ReportSerializer, ShortStandupProjectSerializer
from .models import Standup as stand_up_model
from .paginations import WeeklyReportsPagination

from accounting.models import Project

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

class StandupByWeek(Query, TZ, ListAPIView):
    """ feed endpoint.
        contains scheduled events, daily report, etc.
    """
    queryset = None
    serializer_class = ShortStandupProjectSerializer
    pagination_class = WeeklyReportsPagination
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        # get date parameter from url
        dt = self.kwargs['date']
        start_of_week, end_of_week = self.dt_range(dt)

        #get project id parameter from url
        project_id = self.kwargs['id']
        # get project object
        project = Project.objects.get(id=project_id)
        # get queryset of Standup with filter date range of start of the week and end of the week
        # which belongs to the project object
        # order by latest date created
        queryset = stand_up_model.objects.filter(date_created__range=[start_of_week, end_of_week], project=project).order_by('-date_created')
        return queryset
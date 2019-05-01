from rest_framework import parsers, renderers
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from utils.mixins import Query

from .serializers import StandupSerializer, ReportSerializer, ShortStandupProjectSerializer

from .models import Standup as stand_up_model

from .paginations import WeeklyReportsPagination
from rest_framework.generics import ListAPIView

from accounting.models import Project


from datetime import datetime, timedelta

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

class StandupByWeekPagination(Query, ListAPIView):
    """ feed endpoint.
        contains scheduled events, daily report, etc.
    """
    queryset = None
    serializer_class = ShortStandupProjectSerializer
    pagination_class = WeeklyReportsPagination
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        dt = self.kwargs['date']
        current_date = datetime.strptime(dt, "%Y-%m-%d").date()
        start_of_week = current_date - timedelta(days=current_date.weekday())
        end_of_week = start_of_week + timedelta(days=7)

        project_id = self.kwargs['id']
        project = Project.objects.get(id=project_id)

        queryset = stand_up_model.objects.filter(date_created__range=[start_of_week, end_of_week], project=project).order_by('-date_created')

        return queryset

class StandupByWeek(Query, ViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = ShortStandupProjectSerializer

    def put(self, *args, **kwargs):

        project_id = self.request.data.get('project_id')
        project = Project.objects.get(id=project_id)
        date = self.request.data.get('start_of_week')

        if date:
            current_date = datetime.strptime(date, "%Y-%m-%d").date() - timedelta(days=1)
            start_of_week = current_date - timedelta(days=current_date.weekday())
            end_of_week = start_of_week + timedelta(days=7)
        else:
            date = self.request.data.get('end_of_week')
            current_date = datetime.strptime(date, "%Y-%m-%d").date() + timedelta(days=1)
            start_of_week = current_date - timedelta(days=current_date.weekday())
            end_of_week = start_of_week + timedelta(days=7)

        serializer = self.serializer_class(
            stand_up_model.objects.filter(date_created__range=[start_of_week, end_of_week], project=project).order_by('-date_created'), many=True)
        
        stand_up = {
            'date_data':{
                'start_of_week':start_of_week,
                'end_of_week':end_of_week - timedelta(days=1)
            },
            'results':serializer.data
        }

        return Response(stand_up, status=200)
from itertools import chain
from collections import namedtuple

from django.conf import settings
from django.db.models import Q
from django.utils import timezone

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ViewSet

from accounting.models import Project
from history.models import Standup, Blocker
from history.serializers import ReportSerializer
from utils.mixins import Query, TZ

from .serializers import FeedSerializer, EventSerializer, PendingIssueSerializer
from .models import Event
from .paginations import FeedPagination


class Feed(Query, TZ, ListAPIView):
    """ feed endpoint.
        contains scheduled events, daily report, etc.
    """
    queryset = None
    serializer_class = FeedSerializer
    pagination_class = FeedPagination
    permission_classes = (IsAuthenticated,)

    def get_queryset(self, *args, **kwargs):
        # calculate the 3 month range parameter.
        months_3 = self.last_n_months(1)

        return sorted(chain(
                Standup.objects.filter(user=self.request.user,
                    date_created__range=months_3),
                Event.objects.filter(
                    date_created__range=months_3)
            ),
            key=lambda instance: instance.date_created,
            reverse=True,
        )


class Notification(Query, TZ, ViewSet):
    """ daily notification
    """
    def events(self, *args, **kwargs):
        serializer = EventSerializer(
            self._filter(Event, event_date=timezone.now().date()),
            many=True
        )
        return Response(serializer.data, status=200)

    def pending(self, *args, **kwargs):
        # filter standups that has blockers that
        # are not yet fixed.
        standups = self._filter(Standup,
            user=self.request.user,
        ).exclude(Q(blocker=None) | Q(blocker__is_fixed=True))

        serializer = PendingIssueSerializer(
            self.group_by_project(standups),
            many=True
        )
        return Response(serializer.data, status=200)

    def group_by_project(self, query):
        """ method that will reconstruct the queryset
            and group it by project.
        """
        def _flat(q, key, distinct=False):
            # shorthand (hacky) for transforming query to flat list
            if distinct: return q.values_list(key, flat=True).distinct()
            return q.values_list(key, flat=True)

        def _get_blockers(q, pid):
            return _flat(q.filter(project=pid), 'blocker')

        def _assign(item):
            """ construct the data into an object.
                why object and not dict? because objects are cool!
            """
            return namedtuple(
                "PendingIssue",
                ('project_id', 'blockers')
            )(*item)

        # transform the query based on the project and blocker IDs
        query = query.values('project', 'blocker')
        # get the distinct project list
        projects = _flat(query, 'project', distinct=True)

        # transform and re-group (by project) the query list into a dictionary
        # which will be flatten to become a list of objects.
        rdict = {p:_get_blockers(query, p) for p in projects}

        # transform the dict query into flatten list which will be
        # passed into the serializer for serializing.
        return [_assign(item) for item in rdict.items()]


class Calendar(Query, TZ, ViewSet):
    """ calendar endpoint
    """
    pass
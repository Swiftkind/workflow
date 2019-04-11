from itertools import chain
from django.conf import settings

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ViewSet

from history.models import Standup
from utils.mixins import Query, TZ

from .serializers import FeedSerializer
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
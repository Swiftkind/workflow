from itertools import chain
from django.conf import settings

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from history.models import Standup
from utils.mixins import Query

from .serializers import FeedSerializer
from .models import Event



class Feed(Query, ViewSet):
    """ feed endpoint.
        contains scheduled events, daily report, etc.
    """
    def get(self, *args, **kwargs):
        feed = sorted(chain(
                Standup.objects.filter(user=self.request.user),
                Event.objects.all()
            ),
            key=lambda instance: instance.date_created,
            reverse=True
        )

        serializer = FeedSerializer(feed, many=True)
        return Response(serializer.data, status=200)
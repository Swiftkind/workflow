from django.conf import settings
from django.utils import timezone
from rest_framework import serializers

from utils.mixins import Query
from users.serializers import ShortUserSerializer
from accounting.serializers import ProjectSerializer
from history.serializers import BlockerSerializer

from .models import Event
from .mixins import FeedParser


class FeedSerializer(FeedParser, serializers.Serializer):
    """ feed serializer
    """
    instance = serializers.SerializerMethodField()
    instance_type = serializers.SerializerMethodField()

    def get_instance(self, obj):
        return self.serialize(obj)

    def get_instance_type(self, obj):
        return obj._meta.model_name


class EventSerializer(serializers.ModelSerializer):

    start_time = serializers.SerializerMethodField()
    end_time = serializers.SerializerMethodField()
    organizer = ShortUserSerializer(read_only=True)

    class Meta:
        model = Event
        fields = (
            'id',
            'title',
            'content',
            'organizer',
            'participants',
            'event_date',
            'start_time',
            'end_time',
            'date_created',
        )

    def get_start_time(self, obj):
        return f"{obj.event_date}T{obj.start_time}"

    def get_end_time(self, obj):
        return f"{obj.event_date}T{obj.end_time}"


class PendingIssueSerializer(Query, serializers.Serializer):

    project = serializers.SerializerMethodField()
    blockers = serializers.SerializerMethodField()
    count = serializers.SerializerMethodField()

    def __init__(self, *args, **kwargs):
        return super(PendingIssueSerializer, self).__init__(*args, **kwargs)

    def __serialize(self, s):
        """ shorthand hack to well :-/ shortened the things.
        """
        return (s, s.Meta.model)

    def get_project(self, instance):
        # extract the model and serializer class
        # using this method. actually it doesn't improve
        # anything other than making it more readable
        serializer, model = self.__serialize(ProjectSerializer)

        return serializer(self._get(model, id=instance.project_id)).data

    def get_blockers(self, instance):
        # extract the model and serializer class
        # using this method. actually it doesn't improve
        # anything other than making it more readable
        serializer, model = self.__serialize(BlockerSerializer)

        return serializer(
            self._filter(model, id__in=instance.blockers),
            many=True).data

    def get_count(self, instance):
        """ return the number of blockers per project
            to make it easier to count it in the frontend
        """
        return len(instance.blockers)
















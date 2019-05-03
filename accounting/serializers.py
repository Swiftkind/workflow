from datetime import datetime, timedelta
from django.conf import settings

from rest_framework import serializers
from rest_framework.pagination import PageNumberPagination

from history.models import Standup, Blocker

from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    """ project serializer
    """
    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'channel_name',
            'date_created',
            'date_updated'
        )

class ProjectDetailSerializer(serializers.ModelSerializer):
    """ project serializer
    """
    pending_issues = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'channel_name',
            'date_created',
            'date_updated',
            'pending_issues'
        )
    
    def get_pending_issues(self, project):
        #find better solution
        from history.serializers import BlockerSerializer
        return BlockerSerializer(Blocker.objects.filter(standup__in=project.standup_set.all(), is_fixed=False), many=True).data

        
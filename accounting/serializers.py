from django.conf import settings
from rest_framework import serializers

from .models import Project

from history.models import Standup, Blocker

from datetime import datetime, timedelta

from rest_framework.pagination import PageNumberPagination

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

class ProjectDetailsSerializer(serializers.ModelSerializer):
    """ project serializer
    """
    date_data = serializers.SerializerMethodField()
    pending_issues = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'date_data',
            'description',
            'channel_name',
            'date_created',
            'date_updated',
            'pending_issues'
        )

    def get_date_data(self, obj):
        from history.serializers import ShortStandupProjectSerializer

        today = datetime.now().date()
        start_of_week = today - timedelta(days=today.weekday())
        end_of_week = start_of_week + timedelta(days=7)
        
        result = {
            'start_of_week': start_of_week,
            'end_of_week': end_of_week - timedelta(days=1)
        }

        return result
    
    def get_pending_issues(self, obj):
        #find better solution
        stand_up = Standup.objects.filter(project=obj)
        count = 0
        for stand in stand_up:
            count += Blocker.objects.filter(standup=stand, is_fixed=False).count()
        return count
        
from django.conf import settings
from django.contrib.postgres.fields import JSONField

from django.db import models

from accounting.models import Project


class Standup(models.Model):
    """ daily report
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)
    project = models.ForeignKey(Project, null=True, on_delete=models.SET_NULL)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"({self.user} {self.project}) {self.date_updated}"


class Done(models.Model):
    """ task that have been worked on (#1)
    """
    standup = models.ForeignKey('Standup', null=True, on_delete=models.SET_NULL)
    content = JSONField(default=dict, null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "What i have worked on (#1)"
        verbose_name_plural = "What i have worked on (#1)"

    def __str__(self):
        return f"{self.standup}"


class Todo(models.Model):
    """ task to be worked on (#2)
    """
    standup = models.ForeignKey('Standup', null=True, on_delete=models.SET_NULL)
    content = JSONField(default=dict, null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "What i am planning to do (#2)"
        verbose_name_plural = "What i am planning to do (#2)"

    def __str__(self):
        return f"{self.standup}"


class Blocker(models.Model):
    """ task blockers. (#3)
    """
    standup = models.ForeignKey('Standup', null=True, on_delete=models.SET_NULL)
    content = JSONField(default=dict, null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Issues/Blockers (#3)"
        verbose_name_plural = "Issues/Blockers (#3)"

    def __str__(self):
        return f"{self.standup}"
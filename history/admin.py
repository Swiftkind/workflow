from django.contrib import admin
from django.contrib.postgres.fields import JSONField

from django.forms import Textarea
from .models import Standup, Done, Todo, Blocker


class DoneAdmin(admin.TabularInline):
    """ admin inline panel config
    """
    model = Done
    extra = 0
    list_display = ('content', 'date_created', 'date_updated')

    formfield_overrides = {
        JSONField: {'widget': Textarea(attrs={'rows':3, 'cols':90})},
    }


class TodoAdmin(admin.TabularInline):
    """ admin inline panel config
    """
    model = Todo
    extra = 0
    list_display = ('content', 'date_created', 'date_updated')

    formfield_overrides = {
        JSONField: {'widget': Textarea(attrs={'rows':3, 'cols':90})},
    }


class BlockerAdmin(admin.TabularInline):
    """ admin inline panel config
    """
    model = Blocker
    extra = 0
    list_display = ('content', 'date_created', 'date_updated')

    formfield_overrides = {
        JSONField: {'widget': Textarea(attrs={'rows':3, 'cols':90})},
    }


class StandupAdmin(admin.ModelAdmin):
    """ admin panel config
    """
    model = Standup
    inlines = (DoneAdmin, TodoAdmin, BlockerAdmin)

    list_display = ('date_created', 'date_updated', 'user', 'project')


admin.site.register(Standup, StandupAdmin)
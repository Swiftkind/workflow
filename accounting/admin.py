from django.contrib import admin
from django.forms import Textarea
from django.db import models
from .models import Project, Invoice, InvoiceItem, Burn


class ProjectAdmin(admin.ModelAdmin):
    """ project admin config
    """
    model = Project
    list_display = ('name', 'date_started', 'status', 'on_going', 'duration', 'invoice_code')
    search_fields = ('name', 'invoice_code')


class InvoiceItemInline(admin.TabularInline):
    """ invoice item config
    """
    model = InvoiceItem
    extra = 0
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows':1, 'cols':60})},
    }


class InvoiceAdmin(admin.ModelAdmin):
    """ invoice admin config
    """
    model = Invoice
    list_display = ('invoice_num', 'project', 'invoice_date', 'due_date', 'subtotal', 'is_sent')
    search_fields = ('invoice_num', 'project__name')
    inlines = (InvoiceItemInline,)


class BurnAdmin(admin.ModelAdmin):
    """ burn admin config
    """
    model = Burn
    list_display = ('description', 'amount', 'burn_type', 'source')


admin.site.register(Project, ProjectAdmin)
admin.site.register(Invoice, InvoiceAdmin)
admin.site.register(InvoiceItem)
admin.site.register(Burn, BurnAdmin)
from django import template

register = template.Library()

@register.filter
def total_hours(result):
    return f"{sum(i.total_hours for i in result)}"
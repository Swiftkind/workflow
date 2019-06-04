from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class WeeklyReportsPagination(PageNumberPagination):
    """ weekly report pagination
    """
    page_size = 10
    force_load_size = int(page_size * 0.75)
    page_size_query_param = 'page_size'
    max_page_size = 100000


class ProjectReportsPagination(PageNumberPagination):
    """ Project report pagination
    """
    page_size = 12
    force_load_size = int(page_size * 0.75)
    page_size_query_param = 'page_size'
    max_page_size = 100000
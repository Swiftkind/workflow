from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class FeedPagination(PageNumberPagination):
    """ feed pagination
    """
    page_size = 15
    force_load_size = int(page_size * 0.75)
    page_size_query_param = 'page_size'
    max_page_size = 100000
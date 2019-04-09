from history.models import Standup
from history.serializers import ReportSerializer


class FeedParser(object):
    """ helper class that parse and manage
        feed items.
    """
    def __init__(self, *args, **kwargs):
        return super(FeedParser, self).__init__(*args, **kwargs)

    def serialize(self, instance, many=False):
        # avoid circular import
        from .serializers import EventSerializer

        return {
            'standup': ReportSerializer,
            'event': EventSerializer
        }[instance._meta.model_name](instance, many=many).data
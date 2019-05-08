import os
import datetime

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

from django.db import models
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.utils import timezone

from rest_framework.authtoken.models import Token
from payroll.models import Deduction

from utils.mixins import ImageDownload

from .managers import UserManager
from .utils import user_media_path


class User(ImageDownload, AbstractBaseUser, PermissionsMixin):
    """ account user information
    """
    MANAGEMENT = '0'
    DEVELOPER = '1'
    DESIGNER = '2'
    TRAINEE = '3'
    STAFF = '4'

    POSITION_TYPE = (
        (DEVELOPER, 'developer'),
        (DESIGNER, 'designer'),
        (TRAINEE, 'trainee'),
        (MANAGEMENT, 'management'),
        (STAFF, 'staff'),
    )

    email = models.EmailField(max_length=500, unique=True)
    first_name = models.CharField(max_length=80, null=True, blank=True)
    last_name = models.CharField(max_length=80, null=True, blank=True)
    birthdate = models.DateField(null=True, blank=True)
    image = models.ImageField(upload_to=user_media_path, null=True, blank=True)

    position = models.CharField(max_length=50, null=True, blank=True)
    position_type = models.CharField(max_length=2, choices=POSITION_TYPE, default=TRAINEE)
    date_started = models.DateField(null=True, blank=True)
    slack_id = models.CharField(max_length=50, null=True, blank=True)

    deductions = models.ManyToManyField(Deduction, blank=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("first_name", "last_name")
    _image = _cover = None

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"

    def delete_image(self, image):
        """ delete the existing user image
        """
        os.remove(image.path if os.path.exists(image.path) else None)
        return

    def get_token(self):
        """ get or generate a user token that is valid for
            `settings.AUTH_TOKEN_EXPIRY_TIME`
        """
        token, created = Token.objects.get_or_create(user=self)
        expiry_date = token.created + datetime.timedelta(days=settings.AUTH_TOKEN_EXPIRY_TIME)

        if not created and expiry_date < timezone.now():
            # delete token
            token.delete()
            # generate a new one
            token = Token.objects.create(user=self)

        return token

    def download_img(self, imgurl):
        try:
            self.download(imgurl)
        except Exception as e:
            # silently pass this exception since it only
            # means that the image source is not accessible.
            pass

    def get_full_name(self):
        """ return the complete name of
            the user.
        """
        if self.first_name and self.last_name:
            return f"{self.first_name.title()} {self.last_name.title()}"
        return self.email

    def generate_payroll(self):
        """
        """
        pass


@receiver(pre_save, sender=User)
def auto_remove_imagefile(sender, instance=None, **kwargs):
    """ remove the existing image file if
        there is a new one.
    """
    user = User.objects.filter(id=instance.id).first()

    if user and user.image and instance.image != user.image:
        instance.delete_image(user.image)

@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        User.get_token(instance)


class SalaryLog(models.Model):
    """ salary logs
    """
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    amount = models.DecimalField(max_digits=99, decimal_places=2, default=0.00)
    date_implemented = models.DateField(null=True, blank=True)
    is_primary = models.BooleanField(default=False)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user}"


class SlackToken(models.Model):
    """ slack access token
    """
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    token = models.CharField(max_length=80)

    def __str__(self):
        return f"({self.user}) {self.token}"

class TimeLog(models.Model):
    """ records time in and time out of user
    """

    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    time_in = models.DateTimeField(null=True, blank=True)
    time_out = models.DateTimeField(null=True, blank=True)

    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user}, {self.time_in} - {self.time_out}"
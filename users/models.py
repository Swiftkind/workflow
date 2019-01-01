import os

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver

from rest_framework.authtoken.models import Token
from payroll.models import Deduction

from .managers import UserManager
from .utils import user_media_path


class User(AbstractBaseUser, PermissionsMixin):
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
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    birthdate = models.DateField(null=True, blank=True)
    image = models.ImageField(upload_to=user_media_path, null=True, blank=True)

    position = models.CharField(max_length=50, null=True, blank=True)
    position_type = models.CharField(max_length=2, choices=POSITION_TYPE, default=TRAINEE)
    date_started = models.DateField(null=True, blank=True)

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


@receiver(pre_save, sender=User)
def auto_remove_imagefile(sender, instance=None, **kwargs):
    """ remove the existing image file if
        there is a new one.
    """
    user = User.objects.filter(id=instance.id).first()

    if user and user.image and instance.image != user.image:
        instance.delete_image(user.image)
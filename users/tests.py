from django.test import TestCase, Client
from django.urls import reverse
from django.contrib import auth


from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from .models import User

# Create your tests here.

class UserPasswordTest(TestCase):

    def setUp(self):
        self.test_user = User.objects.create_user(email="test@test.com")

        self.url = reverse('change_password')
        self.login_url = reverse('login')

        self.client = APIClient()
        self.client.force_authenticate(user=self.test_user)
    
    def test_valid_password(self):

        # Test Post Method with Valid Data
        data = {
            'new_password': 'admin192168',
            'confirm_new_password': 'admin192168',
        }
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 204)


        # Test Put Method with Valid Data
        data = {
            'old_password': 'admin192168',
            'new_password': 'admin',
            'confirm_new_password': 'admin',
        }
        response = self.client.put(self.url, data)
        self.assertEqual(response.status_code, 204)
        print(response.data)


    def test_invalid_password(self):
        # Test Post Method with Invalid Data

        # Test Post Method with Empty Data
        response = self.client.post(self.url, {})
        self.assertEqual(response.status_code, 400)

        #Mismatch Password
        data = {
            'new_password': 'admin1921681111',
            'confirm_new_password': 'admin192168',
        }
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 400)

        # Empty confirm_new_password Field
        data = {
            'new_password': 'admin1921681111',
            'confirm_new_password': '',
        }
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 400)

        # Test Put Method with Invalid Data

        # Test Put Method with Empty Data
        response = self.client.put(self.url, {})
        self.assertEqual(response.status_code, 400)

        # Wrong Old Password
        data = {
            'old_password': 'invalid',
            'new_password': 'admin12345',
            'confirm_new_password': 'admin12345',
        }
        response = self.client.put(self.url, data)
        self.assertEqual(response.status_code, 400)

        # Mismatch new password and confirm password
        data = {
            'old_password': 'admin',
            'new_password': 'admin12345223444',
            'confirm_new_password': 'admin12345',
        }
        response = self.client.put(self.url, data)
        self.assertEqual(response.status_code, 400)
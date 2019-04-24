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

        self.client = APIClient()
        self.client.force_authenticate(user=self.test_user)
    
    def test_change_password(self):
        url = reverse('change_password')

        #Test Get Method Before Saving Password
        print(" ")
        print("Test Get Method Before Saving Password")
        response = self.client.get(url)
        self.assertEqual(response.data, False)

        # Test Post Method with Empty Data
        print(" ")
        print("Test Post Method with Empty Data")
        response = self.client.post(url, {})
        print(response.data)

        # Test Post Method with Valid Data
        print(" ")
        print("Test Post Method with Valid Data")
        data = {
            'new_password': 'admin192168',
            'confirm_new_password': 'admin192168',
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 200)
        print(response.data)

        # Test Post Method with Invalid Data
        print(" ")
        print("Test Post Method with Invalid Data")
        #Mismatch Password
        print(" ")
        print("Mismatch Password")
        data = {
            'new_password': 'admin1921681111',
            'confirm_new_password': 'admin192168',
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 400)
        print(response.data)

        # Empty confirm_new_password Field
        print(" ")
        print("Empty confirm_new_password Field")
        data = {
            'new_password': 'admin1921681111',
            'confirm_new_password': '',
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 400)
        print(response.data)

        # Test Put Method with Empty Data
        print(" ")
        print("Test Put Method with Empty Data")
        response = self.client.put(url, {})
        self.assertEqual(response.status_code, 400)
        print(response.data)

        # Test Put Method with Valid Data
        print(" ")
        print("Test Put Method with Valid Data")
        data = {
            'old_password': 'admin192168',
            'new_password': 'admin',
            'confirm_new_password': 'admin',
        }
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, 200)
        print(response.data)

        # Test Put Method with Invalid Data
        print(" ")
        print("Test Put Method with Invalid Data")
        # Wrong Old Password
        print(" ")
        print("Wrong Old Password")
        data = {
            'old_password': 'invalid',
            'new_password': 'admin12345',
            'confirm_new_password': 'admin12345',
        }
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, 400)
        print(response.data)

        # Mismatch new password and confirm password
        print(" ")
        print("Mismatch new password and confirm password")
        data = {
            'old_password': 'admin',
            'new_password': 'admin12345223444',
            'confirm_new_password': 'admin12345',
        }
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, 400)
        print(response.data)

        #Test Get Method After Saving Password 
        print(" ")
        print("Test Get Method After Saving Password")
        response = self.client.get(url)
        self.assertEqual(response.data, True)
from django.db import models
from django.contrib.auth.models import User


class LoginForm(models.Model):
    username = models.CharField(max_length=40, unique=True)
    password = models.CharField(
        max_length=100
    )  # Ideally hashed, but for demo this is okay
    role = models.CharField(
        max_length=20, default="Admin"
    )  # Example: 'Admin', 'User', 'Manager', etc.

    def __str__(self):
        return f"{self.username} ({self.role})"


class SubmitForm(models.Model):
    formcode = models.CharField(max_length=100)
    problemdate = models.DateTimeField(null=True)  # Changed to DateField for user input
    machinename = models.CharField(max_length=100)
    machinecode = models.CharField(max_length=100)
    machineplacecode = models.CharField(max_length=100, default="MDF1")
    stoptime = models.DateTimeField(null=True)  # Removed auto_now_add
    failuretime = models.TimeField(null=True)  # Removed auto_now_add
    operatorname = models.CharField(max_length=100)
    productionstop = models.CharField(max_length=100)
    section = models.CharField(max_length=100)
    shift = models.CharField(max_length=100)
    suggesttime = models.CharField(max_length=30, null=True)  # Removed auto_now_add
    worksuggest = models.CharField(max_length=100)
    fixrepair = models.CharField(max_length=100)
    reportinspection = models.CharField(max_length=100)  # Typo fixed
    faultdm = models.CharField(max_length=100)
    problemdescription = models.TextField(blank=True, null=True)  # No changes needed
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="submitform"
    )

    def __str__(self):
        return self.formcode

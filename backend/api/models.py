from django.db import models
from django.contrib.auth.models import User


class SubmitForm(models.Model):
    formcode = models.CharField(max_length=100, null=True)
    problemdate = models.DateTimeField(null=True)  # Changed to DateField for user input
    machinename = models.CharField(max_length=100, null=True)
    machinecode = models.CharField(max_length=100, null=True)
    machineplacecode = models.CharField(max_length=100, default="MDF1")
    stoptime = models.DateTimeField(null=True)  # Removed auto_now_add
    failuretime = models.TimeField(null=True)  # Removed auto_now_add
    operatorname = models.CharField(max_length=100, null=True)
    productionstop = models.CharField(max_length=100, null=True)
    section = models.CharField(max_length=100, null=True)
    shift = models.CharField(max_length=100, null=True)
    suggesttime = models.CharField(max_length=30, null=True)  # Removed auto_now_add
    worksuggest = models.CharField(max_length=100, null=True)
    fixrepair = models.CharField(max_length=100, null=True)
    reportinspection = models.CharField(max_length=100, null=True)  # Typo fixed
    faultdm = models.CharField(max_length=50, null=True)
    problemdescription = models.TextField(blank=True, null=True)  # No changes needed
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="submitform"
    )

    def __str__(self):
        return self.formcode

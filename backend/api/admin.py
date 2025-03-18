from django.contrib import admin
from .models import SubmitForm, LoginForm


class LoginAdmin(admin.ModelAdmin):
    list_display = ["username", "password", "role"]


admin.site.register(SubmitForm, LoginAdmin)
admin.site.register(LoginForm)

from django.urls import path
from . import views
from .views import api_login

urlpatterns = [
    path("api/login/", api_login, name="api_login"),
    path("submitform/", views.FormListCreate.as_view(), name="form-list"),
    path("submitform/delete/<int:pk>/", views.FormDelete.as_view(), name="form-delete"),
]

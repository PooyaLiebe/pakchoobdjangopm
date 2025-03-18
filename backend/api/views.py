from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, SubmitFormSerializer
from .models import SubmitForm, LoginForm


@api_view(["POST"])
def api_login(request):
    username = request.data.get("username")
    password = request.data.get("password")

    try:
        user = LoginForm.object.get(username=username, password=password)
        return Response(
            {"status": "success", "username": user.username, "role": user.role}
        )
    except LoginForm.DoesNotExist:
        return Response(
            {"status": "error", "message": "Inavlid Credentials"}, status=401
        )


class FormListCreate(generics.ListCreateAPIView):
    serializer_class = SubmitFormSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return SubmitForm.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class FormDelete(generics.DestroyAPIView):
    serializer_class = SubmitFormSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return SubmitForm.objects.filter(author=user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

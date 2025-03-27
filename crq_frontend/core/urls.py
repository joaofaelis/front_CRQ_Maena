from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path("cadastro/", views.cadastro_view, name="cadastro"),
    path("logout/", views.logout_view, name="logout"),
]

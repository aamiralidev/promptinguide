from rest_framework import routers
from django.urls import path, include
from .views import CategoryViewSet, TemplateViewSet

# Create a router and register the viewsets
router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'templates', TemplateViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

from rest_framework import routers
from .views import ArticleViewSet

router = routers.DefaultRouter()
router.register(r'articles', ArticleViewSet)
urlpatterns = router.urls

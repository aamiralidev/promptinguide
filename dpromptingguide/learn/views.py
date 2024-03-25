from rest_framework import viewsets, permissions, filters
from .models import Article
from .serializers import ArticleSerializer
from .filters import ArticleFilterBackend


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = [ArticleFilterBackend]

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated()]
        return super().get_permissions()

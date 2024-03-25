from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    hasChildren = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'parent', 'hasChildren']

    # def get_hasChildren(self, obj):
    #     return Article.objects.filter(parent=obj).exists()
    def to_representation(self, instance):
        # Check if any child articles exist for the current article
        instance.hasChildren = instance.article_set.exists()
        return super().to_representation(instance)

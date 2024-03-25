from rest_framework import serializers
from .models import Template
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']


class TemplateSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Template
        fields = ['id', 'category', 'title', 'intention', 'motivation', 'structure', 'example', 'consequences']
    


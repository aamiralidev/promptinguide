from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

from django.db import models

class Template(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    title = models.CharField(max_length=100)
    intention = models.TextField(blank=True)
    motivation = models.TextField(blank=True)
    structure = models.TextField()
    example = models.TextField(blank=True)
    consequences = models.TextField(blank=True)

    def __str__(self):
        return self.title

from rest_framework import filters

class ArticleFilterBackend(filters.BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        parent_id = request.query_params.get('parent')
        if parent_id:
            queryset = queryset.filter(parent=parent_id)
        return queryset
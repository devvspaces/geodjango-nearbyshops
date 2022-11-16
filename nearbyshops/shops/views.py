from django.views import generic
from django.contrib.gis.geos import Point
from django.contrib.gis.db.models.functions import Distance
from .models import Shop
from django.core.serializers import serialize
import json


longitude = -80.191788
latitude = 25.761681

user_location = Point(longitude, latitude, srid=4326)


class Home(generic.ListView):
    model = Shop
    context_object_name = 'shops'
    queryset = Shop.objects.annotate(
        distance=Distance('location', user_location)
    ).order_by('distance')[:10]
    template_name = 'shop/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["markers"] = json.loads(serialize("geojson", self.queryset))
        return context

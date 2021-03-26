from django.conf.urls import url
from django.urls import path, include

from userdashboard.views import AddToCart, ViewCart, CheckOut, ViewOrders

from bambiha.middlewares import auth_middleware, ndb_context_middleware

urlpatterns = [
    path('addtocart/', ndb_context_middleware(AddToCart)),
    path('viewcart/', ndb_context_middleware(ViewCart)),
    path('checkout/', ndb_context_middleware(CheckOut)),
    path('vieworders/', ndb_context_middleware(ViewOrders)),


]

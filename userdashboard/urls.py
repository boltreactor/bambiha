from django.urls import path

from bambiha.middlewares import ndb_context_middleware, auth_middleware
from userdashboard.views import AddToCart, ViewCart, CheckOut, ViewOrders, FavUnfav, GetFavorites, getProducts, \
    getCategoriesHeaders

urlpatterns = [
    path('addtocart/', ndb_context_middleware(AddToCart)),
    path('viewcart/', ndb_context_middleware(ViewCart)),
    path('checkout/', ndb_context_middleware(CheckOut)),
    path('vieworders/', ndb_context_middleware(auth_middleware(ViewOrders))),
    path('managefavorites/', ndb_context_middleware(FavUnfav)),
    path('getfavorites/', ndb_context_middleware(GetFavorites)),
    path('getproducts/', ndb_context_middleware(getProducts)),
    path('getcategories/', ndb_context_middleware(getCategoriesHeaders)),

]

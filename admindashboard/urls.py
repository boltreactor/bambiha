from django.conf.urls import url
from django.urls import path, include

from admindashboard.views import AddCategory, EditCategory, GetCategory, DeleteCategory, AllCategories, AddProduct, EditProduct
from admindashboard.views import GetProduct, DeleteProduct, AllProducts, ViewOrders, ViewOrderItems, UpdateOrder
from bambiha.middlewares import auth_middleware, ndb_context_middleware

urlpatterns = [
    path('addcategory/', ndb_context_middleware(AddCategory)),
    path('editcategory/', ndb_context_middleware(EditCategory)),
    path('getcategory/', ndb_context_middleware(GetCategory)),
    path('deletecategory/', ndb_context_middleware(DeleteCategory)),
    path('allcategories/', ndb_context_middleware(AllCategories)),
    path('addproduct/', ndb_context_middleware(AddProduct)),
    path('editproduct/', ndb_context_middleware(EditProduct)),
    path('getproduct/', ndb_context_middleware(GetProduct)),
    path('deleteproduct/', ndb_context_middleware(DeleteProduct)),
    path('allproducts/', ndb_context_middleware(AllProducts)),
    path('vieworders/', ndb_context_middleware(ViewOrders)),
    path('vieworderdetails/', ndb_context_middleware(ViewOrderItems)),
    path('updatestatus/', ndb_context_middleware(UpdateOrder)),

]

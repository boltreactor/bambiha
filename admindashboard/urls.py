from django.urls import path

from admindashboard.views import AddCategory, EditCategory, GetCategory, DeleteCategory, AllCategories, AddProduct, \
    EditProduct, ViewOrders, ViewOrderItems, UpdateOrder, HeaderCategories
from admindashboard.views import GetProduct, DeleteProduct, AllProducts
from bambiha.middlewares import ndb_context_middleware, admin_auth_middleware

urlpatterns = [
    path('addcategory/', ndb_context_middleware(admin_auth_middleware(AddCategory))),
    path('editcategory/', ndb_context_middleware(admin_auth_middleware(EditCategory))),
    path('getcategory/', ndb_context_middleware(admin_auth_middleware(GetCategory))),
    path('deletecategory/', ndb_context_middleware(admin_auth_middleware(DeleteCategory))),
    path('allcategories/', ndb_context_middleware(AllCategories)),
    path('headercategories/', ndb_context_middleware(HeaderCategories)),
    path('addproduct/', ndb_context_middleware(admin_auth_middleware(AddProduct))),
    path('editproduct/', ndb_context_middleware(admin_auth_middleware(EditProduct))),
    path('getproduct/', ndb_context_middleware(admin_auth_middleware(GetProduct))),
    path('deleteproduct/', ndb_context_middleware(admin_auth_middleware(DeleteProduct))),
    path('allproducts/', ndb_context_middleware(AllProducts)),
    path('vieworders/', ndb_context_middleware(admin_auth_middleware(ViewOrders))),
    path('vieworderitems/', ndb_context_middleware(admin_auth_middleware(ViewOrderItems))),
    path('updatestatus/', ndb_context_middleware(admin_auth_middleware(UpdateOrder))),
]

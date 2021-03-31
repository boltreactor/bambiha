from django.urls import path
from admindashboard.views import AddCategory, EditCategory, GetCategory, DeleteCategory, AllCategories, AddProduct, \
    EditProduct, ViewOrders, ViewOrderItems, UpdateOrder
from admindashboard.views import GetProduct, DeleteProduct, AllProducts
from bambiha.middlewares import auth_middleware, ndb_context_middleware

urlpatterns = [
    path('addcategory/', ndb_context_middleware(auth_middleware(AddCategory))),
    path('editcategory/', ndb_context_middleware(auth_middleware(EditCategory))),
    path('getcategory/', ndb_context_middleware(auth_middleware(GetCategory))),
    path('deletecategory/', ndb_context_middleware(auth_middleware(DeleteCategory))),
    path('allcategories/', ndb_context_middleware(auth_middleware(AllCategories))),
    path('addproduct/', ndb_context_middleware(auth_middleware(AddProduct))),
    path('editproduct/', ndb_context_middleware(auth_middleware(EditProduct))),
    path('getproduct/', ndb_context_middleware(auth_middleware(GetProduct))),
    path('deleteproduct/', ndb_context_middleware(auth_middleware(DeleteProduct))),
    path('allproducts/', ndb_context_middleware(auth_middleware(AllProducts))),
    path('vieworders/', ndb_context_middleware(auth_middleware(ViewOrders))),
    path('vieworderitems/', ndb_context_middleware(auth_middleware(ViewOrderItems))),
    path('updatestatus/', ndb_context_middleware(auth_middleware(UpdateOrder))),
]

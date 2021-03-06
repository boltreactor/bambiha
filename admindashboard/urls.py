from django.urls import path

from admindashboard.views import AddCategory, EditCategory, GetCategory, DeleteCategory, AllCategories, AddProduct, \
    EditProduct, ViewOrders, ViewOrderItems, UpdateOrderStatus, HeaderCategories, NewProducts, DeleteOrder, UpdateOrder
from admindashboard.views import GetProduct, DeleteProduct, AllProducts
from bambiha.middlewares import ndb_context_middleware, admin_auth_middleware
from registration.views import account_status, manage_admin_status

urlpatterns = [
    path('addcategory/', ndb_context_middleware(admin_auth_middleware(AddCategory))),
    path('editcategory/', ndb_context_middleware(admin_auth_middleware(EditCategory))),
    path('getcategory/', ndb_context_middleware(admin_auth_middleware(GetCategory))),
    path('deletecategory/', ndb_context_middleware(admin_auth_middleware(DeleteCategory))),
    path('allcategories/', ndb_context_middleware(AllCategories)),
    path('headercategories/', ndb_context_middleware(HeaderCategories)),
    path('addproduct/', ndb_context_middleware(admin_auth_middleware(AddProduct))),
    path('editproduct/', ndb_context_middleware(admin_auth_middleware(EditProduct))),
    path('getproduct/', ndb_context_middleware(GetProduct)),
    path('deleteproduct/', ndb_context_middleware(admin_auth_middleware(DeleteProduct))),
    path('allproducts/', ndb_context_middleware(AllProducts)),
    path('newproducts/', ndb_context_middleware(NewProducts)),
    path('vieworders/', ndb_context_middleware(admin_auth_middleware(ViewOrders))),
    path('vieworderitems/', ndb_context_middleware(admin_auth_middleware(ViewOrderItems))),
    path('deleteorder/', ndb_context_middleware(admin_auth_middleware(DeleteOrder))),
    path('updateorder/', ndb_context_middleware(admin_auth_middleware(UpdateOrder))),
    path('updatestatus/', ndb_context_middleware(admin_auth_middleware(UpdateOrderStatus))),
    path('manage_status/', ndb_context_middleware(admin_auth_middleware(account_status))),
    path('manage-admin/', ndb_context_middleware(admin_auth_middleware(manage_admin_status))),

]

from django.shortcuts import render
from .models import Category, Products
from userdashboard.models import Order, OrderItems
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from bambiha.utils import to_json_ndb, get_token


@csrf_exempt
@api_view(['GET', 'POST'])
def AddCategory(request):
    category = Category.add_category(request)
    if category:
        return Response({
            'status': status.HTTP_200_OK, 'message': "Category Added", 'category': to_json_ndb(category)
        }, status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET', 'POST'])
def EditCategory(request):
    category = Category.edit_category(request)
    if category:
        return Response({
            'status': status.HTTP_200_OK, 'message': "Category Updated", 'category': to_json_ndb(category)
        }, status.HTTP_200_OK)


@api_view(['GET'])
def GetCategory(request):
    category = Category.get_category(request)
    if category:
        return Response({
            'status': status.HTTP_200_OK, 'category': to_json_ndb(category)
        }, status.HTTP_200_OK)


@api_view(['GET'])
def AllCategories(request):
    categories = Category.get_categories(request)
    if categories:
        return Response({
            'status': status.HTTP_200_OK, 'category': to_json_ndb(categories)
        }, status.HTTP_200_OK)


@api_view(['GET'])
def HeaderCategories(request):
    categories = Category.get_categories_headers(request)
    if categories:
        return Response({
            'status': status.HTTP_200_OK, 'category': to_json_ndb(categories)
        }, status.HTTP_200_OK)


@api_view(['GET'])
def DeleteCategory(request):
    category = Category.delete_category(request)
    if category:
        return Response({
            'status': status.HTTP_200_OK, 'message': "Category Deleted",
        }, status.HTTP_200_OK)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Category not found",
    }, status.HTTP_200_OK)


@api_view(['GET'])
def AllProducts(request):
    categories = Category.get_categories(request)
    products = Products.get_products(request)
    if products:
        return Response({
            'status': status.HTTP_200_OK, 'products': products
        }, status.HTTP_200_OK)
    else:
        return Response({
            'status': status.HTTP_200_OK, 'message': "No products found", 'products': []
        }, status.HTTP_200_OK)


@api_view(['GET'])
def NewProducts(request):
    products = Products.get_new_products(request)
    if products:
        return Response({
            'status': status.HTTP_200_OK, 'products': products
        }, status.HTTP_200_OK)
    else:
        return Response({
            'status': status.HTTP_200_OK, 'message': "No products found"
        }, status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET', 'POST'])
def AddProduct(request):
    product = Products.add_product(request)
    if product:
        return Response({
            'status': status.HTTP_200_OK, 'message': "Product Added", 'product': to_json_ndb(product)
        }, status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET', 'POST'])
def EditProduct(request):
    product = Products.edit_product(request)
    if product:
        products = Products.get_products(request)
        return Response({
            'status': status.HTTP_200_OK, 'message': "Product updated", 'product': products,
        }, status.HTTP_200_OK)


@api_view(['GET'])
def GetProduct(request):
    product = Products.get_product(request)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Product Added", 'product': product
    }, status.HTTP_200_OK)


# @api_view(['GET', 'POST'])
# def DisableProduct(request):
#     product = Products.disable_product(request)
#     return Response({
#         'status': status.HTTP_200_OK, 'message': "Product disabled/enabled",
#     }, status.HTTP_200_OK)


@api_view(['GET'])
def DeleteProduct(request):
    product = Products.delete_product(request)
    products = Products.get_product(request)
    if product:
        return Response({
            'status': status.HTTP_200_OK,
            'message': "Product Deleted",
            'products': products,
        }, status.HTTP_200_OK)
    return Response({
        'status': status.HTTP_200_OK,
        'message': "You cannot delete this product for now as it is yet in some incomplete orders.",
        'products': products,
    }, status.HTTP_200_OK)


@api_view(['GET'])
def ViewOrders(request):
    orders = Order.get_orders(request)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Orders by users loaded!", 'orders': orders
    }, status.HTTP_200_OK)


@api_view(['GET'])
def ViewOrderItems(request):
    items = OrderItems.get_order_items(request)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Order Items", 'orders': items
    }, status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET', 'POST'])
def UpdateOrderStatus(request):
    Order.update_status(request)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Order Status Updated",
    }, status.HTTP_200_OK)


@api_view(['POST'])
def UpdateOrder(request):
    order = Order.update_order(request)
    if order:
        return Response({
            'status': status.HTTP_200_OK, 'message': "Order Updated", 'order': to_json_ndb(order)
        }, status.HTTP_200_OK)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Order not found",
    }, status.HTTP_200_OK)


@api_view(['POST'])
def DeleteOrder(request):
    order = Order.delete_order(request)
    if order:
        return Response({
            'status': status.HTTP_200_OK, 'message': "Order Deleted",
        }, status.HTTP_200_OK)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Order not found",
    }, status.HTTP_200_OK)

from django.shortcuts import render
from google.cloud import ndb

from admindashboard.models import Products, Category
from .models import Cart, Order, OrderItems, Favorites
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from bambiha.utils import to_json_ndb, get_token


@csrf_exempt
@api_view(['GET', 'POST'])
def AddToCart(request):
    products = Cart.add_to_cart(request)
    if products:
        return Response({
            'status': status.HTTP_200_OK, 'message': "Cart Updated", 'products': products
        }, status.HTTP_200_OK)


@api_view(['GET'])
def ViewCart(request):
    products = Cart.get_cart_details(request)
    return Response({
        'status': status.HTTP_200_OK, 'message': "cart products", 'products': products
    }, status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET', 'POST'])
def CheckOut(request):
    order = Order.place_order(request)
    OrderItems.add_order_items(request, order)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Order placed"
    }, status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET', 'POST'])
def ViewOrders(request):
    orders = Order.get_user_orders(request)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Order placed", 'orders': orders
    }, status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET', 'POST'])
def FavUnfav(request):
    Favorites.fav_unfav(request)
    fav = Favorites.get_favorites(request)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Favorites Updated", 'favorites': fav
    }, status.HTTP_200_OK)


@api_view(['GET'])
def GetFavorites(request):
    favorites = Favorites.get_favorites(request)
    return Response({
        'status': status.HTTP_200_OK, 'message': "Favorites", 'favorites': favorites
    }, status.HTTP_200_OK)


@api_view(['GET'])
def getProducts(request):
    ancestor_key = ndb.Key("Product", "product")
    all_products = []
    if request.query_params.get('category_key', None):
        products = Products.query(
            Products.category_key == request.query_params['category_key'],
            ancestor=ancestor_key).fetch()
    else:
        products = Products.query(ancestor=ancestor_key).fetch()
    for p in products:
        all_products.append({
            "category": {
                "key": p.category_key,
                "name": Products.get_with_key(p.category_key).name
            },
            "date": p.date,
            "description": p.description,
            "images": p.images,
            "price": p.price,
            "quantity": p.quantity,
            "title": p.title,
            "id": p.key.urlsafe(),
            "status": p.product_status
        })
    if all_products:
        return Response({
            'status': status.HTTP_200_OK, 'products': all_products
        }, status.HTTP_200_OK)
    else:
        return Response({
            'status': status.HTTP_200_OK, 'message': "No products found", 'products': all_products
        }, status.HTTP_200_OK)


@api_view(['GET'])
def getCategoriesHeaders(request):
    categories = Category.query().order(-Category.status).fetch(5)
    if categories:
        return Response({
            'status': status.HTTP_200_OK, 'category': to_json_ndb(categories)
        }, status.HTTP_200_OK)


@api_view(['POST'])
def updateProductQuantity(request):
    product = Cart.update_product_quantity(request)
    if product:
        return Response({
            'status': status.HTTP_200_OK, "message": "Product updated successfully",
            "cart_product": product
        }, status.HTTP_200_OK)

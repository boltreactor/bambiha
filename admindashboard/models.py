from django.db import models
from google.cloud import ndb
from algoliasearch import index, client, algoliasearch
import boto3


class Category(ndb.Model):
    user_key = ndb.StringProperty()
    name = ndb.StringProperty()

    @classmethod
    def add_category(cls, request):
        ancestor_key = ndb.Key("Category", "category")
        category = Category(parent=ancestor_key,
                            name=request.POST.get('category'),
                            user_key=request.session.get('user'))
        category.put()
        return category

    @classmethod
    def get_categories(cls, request):
        ancestor_key = ndb.Key("Category", "category")
        return cls.query(cls.user_key == request.session.get('user'), ancestor=ancestor_key).fetch()

    @classmethod
    def get_category(cls, request):
        return ndb.Key(urlsafe=request.POST.get('category_key')).get()

    @classmethod
    def edit_category(cls, request):
        category = ndb.Key(urlsafe=request.POST.get('category_key')).get()
        category.name = request.POST.get('category')
        category.put()
        return category

    @classmethod
    def delete_category(cls, request):
        category = ndb.Key(urlsafe=request.POST.get('category_key')).get()
        if category:
            category.key.delete()
            return True
        return False


class Products(ndb.Model):
    user_key = ndb.StringProperty()
    category_key = ndb.StringProperty()
    title = ndb.StringProperty()
    description = ndb.StringProperty()
    quantity = ndb.IntegerProperty()
    price = ndb.IntegerProperty()
    images = ndb.StringProperty(repeated=True)
    date = ndb.DateTimeProperty(auto_now=True)

    @classmethod
    def add_product(cls, request):
        ancestor_key = ndb.Key("Product", "product")
        product = Products(parent=ancestor_key,
                           title=request.POST.get('title'),
                           description=request.POST.get('description'),
                           category_key=request.POST.get('category_key'),
                           quantity=int(request.POST.get('quantity')),
                           price=int(request.POST.get('price')),
                           user_key=request.session.get('user'))
        product.put()

        files = request.FILES.getlist('images')
        s3 = boto3.resource(
            service_name='s3',
            region_name='us-east-2',
            aws_access_key_id='AKIARXUVHB5JQZ2AQ6HM',
            aws_secret_access_key='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'
        )
        bucket = s3.Bucket('test-bucket-ndb')
        for file in files:
            details = bucket.put_object(Key=file.name, Body=file)
            product.images.append("https://test-bucket-ndb.s3.us-east-2.amazonaws.com/" + details.key)
            product.put()
        cls.algolia_search(product, request)

        return product

    @classmethod
    def get_products(cls, request):
        ancestor_key = ndb.Key("Product", "product")
        return cls.query(cls.user_key == request.session.get('user'), ancestor=ancestor_key).fetch()

    @classmethod
    def edit_product(cls, request):
        product = ndb.Key(urlsafe=request.POST.get('product_key')).get()
        product.title = request.POST.get('title')
        product.description = request.POST.get('description')
        product.category_key = request.POST.get('category_key')
        product.quantity = int(request.POST.get('quantity'))
        product.price = int(request.POST.get('price'))

        files = request.FILES.getlist('images')
        if files:
            product.images = []
            s3 = boto3.resource(
                service_name='s3',
                region_name='us-east-2',
                aws_access_key_id='AKIARXUVHB5JQZ2AQ6HM',
                aws_secret_access_key='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'
            )
            bucket = s3.Bucket('test-bucket-ndb')
            for file in files:
                details = bucket.put_object(Key=file.name, Body=file)
                product.images.append("https://test-bucket-ndb.s3.us-east-2.amazonaws.com/" + details.key)
                product.put()
        cls.algolia_search(product, request)
        product.put()
        return product

    @classmethod
    def get_product(cls, request):
        return ndb.Key(urlsafe=request.POST.get('product_key')).get()

    @classmethod
    def delete_product(cls, request):
        product = ndb.Key(urlsafe=request.POST.get('product_key')).get()
        if product:
            product.key.delete()
            return True
        return False

    @classmethod
    def get_all_products(cls):
        return cls.query()

    @classmethod
    def algolia_search(cls, product, request):
        client = algoliasearch.Client("NAZL5D5N2H", "6b46e44428396a9af7db1a3ba527577e")
        index = client.init_index('search')
        index.save_object({
            'objectID': product.key.urlsafe().decode(),
            'title': request.POST.get('title'),
            'description': request.POST.get('description'),
            'price': request.POST.get('price'),
            'image': product.images[0]
        })

    @classmethod
    def search_product(cls, request):
        all_products = []
        client = algoliasearch.Client("NAZL5D5N2H", "6b46e44428396a9af7db1a3ba527577e")
        index = client.init_index('search')
        results = index.search(request.GET.get('search'))

        for r in results["hits"]:
            all_products.append({
                'title': r['title'],
                'description': r['description'],
                'price': r['price'],
                'image': r['image'],
                'key': r['objectID']
            })
        return all_products

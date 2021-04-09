from google.cloud import ndb


class Cart(ndb.Model):
    user_key = ndb.KeyProperty()
    product_key = ndb.KeyProperty()
    quantity = ndb.IntegerProperty(default=1)
    date = ndb.DateTimeProperty(auto_now=True)

    @classmethod
    def get_with_key(cls, key):
        return ndb.Key(urlsafe=key).get()

    @classmethod
    def add_to_cart(cls, request):
        ancestor_key = ndb.Key("Cart", "cart")
        cart = None
        if request.POST.get('quantity') == '0':
            cls.query(cls.user_key == ndb.Key(urlsafe=request.session.get('user')),
                      cls.product_key == cls.get_with_key(request.POST.get('product_key')).key).get().key.delete()
            return True
        cart_check = cls.query(cls.product_key == cls.get_with_key(request.POST.get('product_key')).key).get()
        if cart_check:
            cart_check.quantity = int(request.POST.get('quantity'))
            cart_check.put()
            return cart_check
        else:
            cart = Cart(parent=ancestor_key,
                        product_key=cls.get_with_key(request.POST.get('product_key')).key,
                        user_key=cls.get_with_key(request.session.get('user')).key,
                        quantity=int(request.POST.get('quantity')))
            cart.put()

        return cart

    @classmethod
    def get_cart_details(cls, request):
        cart_products = cls.query(cls.user_key == ndb.Key(urlsafe=request.session.get('user')))
        products = []
        for p in cart_products:
            products.append({
                'title': p.product_key.get().title,
                'price': p.product_key.get().price,
                'quantity': p.quantity,
                'image': p.product_key.get().images[0] if p.product_key.get().images else None,
                'store_user_key': p.product_key.get().user_key
            })

        return products


class Order(ndb.Model):
    store_user_key = ndb.KeyProperty()
    user_key = ndb.KeyProperty()
    order_key = ndb.IntegerProperty()
    address = ndb.StringProperty()
    phone_number = ndb.StringProperty()
    status = ndb.IntegerProperty(default=0)
    date = ndb.DateTimeProperty(auto_now=True)

    @classmethod
    def get_with_key(cls, key):
        return ndb.Key(urlsafe=key).get()

    @classmethod
    def place_order(cls, request):
        ancestor_key = ndb.Key("Order", "order")
        order = Order(parent=ancestor_key,
                      user_key=cls.get_with_key(request.session.get('user')).key,
                      order_key=cls.get_with_key(request.session.get('user')).key.id(),
                      address=request.POST.get('address'),
                      phone_number=request.POST.get('phone_number')
                      # store_user_key=ndb.Key(urlsafe=request.POST.get('store_user_key'))
                      )
        order.put()
        return order

    @classmethod
    def get_orders(cls, request):
        # orders = cls.query(cls.store_user_key == ndb.Key(urlsafe=request.session.get('user')))
        orders = cls.query().fetch()
        all_orders = []
        for order in orders:
            order_items = OrderItems.query(
                OrderItems.order_key == order.key)
            all_items = []
            total = 0
            for item in order_items:
                total = total + item.price
                all_items.append({
                    "price": item.price,
                    "title": item.product_key.get().title,
                    "quantity": item.quantity,
                    "image": item.product_key.get().images[0] if item.product_key.get().images else None
                })

            user = order.user_key.get()
            all_orders.append({
                "order_number": order.order_key,
                "user": {
                    "name": user.first_name + " " + user.last_name,
                    "email": user.email,
                },
                "status": order.status,
                "address": order.address,
                "total_price": total,
                "phone_number": order.phone_number,
                'product_quantity': len(all_items),
                'products': all_items,
                "order_key": order.key.urlsafe(),
                "date_time": order.date
            })
        return all_orders

    @classmethod
    def delete_order(cls, request):
        order = ndb.Key(urlsafe=request.POST.get('order_key')).get()
        if order:
            order.key.delete()
            return True
        return False

    @classmethod
    def update_order(cls, request):
        order = ndb.Key(urlsafe=request.POST.get('order_key')).get()
        order.address = request.POST.get('address'),
        order.phone_number = request.POST.get('phone_number')
        order.put()
        return order

    @classmethod
    def get_user_orders(cls, request):
        orders = cls.query(cls.user_key == ndb.Key(urlsafe=request.session.get('user')))
        all_orders = []
        for order in orders:
            order_items = OrderItems.query(
                OrderItems.order_key == order.key)
            all_items = []
            total = 0
            for item in order_items:
                total = total + item.price
                all_items.append({
                    "price": item.price,
                    "title": item.product_key.get().title,
                    "quantity": item.quantity,
                    "image": item.product_key.get().images[0] if item.product_key.get().images else None
                })

            user = order.user_key.get()
            all_orders.append({
                "order_number": order.order_key,
                "user": {
                    "name": user.first_name + " " + user.last_name,
                    "email": user.email,
                },
                "status": order.status,
                "address": order.address,
                "total_price": total,
                "phone_number": order.phone_number,
                'product_quantity': len(all_items),
                'products': all_items,
                "order_key": order.key.urlsafe(),
                "date_time": order.date
            })

        return all_orders

    @classmethod
    def update_status(cls, request):
        order = ndb.Key(urlsafe=request.POST.get('order_key')).get()
        order.status = int(request.POST.get('status'))
        order.put()
        return order


class OrderItems(ndb.Model):
    order_key = ndb.KeyProperty()
    product_key = ndb.KeyProperty()
    quantity = ndb.IntegerProperty()
    price = ndb.IntegerProperty()

    @classmethod
    def get_with_key(cls, key):
        return ndb.Key(urlsafe=key).get()

    @classmethod
    def add_order_items(cls, request, order):
        cart_products = Cart.query(Cart.user_key == ndb.Key(urlsafe=request.session.get('user'))).fetch()

        ancestor_key = ndb.Key("OrderItems", "orderitems")

        for product in cart_products:
            item = OrderItems(parent=ancestor_key,
                              order_key=order.key,
                              product_key=product.product_key,
                              quantity=product.quantity,
                              price=product.product_key.get().price)
            item.put()
            product.key.delete()
        return True

    @classmethod
    def get_order_items(cls, request):
        order_items = OrderItems.query(
            OrderItems.order_key == OrderItems.get_with_key(request.POST.get('order_key')).key)
        all_items = []
        for item in order_items:
            all_items.append({
                "price": item.price,
                "title": item.product_key.get().title,
                "quantity": item.quantity,
                "image": item.product_key.get().images[0] if item.product_key.get().images else None
            })

        return all_items


class Favorites(ndb.Model):
    user_key = ndb.KeyProperty()
    product_key = ndb.KeyProperty()
    date = ndb.DateTimeProperty(auto_now=True)

    @classmethod
    def get_with_key(cls, key):
        return ndb.Key(urlsafe=key).get()

    @classmethod
    def fav_unfav(cls, request):
        ancestor_key = ndb.Key("Favorites", "favorites")
        if request.POST.get('product_key'):
            check_fav = cls.query(cls.user_key == ndb.Key(urlsafe=request.session.get('user')),
                                  cls.product_key == cls.get_with_key(request.POST.get('product_key')).key).get()
            if check_fav:
                check_fav.key.delete()
            else:
                fav = Favorites(parent=ancestor_key,
                                product_key=cls.get_with_key(request.POST.get('product_key')).key,
                                user_key=cls.get_with_key(request.session.get('user')).key)
                fav.put()

        return True

    @classmethod
    def get_favorites(cls, request):
        favorites_products = cls.query(cls.user_key == ndb.Key(urlsafe=request.session.get('user')))
        products = []
        for p in favorites_products:
            products.append({
                'title': p.product_key.get().title,
                'price': p.product_key.get().price,
                'image': p.product_key.get().images[0] if p.product_key.get().images else None,
            })

        return products

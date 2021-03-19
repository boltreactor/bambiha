import datetime

from google.cloud import ndb

with ndb.Client().context():
    ancestor_key_coupons = ndb.Key("PaymentCoupons", "PaymentCoupons")
    ancestor_key_vat = ndb.Key("VAT", "vat")


class PaymentCoupons(ndb.Model):
    coupon = ndb.StringProperty()
    expiry_date = ndb.DateTimeProperty()
    consumed = ndb.BooleanProperty(default=False)
    type = ndb.IntegerProperty(default=0)  # 0 percentage, 1 fixed amount
    amount = ndb.FloatProperty(default=0.0)
    added_date_time = ndb.DateTimeProperty(auto_now_add=True)

    @classmethod
    def generate_coupons(cls, request):
        number_of_coupons = int(request.data['number_of_coupons'])
        type = int(request.data['type'])
        amount = int(request.data['amount'])
        expiry_date = datetime.datetime.strptime(request.data['expiry_date'],
                                                 '%Y-%m-%d %H:%M:%S.%f')  # 2018-06-29 08:15:27.243860
        import secrets
        for i in range(number_of_coupons):
            coupons = cls(parent=ancestor_key_coupons)
            coupons.coupon = secrets.token_hex(5)
            coupons.amount = amount
            coupons.type = type
            coupons.expiry_date = expiry_date
            coupons.put()
        return True

    @classmethod
    def get_details(cls, request):
        return cls.query(cls.coupon == request.data['coupon'], ancestor=ancestor_key_coupons).get()

    @classmethod
    def consume_coupon(cls, request):
        coupon = cls.query(cls.coupon == request.data['coupon'], ancestor=ancestor_key_coupons).get()
        if coupon:
            coupon.consumed = True
            coupon.put()
            return coupon
        return False


class VAT(ndb.Model):
    country = ndb.StringProperty()
    vat_no = ndb.StringProperty()
    name_reg = ndb.StringProperty()
    address_line = ndb.StringProperty()
    city = ndb.StringProperty()
    provence = ndb.StringProperty()
    zip_code = ndb.StringProperty()
    user = ndb.StringProperty()

    @classmethod
    def add_vat(cls, request):
        vat = VAT(parent=ancestor_key_vat,
                  country=request.data['country'],
                  vat_no=request.data['vat_no'],
                  name_reg=request.data['name_reg'],
                  address_line=request.data['address_line'],
                  city=request.data['city'],
                  provence=request.data['provence'],
                  zip_code=request.data['zip_code'],
                  user=request.session['user']
                  )
        vat.put()
        return vat

    @classmethod
    def get_vat(cls, request):
        vat = VAT.query(VAT.user == request.session['user'], ancestor=ancestor_key_vat).fetch()
        return vat

    @classmethod
    def get_by_id(cls, request):
        vat = ndb.Key(urlsafe=request.query_params['id']).get()
        return vat

    @classmethod
    def update_vat(cls, request):
        vat = ndb.Key(urlsafe=request.data['id']).get()
        vat.country = request.data['country']
        vat.vat_no = request.data['vat_no']
        vat.name_reg = request.data['name_reg']
        vat.address_line = request.data['address_line']
        vat.city = request.data['city']
        vat.provence = request.data['provence']
        vat.zip_code = request.data['zip_code']
        vat.user = request.session['user']
        vat.put()
        return vat

    @classmethod
    def delete_vat(cls, request):
        ndb.Key(urlsafe=request.data['id']).delete()

from django.urls import path

from bambiha.middlewares import ndb_context_middleware, auth_middleware
from payment_methods.views import ServiceWorkerView, error, get_session, set_session, get_balance, get_payout_method, \
    generate_coupons, consume_coupon, get_coupon_detail, add_payment_method, get_payment_method, delete_payment_method, \
    refund_payment, create_payment_intent, transfer_amount_to_teacher, add_bank_account, delete_payout_method, \
    delete_vat, edit_vat, get_vat_by_id
from payment_methods.views import add_vat, get_vat


urlpatterns = [
    path('add-method/', ndb_context_middleware(auth_middleware(add_payment_method))),
    path('get-methods/', ndb_context_middleware(auth_middleware(get_payment_method))),
    path('get-banks/', ndb_context_middleware(auth_middleware(get_payout_method))),
    path('get-balance/', ndb_context_middleware(auth_middleware(get_balance))),
    path('delete-method/', ndb_context_middleware(auth_middleware(delete_payment_method))),
    path('delete-payout-method/', ndb_context_middleware(auth_middleware(delete_payout_method))),
    path('create-payment-intent/', ndb_context_middleware(auth_middleware(create_payment_intent))),
    path('add-bank-account/', ndb_context_middleware(auth_middleware(add_bank_account))),
    path('transfer-amount-to-tacher/', ndb_context_middleware(auth_middleware(transfer_amount_to_teacher))),
    path('refund-payment/', ndb_context_middleware(auth_middleware(refund_payment))),
    path('generate-coupons/', ndb_context_middleware(auth_middleware(generate_coupons))),
    path('get-coupon-detail/', ndb_context_middleware(auth_middleware(get_coupon_detail))),
    path('consume-coupon/', ndb_context_middleware(auth_middleware(consume_coupon))),
    path('SendNotification', ServiceWorkerView),
    path('set-session', set_session),
    path('get-session', get_session),
    path('error', error),
    path('add-vat/', ndb_context_middleware(auth_middleware(add_vat))),
    path('edit-vat/', ndb_context_middleware(auth_middleware(edit_vat))),
    path('get-vat/', ndb_context_middleware(auth_middleware(get_vat))),
    path('get-vat-by-id/', ndb_context_middleware(auth_middleware(get_vat_by_id))),
    path('delete-vat/', ndb_context_middleware(auth_middleware(delete_vat))),

]

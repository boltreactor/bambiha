import React from 'react';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js";

require("babel-polyfill");


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        // // Create Token
        // const token = await stripe.createToken(cardElement);
        //

        // Create source
        const source_token = await stripe.createSource(cardElement, {
            type: 'card',
        });
        if (source_token.source)
            console.log(source_token.source)

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <div className="page">
            <div className="page__content">
                <div className="container" style={{paddingTop: '96px', paddingBottom: '96px'}}>

                    <form style={{marginTop: "150px", marginLeft: "auto", marginRight: "auto", maxWidth: "580px",}}
                          onSubmit={handleSubmit}>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                        <button type="submit" disabled={!stripe}>
                            Pay
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};


const stripePromise = loadStripe('pk_test_chHFTfxFbnEPCMMhmxS8nVkZ');

const Stripe = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
    )

}
export default Stripe;

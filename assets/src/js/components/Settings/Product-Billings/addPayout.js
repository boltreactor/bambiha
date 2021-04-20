import React, {Component, useState} from 'react';
import {Elements, useElements, useStripe} from "@stripe/react-stripe-js";
import {withRouter} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {connect} from "react-redux";
import {addBank, getBalance, getBanks} from "../../../actions/payment";
import NoLabelTextfield from "../../../reusable-components/material-io/no-label-textfield";

const AddBankAccount = (props) => {
    const [username, setUsername] = useState('');
    const [shortCode, setCode] = useState('');
    const [account_number, setAccountNumber] = useState('');
    const [routingNumber, setRoutingNumber] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    const handleCancel = (event)=>{
        event.preventDefault()

      props.history.push('/account-settings/product-and-billings/payouts')
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const {token, error} = await stripe.createToken('bank_account', {
            country: 'GB',
            currency: 'GBP',
            // routing_number: document.getElementsByName('routingNumber')[0].value, routing number is for prod and for test sort code is used
            sort_code: shortCode,
            account_holder_name: username,
            account_number: account_number,
            account_holder_type: 'individual',
        });
        const response = await props.addBank(token.id)
        props.history.push('/account-settings/product-and-billings/payouts')
    }

    return (

        <div className="page my-page">
            <div className="page__content">
                <section className="container s mt4" style={{maxWidth: '600px'}}>
                    <header className="mt4 mb2 tc">
                        <h3 className="bold">Add payout method</h3>
                        {/*
          <p>
            To get paid, you need to set up a payout method
          </p>
          */}
                    </header>

                        <div className="mv4">
                            <div className="row">
                                 <form>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        type="text"
                                        name="username"
                                        value={username}
                                        label="ACCOUNT HOLDER NAME"
                                        placeholder="Enter account holder name"
                                        onChange={(e) => setUsername(e.currentTarget.value)}
                                    />
                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        type="text"
                                        value={routingNumber}
                                        name="routingNumber"
                                        label="ROUTING NUMBER"
                                        placeholder="Enter routing number"
                                        onChange={(e) => setRoutingNumber(e.currentTarget.value)}
                                    />

                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        type="text"
                                        name="shortCode"
                                        value={shortCode}
                                        label="SHORT CODE"
                                        placeholder="Enter short code"
                                        onChange={(e) => setCode(e.currentTarget.value)}
                                    />
                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        type="text"
                                        name="account_number"
                                        value={account_number}
                                        label="ACCOUNT NUMBER"
                                        placeholder="Enter account number"
                                        onChange={(e) => setAccountNumber(e.currentTarget.value)}
                                    />
                                </div>
                                 </form>
                                <div className="col s12 mt3 mb3">
                                    <button className="btn btn-primary btn-lg" onClick={handleSubmit}
                                           disabled={!stripe}>
                                        <i className="v-mid material-icons mr1" style={{fontSize: '18px'}}>lock</i> DONE
                                    </button>
                                    <button className="btn btn-outline-primary btn-lg ml3"
                                            onClick={event => handleCancel(event)}>
                                        CANCEL
                                    </button>
                                </div>
                            </div>
                        </div>

                </section>
            </div>
        </div>


    );

}


const stripePromise = loadStripe('pk_test_chHFTfxFbnEPCMMhmxS8nVkZ');

class AddPayout extends Component {

    render() {

        return (
            <Elements stripe={stripePromise}>
                <AddBankAccount {...this.props}/>
            </Elements>
        )
    }

}



export default withRouter(connect(null, {addBank, getBalance, getBanks})(AddPayout));

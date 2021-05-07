import React, {Component, useState} from 'react';
import {Elements, useElements, useStripe} from "@stripe/react-stripe-js";
import {withRouter} from "react-router-dom";
import Form from "../../../reusable-components/form"
import {loadStripe} from "@stripe/stripe-js";
import {connect} from "react-redux";
import {addBank, getBalance, getBanks} from "../../../actions/payment";
import NoLabelTextfield from "../../../reusable-components/material-io/no-label-textfield";
import Joi from "joi-browser";

const AddBankAccount = (props) => {
    const [errors, setError] = useState({});
    const [state, setState] = useState({username: "", shortCode:"",
        account_number:"", routingNumber:"" });
    var schema = {
        username: Joi.string().regex(/^[a-zA-Z][a-zA-Z\s]*$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "required"};
                    case "any.required":
                        return {message: "required"};
                    case "any.empty":
                        return {message: "required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }),
        shortCode: Joi.string().trim().regex(/^[0-9]+$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "required"};
                    case "any.required":
                        return {message: "required"};
                    case "any.empty":
                        return {message: "required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }),
        account_number:Joi.string().trim().regex(/^[0-9]+$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "required"};
                    case "any.required":
                        return {message: "required"};
                    case "any.empty":
                        return {message: "required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }),
        routingNumber: Joi.string().trim().regex(/^[0-9]+$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "required"};
                    case "any.required":
                        return {message: "required"};
                    case "any.empty":
                        return {message: "required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }),

    };

    const validatePayout = () => {

        const data = {
            "username": state.username,
            "shortCode": state.shortCode,
            "account_number": state.account_number,
            "routingNumber": state.routingNumber
        }

        const options = {abortEarly: false};
        const {error} = Joi.validate(data, schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
            if (errors[item.path[0]] === 'profile') {
                errors[item.path[1]] = item.message;
            } else {
                errors[item.path[0]] = item.message;
            }
        return errors;
    }

    const stripe = useStripe();
    const elements = useElements();
    const handleCancel = (event) => {
        event.preventDefault()
        props.history.push('/account-settings/product-and-billings/payouts')
    }


    const validateProperty = ({name, value}) => {
        const obj = {[name]: value};

        const check_schema = {[name]: schema[name]};
        const {error} = Joi.validate(obj, check_schema);
        return error ? error.details[0].message : null;
    };

    const handleChange = ({currentTarget: input}) => {

        const clone_errors = errors;
        const errorMessage = validateProperty(input);
        if (errorMessage) clone_errors[input.name] = errorMessage;
        else delete clone_errors[input.name];
        setState({...state, [input.name]: input.value });
        setError(clone_errors)
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
            sort_code: state.shortCode,
            account_holder_name: state.username,
            account_number: state.account_number,
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
                                        value={state.username}
                                        label="ACCOUNT HOLDER NAME"
                                        placeholder="Enter account holder name"
                                        error={errors["username"]}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        type="text"
                                        value={state.routingNumber}
                                        name="routingNumber"
                                        label="ROUTING NUMBER"
                                        error={errors["routingNumber"]}
                                        placeholder="Enter routing number"
                                        onChange={(e) => handleChange(e)}
                                    />

                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        type="text"
                                        name="shortCode"
                                        value={state.shortCode}
                                        label="SHORT CODE"
                                        placeholder="Enter short code"
                                        error={errors["shortCode"]}
                                      onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        type="text"
                                        name="account_number"
                                        value={state.account_number}
                                        label="ACCOUNT NUMBER"
                                        placeholder="Enter account number"
                                        error={errors["account_number"]}
                                        onChange={(e) =>handleChange(e)}
                                    />
                                </div>
                            </form>
                            <div className="col s12 mt3 mb3">
                                <button className="btn btn-primary btn-lg" onClick={handleSubmit}
                                    // disabled={!stripe}
                                        disabled={validatePayout()}
                                >
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

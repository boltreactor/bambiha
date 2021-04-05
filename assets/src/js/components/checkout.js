import React, {Component} from 'react'
import NoLabelTextfield from "../reusable-components/material-io/no-label-textfield";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {checkout, viewCart} from "../actions/user";

class Checkout extends Component {
    state = {
        first_name: '',
        last_name: '',
        address: '',
        email: '',
        phone: '',
    }

    componentDidMount() {
        this.props.viewCart();
    }

    handleChange = ({currentTarget: input}) => {
        this.setState({[input.name]: input.value})
    }
    handleCheckout = () => {
        this.props.checkout(this.props, this.state.address)
    }

    render() {

        return (
            <div className="page">
                <div className="page__content">
                    <div className="container l mt5 mb6">
                        {/* */}
                        <div className="row mv3">
                            <div className="col s12 tc">
                                <h2 className="mb3">Checkout</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m8 l7">
                                <article className="center hidden ba mv4" style={{borderColor: '#e5e5e5'}}>
                                    <h1 className="f4 bg-near-black white mv0 pv1 ph3"
                                        style={{fontFamily: 'var(--font-family-montserrat)'}}>SHIPPING ADDRESS</h1>
                                    <div className="pa3 bt">
                                        {/* */}
                                        <div className="row mv3">
                                            <div className="col s12 m6 mb3">

                                                <NoLabelTextfield
                                                    type="text"
                                                    name="first_name"
                                                    label="First Name"
                                                    onChange={this.handleChange}
                                                    value={this.state.first_name !== '' ? this.state.first_name : this.props ? this.props.user.first_name : ''}/>
                                            </div>
                                            <div className="col s12 m6 mb3">

                                                <NoLabelTextfield
                                                    type="text"
                                                    name="last_name"
                                                    label="Last Name"
                                                    onChange={this.handleChange}
                                                    value={this.state.last_name !== '' ? this.state.last_name : this.props ? this.props.user.last_name : ''}/>
                                            </div>
                                            <div className="col s12 mb3">
                                                <NoLabelTextfield
                                                    type="text"
                                                    name="address"
                                                    label="Address"
                                                    onChange={this.handleChange}
                                                    value={this.state.address !== '' ? this.state.address : this.props ? this.props.user.address : ''}/>
                                            </div>
                                            <div className="col s12 m6 mb3">
                                                <NoLabelTextfield
                                                    type="text"
                                                    name="email"
                                                    label="Email"
                                                    onChange={this.handleChange}
                                                    value={this.state.email !== '' ? this.state.email : this.props ? this.props.user.email : ''}/>
                                            </div>
                                            <div className="col s12 m6 mb3">
                                                <NoLabelTextfield
                                                    type="text"
                                                    name="phone"
                                                    label="Phone"
                                                    onChange={this.handleChange}
                                                    value={this.state.phone !== '' ? this.state.phone : this.props ? this.props.user.phone : ''}/>
                                            </div>
                                            <div className="col s12 mt3 mb3 tr">
                                                <Link to="/dashboard" className="link-mute">
                                                    <button className="btn btn-warning btn-lg" style={{
                                                        backgroundColor: '#fa5400',
                                                        borderColor: '#fa5400'
                                                    }} onClick={this.handleCheckout}>
                                                        SAVE AND CHECKOUT
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col s12 m4 l5">
                                <article className="center hidden ba mv4" style={{borderColor: '#e5e5e5'}}>
                                    <h2 className="f4 black mv0 pv1 ph3" style={{
                                        fontFamily: 'var(--font-family-montserrat)',
                                        backgroundColor: '#e5e5e5'
                                    }}>
                                        <div className="flex items-center">
                                            <div className="flex-grow-1">In Your Bag</div>
                                            <div className="ml3"><a href="/cart" className="link-mute link-dark">
                                                Edit
                                            </a></div>
                                        </div>
                                    </h2>
                                    <div className="pa3 bt"
                                         style={{borderColor: '#e5e5e5', fontFamily: '"Montserrat"'}}>
                                        <div className="flex items-center mb3">
                                            <div className="flex-grow-1">
                                                Subtotal
                                            </div>
                                            <div className="mr-3">
                                                PKR <span>{this.props.cart.reduce((accumulator, current) => accumulator + current.price, 0)}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb3">
                                            <div className="flex-grow-1">
                                                Estimated Shipping
                                            </div>
                                            <div className="mr-3">
                                                PKR <span>0</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb3">
                                            <div className="flex-grow-1">
                                                Estimated Tax
                                            </div>
                                            <div className="mr-3">
                                                PKR <span>0</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt4">
                                            <div className="flex-grow-1">
                                                <h6>
                                                    Total
                                                </h6>
                                            </div>
                                            <div className="mr-3 bold">
                                                <h6 style={{color: '#fa5400'}}>
                                                    PKR <span>{this.props.cart.reduce((accumulator, current) => accumulator + current.price, 0)}</span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="mt5">
                                            <h6>
                                                Arrives within 10 days
                                            </h6>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.user.cart
})
export default withRouter(connect(mapStateToProps, {viewCart, checkout})(Checkout));

import React, {Component} from 'react';
import SettingsDrawer from "../../../reusable-components/Drawers/Static/settings-drawer";
import {Link, withRouter} from "react-router-dom";
import {deleteBank, deleteCard, deleteVAT, getBanks, getCards, getVAT, clearBankError} from "../../../actions/payment";
import {connect} from "react-redux";

class ProductsBillings extends Component {
    componentDidMount() {

        this.props.getBanks();

        this.props.getCards();
        this.props.getVAT();
        let name = this.props.match.params.tab
        if (name === undefined)
            name = "payments"
        if (name === "payments") {
            this.setState({Payouts: false, Taxes: false})
        } else if (name === "payouts") {
            this.setState({Payments: false, Taxes: false})
        } else {
            this.setState({Payouts: false, Payments: false})
        }
        this.props.clearBankError()
    }


    handleDeleteCard(event, card) {
        event.preventDefault();
        this.props.deleteCard(card.id);
    }

    handleDeleteBank(event, bank) {
        event.preventDefault();
        this.props.deleteBank(bank.account, bank.id);
    }

    handleDeleteVAT(event, vat) {
        event.preventDefault();
        this.props.deleteVAT(vat.id);
    }

    handleEditVAT(event, vat) {
        event.preventDefault();
        this.props.history.push('/edit-vat/' + vat.id)
    }

    state = {
        Payments: true,
        Payouts: false,
        Taxes: false
    }
    handleTab = (e) => {
        let name = e.target.text
        this.setState({[name]: !this.state[name]})
        if (name === "Payments") {
            this.setState({Payouts: false, Taxes: false})
        } else if (name === "Payouts") {
            this.setState({Payments: false, Taxes: false})
        } else {
            this.setState({Payouts: false, Payments: false})
        }
    }

    render() {
        return (
            <div className="page my-page">
                <div className="page__content">
                    <div className="main-wrapper">
                        <SettingsDrawer/>
                        <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                            <div className="container l">
                                <header className="mb4 db flex items-center flex-wrap">
                                    <div className="mb4 mb0-m mb0-l">
                                        <h1 className="bold">Payments & Payouts</h1>
                                    </div>
                                    <div className="flex-grow-1 ml3 tr">
                                        {this.props.match.params.tab === "payments" && this.props.user_cards.length > 0 &&
                                        <Link to="/account-settings/product-and-billings/create-payment">
                                            <button className="btn btn-primary btn-lg">
                                                Add Payment Method
                                            </button>
                                        </Link>}
                                        {this.props.match.params.tab === undefined && this.props.user_cards.length > 0 &&
                                        <Link to="/account-settings/product-and-billings/create-payment">
                                            <button className="btn btn-primary btn-lg">
                                                Add Payment Method
                                            </button>
                                        </Link>}
                                        {this.props.match.params.tab === "payouts" && this.props.user_banks.length > 0 &&
                                        <Link to="/account-settings/product-and-billings/create-payout">
                                            <button className="btn btn-primary btn-lg">
                                                Add Payout Method
                                            </button>
                                        </Link>}
                                        {this.props.match.params.tab === "taxes" && this.props.user_vat.length > 0 &&
                                        <Link to="/account-settings/product-and-billings/create-vat">
                                            <button className="btn btn-primary btn-lg">
                                                Add VAT ID Number
                                            </button>
                                        </Link>}
                                    </div>
                                </header>
                                <div className="tab-wrapper">
                                    <header className="tab-header">
                                        <Link to="/account-settings/product-and-billings/payments"
                                              className="tab-item link-mute" onClick={(e) => this.handleTab(e)}
                                              aria-selected={this.props.match.params.tab === "payments" || this.props.match.params.tab === undefined}>
                                            Payments
                                        </Link>
                                        <Link to="/account-settings/product-and-billings/payouts"
                                              className="tab-item link-mute" onClick={(e) => this.handleTab(e)}
                                              aria-selected={this.props.match.params.tab === "payouts"}>
                                            Payouts
                                        </Link>
                                        <Link to="/account-settings/product-and-billings/taxes"
                                              className="tab-item link-mute" onClick={(e) => this.handleTab(e)}
                                              aria-selected={this.props.match.params.tab === "taxes"}>
                                            Taxes
                                        </Link>
                                    </header>
                                    <div className="tab-content">
                                        <div
                                            className={this.props.match.params.tab === "payments" || this.props.match.params.tab === undefined ? "" : "tab-no-data hide"}>
                                            {this.props.user_cards.length > 0 ? <div>
                                                    <div className="flex items-center flex-wrap mb4">
                                                        <div>
                                                            <h3 className="bold">Payment methods</h3>
                                                            <p>Add and manage your payment methods using our secure payment
                                                                system.</p>
                                                        </div>
                                                    </div>
                                                    <div className="payment-methods flex flex-wrap">
                                                        {(this.props.user_cards).map(card => <div key={card.id}
                                                                                                  className="mb3 mr3-m mr3-l w-100 w-60-m w-40-l">
                                                            <div
                                                                className="custom-tooltip border border--light border--rounded pa2 relative">
                                                                <div className="flex relative">
                                                                    <div className="ml2 mt3 mr2">
                                                            <span className="material-icons-outlined" style={{
                                                                color: 'var(--primary)',
                                                                fontSize: '36px'
                                                            }}>credit_card</span>
                                                                    </div>
                                                                    <div className="flex-grow-1 mt3 mr3 ml2">
                                                                        <h4 className="bold">
                                                                            <span>{card.card.brand}</span>
                                                                            <span>••••</span>
                                                                            <span>{card.card.last4}</span>
                                                                        </h4>
                                                                        <p className="mv0 xs">Expires <span>{card.card.exp_month}/{card.card.exp_year}</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex">
                                                                    <div className="flex-grow-1"/>
                                                                    <div>
                                                                        <div className="mr2 mt3 mb3">
                                                                            <button className="btn fxs btn-outline-primary"
                                                                                    onClick={(event => this.handleDeleteCard(event, card))}
                                                                                    style={{borderColor: '#dbe3eb'}}>
                                                                                REMOVE
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>)}

                                                    </div>
                                                </div> :
                                                <div className="tc">
                                                    <header className="mt3">
                                                        <h3 className="bold">Payment methods</h3>
                                                    </header>
                                                    <p>
                                                        Add a payment method using our secure payment system.
                                                    </p>
                                                    <div className="mv3">
                                                        <Link
                                                            to="/account-settings/product-and-billings/create-payment">
                                                            <button className="btn btn-primary btn-lg">
                                                                Add Payment Method
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>}
                                        </div>


                                        {/* Payouts */}
                                        <div
                                            className={this.props.match.params.tab === "payouts" ? "" : "tab-no-data hide"}>
                                            {this.props.user_banks.length > 0 ?
                                                <div>
                                                    <div className="flex items-center flex-wrap mb4">
                                                        <div>
                                                            <h3 className="bold">Payout method</h3>
                                                            <p style={{maxWidth: '640px'}}>
                                                                BAMBIHA releases payouts about 24 hours after a
                                                                student’s
                                                                scheduled lesson time. The time it takes for the funds
                                                                to appear
                                                                in your account depends on your payout method.
                                                            </p>
                                                        </div>
                                                        {this.props.error_msg !== "" && <section className="app-alert">
                                                <div className="ui-paper ui-alert ui-alert--error my2" role="alert"
                                                     style={{marginBottom: "10px"}}>
                                                    <div className="ui-alert__icon">
                                                        <i className="material-icons-outlined">error</i>
                                                    </div>
                                                    <div className="ui-alert__message">{this.props.error_msg}
                                                    </div>
                                                </div>
                                            </section>}
                                                    </div>
                                                    <div className="payment-methods flex flex-wrap">
                                                        {(this.props.user_banks).map(bank => <div key={bank.id}
                                                                                                  className="mb3 mr3-m mr3-l w-100 w-60-m w-40-l">
                                                            <div
                                                                className="custom-tooltip border border--light border--rounded pa2 relative">
                                                                <div className="flex relative">
                                                                    <div className="ml2 mt3 mr2">
                                                                        <span className="material-icons-outlined"
                                                                              style={{
                                                                                  color: 'var(--primary)',
                                                                                  fontSize: '36px'
                                                                              }}>account_balance</span>
                                                                    </div>
                                                                    <div className="flex-grow-1 mt3 mr3 ml2">
                                                                        <h4 className="bold">
                                                                            <span>Account ending</span>
                                                                            <span>••••</span>
                                                                            <span>{bank.last4}</span>
                                                                        </h4>
                                                                        <p className="mv0 xs">{bank.account_holder_name}
                                                                            <span> ({bank.account_holder_type})</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex">
                                                                    <div className="flex-grow-1"/>
                                                                    <div>
                                                                        <div className="mr2 mt3 mb3">
                                                                            <button
                                                                                className="btn fxs btn-outline-primary"
                                                                                onClick={event => this.handleDeleteBank(event, bank)}
                                                                                style={{borderColor: '#dbe3eb'}}>
                                                                                REMOVE
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>)}
                                                    </div>
                                                </div> :
                                                <div className="tc">
                                                    <header className="mt3">
                                                        <h3 className="bold">Payout methods</h3>
                                                    </header>
                                                    <p>
                                                        When you receive a payment for a reservation, we call that
                                                        payment
                                                        to you a "payout."
                                                    </p>
                                                    <div className="mv3">
                                                        <Link to="/account-settings/product-and-billings/create-payout">
                                                            <button className="btn btn-primary btn-lg">
                                                                Add Payout Method
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>}
                                        </div>
                                        {/* Taxes */}
                                        <div
                                            className={this.props.match.params.tab === "taxes" ? "" : "tab-no-data hide"}>

                                            {this.props.user_vat && this.props.user_vat.length > 0 ?
                                                <div>
                                                    <div className="flex items-center flex-wrap mb4">
                                                        <div>
                                                            <h3 className="bold">VAT</h3>
                                                            <p style={{maxWidth: '640px'}}>
                                                                If you are registered for VAT, you may not be charged
                                                                VAT on BAMBIHA service fees.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="payment-methods flex flex-wrap">
                                                        {(this.props.user_vat).map(vat => <div key={vat.id}
                                                                                               className="mb3 mr3-m mr3-l w-100 w-60-m w-40-l">
                                                            <div
                                                                className="custom-tooltip border border--light border--rounded pa2 relative">
                                                                <div className="flex relative">
                                                                    <div className="ml2 mt3 mr2">
                                                                        {/*<span className="material-icons-outlined"*/}
                                                                        {/*      style={{*/}
                                                                        {/*          color: 'var(--primary)',*/}
                                                                        {/*          fontSize: '36px'*/}
                                                                        {/*      }}>account_balance</span>*/}
                                                                    </div>
                                                                    <div className="flex-grow-1 mt3 mr3 ml2">
                                                                        <h4 className="bold">
                                                                            <span>{vat.name_reg}</span>
                                                                        </h4>
                                                                        <div className="mv0 xs">{vat.city}</div>
                                                                        <div className="mv0 xs">{vat.country}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex">
                                                                    <div className="flex-grow-1"/>
                                                                    <div>
                                                                        <div className="mr2 mt3 mb3">
                                                                            <button
                                                                                className="btn fxs btn-outline-primary mr2"
                                                                                onClick={event => this.handleEditVAT(event, vat)}
                                                                                style={{borderColor: '#dbe3eb'}}>
                                                                                EDIT
                                                                            </button>
                                                                            <button
                                                                                className="btn fxs btn-outline-primary"
                                                                                onClick={event => this.handleDeleteVAT(event, vat)}
                                                                                style={{borderColor: '#dbe3eb'}}>
                                                                                REMOVE
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>)}
                                                    </div>
                                                </div> :
                                                <div className="tc">
                                                    <header className="mt3">
                                                        <h3 className="bold">Taxes</h3>
                                                    </header>
                                                    <p>
                                                        If you are registered for VAT, enter your VAT ID Number.
                                                    </p>
                                                    <div className="mv3">
                                                        <Link to="/account-settings/product-and-billings/create-vat">
                                                            <button className="btn btn-primary btn-lg">
                                                                Add VAT ID Number
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user_cards: state.payment.user_cards,
    user_banks: state.payment.user_banks,
    user_vat: state.payment.user_vat,
    error_msg: state.payment.error_msg
});


export default withRouter(connect(mapStateToProps, {
    getCards,
    deleteCard,
    getBanks,
    deleteBank,
    getVAT,
    deleteVAT,
    clearBankError
})(ProductsBillings));

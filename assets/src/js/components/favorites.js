import React, {Component} from 'react';
import DashboardDrawer from "../reusable-components/Drawers/Static/dashboard-drawer";
import {Link, withRouter} from "react-router-dom";
import SmartFooter from "./Footers/estore-smart-footer";
import {addToCart, getFavorite, manageFavorite} from "../actions/user";
import {connect} from "react-redux";
import {getProduct} from "../actions/admin";

class Favorites extends Component {
    state = {
        Favorites: true,
        HelpSupport: false


    }
    handleTab = (e) => {
        let name = e.target.text

        if (name === "Favorites") {
            this.setState({Favorites: true, HelpSupport: false})
        } else {
            this.setState({Favorites: false, HelpSupport: true})
        }
    }

    componentDidMount() {
        this.props.getFavorite();
    }

    addItemToCart = (e, product_key) => {
        e.preventDefault();
        this.props.addToCart(1, product_key, this.props)
    }
    addFavorite = (e, product_key) => {
        e.preventDefault();
        this.props.manageFavorite(product_key, this.props)
    }

    render() {
        debugger
        const {favorites} = this.props;
        return (

            <div className="page">
                <div className="page__content">
                    {/* */}
                    <div className="main-wrapper">
                        {/* */}
                        <DashboardDrawer/>
                        <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                            <div className="container l">
                                {/* */}
                                <header className="mb4 db flex items-center flex-wrap">
                                    <div className="mb4 mb0-m mb0-l my-page">
                                        <h1 className="bold">My Favourites</h1>
                                    </div>
                                    <div className="flex-grow-1 ml3 tr">
                                        {/*
                                            <button class="btn btn-primary btn-lg">
                                              Continue Shopping
                                            </button>
                                        */}
                                    </div>
                                </header>
                                {/* */}
                                <div className="tab-wrapper">
                                    {/* */}
                                    <header className="tab-header">
                                        <Link to="#" className="tab-item link-mute" aria-selected={this.state.Favorites}
                                              onClick={(e) => this.handleTab(e)}>
                                            Favorites
                                        </Link>
                                        <Link to="#" className="tab-item link-mute"
                                              aria-selected={this.state.HelpSupport}
                                              onClick={(e) => this.handleTab(e)}>
                                            Help & Support
                                        </Link>
                                    </header>
                                    {/* */}
                                    <div className="tab-content">
                                        <div className="mb4">
                                            <h3 className="bold">{this.state.Favorites === true ? "Favorites" : "Help & Support"}</h3>
                                        </div>

                                        {/* Call to action - Favourites */}
                                        {this.state.Favorites &&
                                        <div>
                                            {!favorites.length > 0 ?
                                                <div className="tc">
                                                    <header className="mt3 my-page">
                                                        <h3 className="bold">My favourites</h3>
                                                    </header>
                                                    <p>
                                                        Items added to your Favorites will be saved here.
                                                    </p>
                                                    <div className="mv3">
                                                        <Link to="/" className="link-mute">
                                                            <button className="btn btn-primary btn-lg">
                                                                <i className="material-icons-outlined">shopping_cart</i> Continue
                                                                Shopping
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div> :
                                                <div>
                                                    <section className="cart-or-bag mv4">
                                                        {favorites && favorites.map((item, index) => {
                                                            return <div key={index} className="cart-item ma0">
                                                                <div className="flex mb3">
                                                                    <div className="mr2 mb3">
                                                                        <Link to="#" className="link-mute">
                                                                            <img
                                                                                src={item.image ? item.image : "/static/img-noise.png"}
                                                                                alt=""/>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="flex-grow-1 pa2">
                                                                        <div className="description">
                                                                            <div className="flex flex-wrap mb2">
                                                                                <div className="flex-grow-1 mr2">
                                                                                    <h4>{item.title}</h4>
                                                                                    {item.product_status === 0 &&
                                                                                    <p style={{color: "red"}}>Product Not Available</p>}
                                                                                </div>

                                                                                <div>
                                                                                    <h6>{item.price}</h6>
                                                                                </div>
                                                                            </div>
                                                                            {/*<p className="ma0" style={{fontSize: '16px'}}>*/}
                                                                            {/*   Men's Shoe*/}
                                                                            {/*</p>*/}
                                                                        </div>
                                                                        <div className="actions">
                                                                            <button className="btn btn-primary mr2"
                                                                                    onClick={(e) => this.addItemToCart(e, item.product_key)}>Move
                                                                                to Cart
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-primary-outline mr2"
                                                                                onClick={(e) => this.addFavorite(e, item.product_key)}>
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        })}
                                                    </section>
                                                </div>}

                                        </div>}

                                        {/* <div className={this.state.Favorites===true ? "tab-no-data": "tab-no-data hide"}>*/}
                                        {/*    <div className="tc">*/}
                                        {/*        <header className="mt3 my-page">*/}
                                        {/*            <h3 className="bold">My favourites</h3>*/}
                                        {/*        </header>*/}
                                        {/*        <p>*/}
                                        {/*            Items added to your Favorites will be saved here.*/}
                                        {/*        </p>*/}
                                        {/*        <div className="mv3">*/}
                                        {/*            <button className="btn btn-primary btn-lg">*/}
                                        {/*                <i className="material-icons-outlined">shopping_cart</i> Continue*/}
                                        {/*                Shopping*/}
                                        {/*            </button>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                        <div
                                            className={this.state.HelpSupport === true ? "tab-no-data" : "tab-no-data hide"}>
                                            <div className="tc">
                                                <header className="mt3 my-page">
                                                    <h3 className="bold">Help &amp; Support</h3>
                                                </header>
                                                <p>
                                                    24/7 chat support — message us at anytime!
                                                </p>
                                                <div className="mv3">
                                                    <a href="tel:00923165953458" className="link-mute">
                                                        <button className="btn btn-primary btn-lg">
                                                            <i className="material-icons-outlined">phone</i> Contact
                                                            Us
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        {/* No data placeholder */}
                        <main className="main hide"
                              style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                            <div className="container l mb7">
                                {/* */}
                                <header className="mb4 db">
                                    <h1 className="bold">My Products</h1>
                                </header>
                                {/* */}
                                <div className="content">
                                    {/* */}
                                    <div className="row">
                                        <div className="col s12 m6">
                                            <div className="shadow border rounded-sm db mb5">
                                                <header className="pa3 flex items-center border-bottom">
                                                    <div className="flex-grow-1">
                                                        <h2 className="bold">Contact Hub</h2>
                                                    </div>
                                                    <div className="widget-label rounded-xs fw7">
                                                        FREE
                                                    </div>
                                                </header>
                                                <div className="content tc">
                                                    <div className="pa3">
                                                        <div className="mv3">
                                                            <img src="/static/trial-contact-hub.png"
                                                                 alt=""/>
                                                        </div>
                                                        <div className="mv3">
                                                            <h3 className="bold">
                                                                Stay connected to your customer base using our
                                                                cloud-based Contact Hub
                                                            </h3>
                                                        </div>
                                                        <div className="blue-cta mv3">
                                                            <a href="tel:00923165953458">
                                                                TALK TO SALES
                                                            </a>
                                                        </div>
                                                        <div className="mv3">
                                                            <div className="caption"
                                                                 style={{fontSize: '.75rem'}}>(+92)316-5953-458
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m6">
                                            <div className="shadow border rounded-sm db mb5">
                                                <header className="pa3 flex items-center border-bottom">
                                                    <div className="flex-grow-1">
                                                        <h2 className="bold">Payments</h2>
                                                    </div>
                                                    <div className="widget-label rounded-xs fw7">
                                                        FREE
                                                    </div>
                                                </header>
                                                <div className="content tc">
                                                    <div className="pa3">
                                                        <div className="mv3">
                                                            <img src="/static/trial-payments.png" alt=""/>
                                                        </div>
                                                        <div className="mv3">
                                                            <h3 className="bold">
                                                                Allow your customers to pay you instantly online, on
                                                                mobile, or through text messaging
                                                            </h3>
                                                        </div>
                                                        <div className="blue-cta mv3">
                                                            <a href="tel:00923165953458">
                                                                TALK TO SALES
                                                            </a>
                                                        </div>
                                                        <div className="mv3">
                                                            <div className="caption"
                                                                 style={{fontSize: '.75rem'}}>(+92)316-5953-458
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* */}
                                    <div className="row">
                                        <div className="col s12">
                                            <h1 className="bold pb4">Learn More about BAMBIHA</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12 m4">
                                            <a href="https://www.boltreactor.com/booking" target="_blank"
                                               className="link-mute">
                                                <div className="shadow-0 rounded-sm db mb5 pa3">
                                                    <div className="flex">
                                                        <div className="mh3">
                                                            <img src="/static/calendar-check-1%201.svg"
                                                                 alt="" style={{width: '64px'}}/>
                                                        </div>
                                                        <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                            <h4 className="bold mb3">
                                                                New Release
                                                            </h4>
                                                            <p>
                                                                Shop all our new arrivals #bringthefuturetolight
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col s12 m4">
                                            <a href="https://www.boltreactor.com/sites" target="_blank"
                                               className="link-mute">
                                                <div className="shadow-0 rounded-sm db mb5 pa3">
                                                    <div className="flex">
                                                        <div className="mh3">
                                                            <img src="/static/pc-monitor@2x.svg" alt=""
                                                                 style={{width: '64px'}}/>
                                                        </div>
                                                        <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                            <h4 className="bold mb3">
                                                                Men
                                                            </h4>
                                                            <p>
                                                                Convert more customers using a powerful website
                                                                platform.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col s12 m4">
                                            <a href="https://www.boltreactor.com/reviews" target="_blank"
                                               className="link-mute">
                                                <div className="shadow-0 rounded-sm db mb5 pa3">
                                                    <div className="flex">
                                                        <div className="mh3">
                                                            <img src="/static/cup-1-1.svg" alt=""
                                                                 style={{width: '64px'}}/>
                                                        </div>
                                                        <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                            <h4 className="bold mb3">
                                                                Women
                                                            </h4>
                                                            <p>
                                                                Take control of your digital reputation &amp; online
                                                                reviews.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col s12 m4">
                                            <a href="https://www.boltreactor.com/messenger" target="_blank"
                                               className="link-mute">
                                                <div className="shadow-0 rounded-sm db mb5 pa3">
                                                    <div className="flex">
                                                        <div className="mh3">
                                                            <img src="/static/bubble-rounded-2-1.svg"
                                                                 alt="" style={{width: '64px'}}/>
                                                        </div>
                                                        <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                            <h4 className="bold mb3">
                                                                Kids
                                                            </h4>
                                                            <p>
                                                                Easily connect with your customer base through business
                                                                messaging.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col s12 m4">
                                            <a href="https://www.boltreactor.com/placement" target="_blank"
                                               className="link-mute">
                                                <div className="shadow-0 rounded-sm db mb5 pa3">
                                                    <div className="flex">
                                                        <div className="mh3">
                                                            <img src="/static/placement.svg" alt=""
                                                                 style={{width: '64px'}}/>
                                                        </div>
                                                        <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                            <h4 className="bold mb3">
                                                                Custom
                                                            </h4>
                                                            <p>
                                                                Show us your own unique designs with #bambihabyyou
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <SmartFooter/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    favorites: state.user.favorites
})

export default withRouter(connect(mapStateToProps, {getFavorite, manageFavorite, addToCart})(Favorites));

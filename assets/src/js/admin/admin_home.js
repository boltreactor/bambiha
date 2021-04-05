import React, {Component, Fragment} from "react"
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";
import {addProduct, getAllCategories} from "../actions/admin"
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class AdminHome extends Component {
    componentDidMount() {
        this.props.getAllCategories()
    }

    render() {
        return (
            <Fragment>
                <div className="page my-page">
                    <div className="page__content">
                        {/* */}
                        <div className="main-wrapper">
                            {/* */}
                            <Navigation/>
                            {/* No data placeholder */}
                            <main className="main"
                                  style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                                <div className="container l mb7">
                                    {/* */}
                                    <header className="mb4 db">
                                        <h1 className="bold">Admin Panel</h1>
                                    </header>
                                    {/* */}
                                    <div className="content">
                                        {/* */}
                                        <div className="row">
                                            <div className="col s12 m6">
                                                <div className="shadow border rounded-sm db mb5">
                                                    <header className="pa3 flex items-center border-bottom">
                                                        <div className="flex-grow-1">
                                                            <h2 className="bold">Weekly Sales Stats</h2>
                                                        </div>
                                                        {/*
                <div class="widget-label rounded-xs fw7">
                  FREE
                </div>
                */}
                                                    </header>
                                                    <div className="content tc">
                                                        <div className="pa3">
                                                            <div className="mv3">
                                                                <img style={{borderRadius: '8px'}}
                                                                     src="/static/sales.png" alt=""/>
                                                            </div>
                                                            <div className="mv3">
                                                                <h3 className="bold">
                                                                    Stay connected to your daily and weekly sales using
                                                                    our sales analytics.
                                                                </h3>
                                                            </div>
                                                            {/*<div class="blue-cta mv3">*/}
                                                            {/*  <a href="tel:00923165953458">*/}
                                                            {/*    TALK TO SALES*/}
                                                            {/*  </a>*/}
                                                            {/*</div>*/}
                                                            {/*<div class="mv3">*/}
                                                            {/*  <div class="caption" style="font-size: .75rem">(+92)316-5953-458</div>*/}
                                                            {/*</div>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col s12 m6">
                                                <div className="shadow border rounded-sm db mb5">
                                                    <header className="pa3 flex items-center border-bottom">
                                                        <div className="flex-grow-1">
                                                            <h2 className="bold">Notifications</h2>
                                                        </div>
                                                        {/*
                                                        <div class="widget-label rounded-xs fw7">
                                                          FREE
                                                        </div>
                                                        */}
                                                    </header>
                                                    <div className="content tc">
                                                        <div className="pa3">
                                                            <div className="mv3">
                                                                <img src="/static/notifications.png"
                                                                     alt=""/>
                                                            </div>
                                                            <div className="mv3">
                                                                <h3 className="bold">
                                                                    All your sales, delivery and disputes Notifications
                                                                    will be shown here.
                                                                </h3>
                                                            </div>
                                                            {/*
                                                              <div class="blue-cta mv3">
                                                                <a href="tel:00923165953458">
                                                                  TALK TO SALES
                                                                </a>
                                                              </div>
                                                              <div class="mv3">
                                                                <div class="caption" style="font-size: .75rem">(+92)316-5953-458</div>
                                                              </div>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* */}
                                        <div className="row">
                                            <div className="col s12">
                                                <h1 className="bold pb4">Quick Access</h1>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12 m4">
                                                <Link to="/admin/users"
                                                   className="link-mute">
                                                    <div className="shadow-0 rounded-sm db mb5 pa3">
                                                        <div className="flex">
                                                            <div className="mh3">
                                                                <i className="material-icons-outlined" style={{
                                                                    color: '#0258ff',
                                                                    fontSize: '36px'
                                                                }}>people</i>
                                                                {/*<img src="/static/users.svg" alt="" style="width: 64px">*/}
                                                            </div>
                                                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                                <h4 className="bold mb3">
                                                                    Users
                                                                </h4>
                                                                <p>
                                                                    Manage all your users on your online store
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col s12 m4">
                                                <Link to="/admin/orders"
                                                   className="link-mute">
                                                    <div className="shadow-0 rounded-sm db mb5 pa3">
                                                        <div className="flex">
                                                            <div className="mh3">
                                                                <i className="material-icons-outlined" style={{
                                                                    color: '#0258ff',
                                                                    fontSize: '36px'
                                                                }}>shopping_bag</i>
                                                                {/*<img src="/static/card.svg" alt="" style="width: 64px">*/}
                                                            </div>
                                                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                                <h4 className="bold mb3">
                                                                    Orders
                                                                </h4>
                                                                <p>
                                                                    All your sales and orders will be managed here.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col s12 m4">
                                                <Link to="/admin/products"
                                                   className="link-mute">
                                                    <div className="shadow-0 rounded-sm db mb5 pa3">
                                                        <div className="flex">
                                                            <div className="mh3">
                                                                <i className="material-icons-outlined"
                                                                   style={{color: '#0258ff', fontSize: '36px'}}>list</i>
                                                            </div>
                                                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                                <h4 className="bold mb3">
                                                                    Products
                                                                </h4>
                                                                <p>
                                                                    Take control of your products and stock through
                                                                    admin panel.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col s12 m4">
                                                <Link to="/admin/categories"
                                                   className="link-mute">
                                                    <div className="shadow-0 rounded-sm db mb5 pa3">
                                                        <div className="flex">
                                                            <div className="mh3">
                                                                <i className="material-icons-outlined" style={{
                                                                    color: '#0258ff',
                                                                    fontSize: '36px'
                                                                }}>category</i>
                                                            </div>
                                                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                                <h4 className="bold mb3">
                                                                    Categories
                                                                </h4>
                                                                <p>
                                                                    Anytime create, update or delete main categories
                                                                    e.g. Men, Women and Kids
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {/*<div className="col s12 m4">*/}
                                            {/*    <Link to="https://www.boltreactor.com/placement" target="_blank"*/}
                                            {/*       className="link-mute">*/}
                                            {/*        <div className="shadow-0 rounded-sm db mb5 pa3">*/}
                                            {/*            <div className="flex">*/}
                                            {/*                <div className="mh3">*/}
                                            {/*                    <i className="material-icons-outlined" style={{*/}
                                            {/*                        color: '#0258ff',*/}
                                            {/*                        fontSize: '36px'*/}
                                            {/*                    }}>live_help</i>*/}
                                            {/*                </div>*/}
                                            {/*                <div className="flex-grow-1" style={{minHeight: '136px'}}>*/}
                                            {/*                    <h4 className="bold mb3">*/}
                                            {/*                        Help & Support*/}
                                            {/*                    </h4>*/}
                                            {/*                    <p>*/}
                                            {/*                        Show us your own unique designs with #bambihabyyou*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </Link>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <SmartFooter/>
            </Fragment>
        );
    }
}

export default withRouter(connect(null, {getAllCategories
})(AdminHome));

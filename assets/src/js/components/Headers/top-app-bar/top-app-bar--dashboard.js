import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUser, toggleDrawers} from "../../../actions/profile";
import {viewCart} from "../../../actions/user";
import DrawerDashboard from "../../../reusable-components/Drawers/drawer--dashboard";
import DrawerSettings from "../../../reusable-components/Drawers/drawer--settings";
import DrawerHome from "../../../reusable-components/Drawers/drawer--home";

class TopAppBarDashboard extends Component {
    componentDidMount() {
        // if (localStorage.getItem("token")) {
        //     this.props.getUser();
        // }
        this.props.viewCart();
    }

    selectDrawer = () => {
        if (this.props.location.pathname.startsWith("/account-settings")) {
            return <DrawerSettings/>
        } else if (this.props.location.pathname === ("/dashboard")) {
            return <DrawerDashboard/>
        } else if (this.props.location.pathname === ("/orders")) {
            return <DrawerDashboard/>
        } else if (this.props.location.pathname === ("/favorites")) {
            return <DrawerDashboard/>
        } else {
            return <DrawerHome/>
        }
    };

    render() {
        return (
            <div>
                {/* Top app bar dashboard */}

                <header className="mdc-top-app-bar mdc-top-app-bar--fixed js-top-app-bar"
                        data-mdc-auto-init="MDCTopAppBar">
                    <div className="mdc-top-app-bar__row space-around__">
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                            <button
                                className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button hide-lg js-trigger-mdc-drawer"
                                aria-label="Open navigation menu" onClick={() => {
                                this.props.toggleDrawers(true)
                            }}>menu
                            </button>
                            <Link to="/" className="mdc-top-app-bar__title"><span
                                className="tracked-m tracked-l">BAMBIHA</span></Link>
                        </section>
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
                                 role="toolbar">
                            <div className="default-dropdown tooltip mr2">
                                <button className="material-icons-outlined mdc-top-app-bar__action-item mdc-icon-button"
                                        aria-label="Favorite">help_outlined
                                </button>
                                <div className="mdc-menu-surface--anchor">
                                    <div className="mdc-menu mdc-menu-surface" tabIndex={0}>
                                        <div className="content pa2" style={{width: '15.25rem'}}>
                                            <div className="mb3">
                                                <h6 className="white" style={{fontSize: '.86562rem'}}>Chat with us</h6>
                                                <p className="white pa0 ma0" style={{fontSize: '.825rem'}}>
                                                    Ask us anything!
                                                </p>
                                            </div>
                                            <div className="mb1">
                                                <h6 className="white"
                                                    style={{fontSize: '.86562rem'}}>Help &amp; Support</h6>
                                                <p className="white pa0 ma0" style={{fontSize: '.825rem'}}>
                                                    Email us at help@bambiha.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link className="mr2" to="/favorites">
                                <button className="material-icons-outlined mdc-top-app-bar__action-item mdc-icon-button"
                                        aria-label="Favorite">favorite_border
                                </button>
                            </Link>
                            <Link to='/cart'
                                  className="mr2 active cart-link">
                                {/*shopping_cart*/}
                                <button className="mdc-top-app-bar__action-item mdc-icon-button">
                                    {this.props.cart && this.props.cart.length > 0 ?
                                        <span className=" badge badge--header material-icons"
                                              data-badge={this.props.cart.length}>shopping_cart</span> :
                                        <span>shopping_cart</span>
                                    }
                                </button>
                            </Link>
                            <div className="mr3">
                                <div className="default-dropdown">
                                    <div style={{height: '32px', width: '32px'}}>
                                        {/*
            <img class="img-avatar" src="/assets/images/static/user_avatar.svg" alt="">
            */}
                                        <img className="img-avatar"
                                             src={this.props.user && this.props.user.profile_image ? this.props.user.profile_image : "/static/user_avatar.svg"}
                                             alt=""/>
                                    </div>
                                    <div className="mdc-menu-surface--anchor">
                                        <div className="mdc-menu mdc-menu-surface" tabIndex={0}>
                                            <div className="content" style={{width: '15.25rem'}}>
                                                <h4 className="dropdown-header dropdown-menu-item text-secondary"
                                                ><Link to="#!">Bolt Reactor</Link></h4>
                                                <div className="dropdown-divider"/>
                                                <Link
                                                    className="dropdown-item dropdown-menu-item header_dropdown-item db link-mute"
                                                    to="/account-settings">
                                                    <i className="material-icons-outlined v-mid">person</i>
                                                    My Account
                                                </Link>
                                                <Link
                                                    className="dropdown-item dropdown-menu-item header_dropdown-item db link-mute"
                                                    to="/dashboard">
                                                    <i className="material-icons-outlined v-mid">dashboard</i>
                                                    My Dashboard
                                                </Link>
                                                <Link
                                                    className="dropdown-item dropdown-menu-item header_dropdown-item db link-mute"
                                                    to="/orders">
                                                    <i className="material-icons-outlined v-mid">shopping_basket</i>
                                                    Manage My Orders
                                                </Link>
                                                <Link
                                                    className="dropdown-item dropdown-menu-item header_dropdown-item db link-mute"
                                                    to="/logout">
                                                    <i className="material-icons v-mid">logout</i>
                                                    Log out
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </header>
                {this.selectDrawer()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    cart: state.user.cart
});

export default withRouter(connect(mapStateToProps, {getUser, toggleDrawers, viewCart})(TopAppBarDashboard))

import React, {Component, Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addProfile, getUser, setUserInfo} from "../../../actions/profile";
import {addProfilePicture} from "../../../actions/authentication";

class TopAppBarDashboard extends Component {
    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.props.getUser();
        }
    }

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
                                aria-label="Open navigation menu">menu
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
                                                    Email us at help@kompassera.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link className="mr2" to="/cart">
                                <button className="material-icons-outlined mdc-top-app-bar__action-item mdc-icon-button"
                                        aria-label="Favorite">favorite_border
                                </button>
                            </Link>
                            <div className="mr2">
                                <div className="pri-dropdown right">
                                    <button
                                        className="material-icons-outlined mdc-top-app-bar__action-item mdc-icon-button"
                                        aria-label="Favorite">shopping_cart
                                    </button>
                                </div>
                            </div>
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
                                                    to="/e-store/dashboard">
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default withRouter(connect(mapStateToProps, {getUser})(TopAppBarDashboard))

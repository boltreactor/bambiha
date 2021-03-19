import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUser, toggleDrawers} from "../../actions/profile";
import {addProfilePicture} from "../../actions/authentication";

import DashboardDrawer from "../../reusable-components/Drawers/Toggle/dashboard-drawer";
import AccountDrawer from "../../reusable-components/Drawers/Toggle/account-drawer";

class SettingsHeader extends Component {


    selectDrawer = () => {
        if (this.props.location.pathname.includes("/settings")) {
            return <AccountDrawer/>
        } else if (this.props.location.pathname === ("/")) {
            return <DashboardDrawer/>
        } else {

        }
    };

    render() {

        return (
            <React.Fragment>
                <header className="mdc-top-app-bar mdc-top-app-bar--fixed js-top-app-bar"
                        data-mdc-auto-init="MDCTopAppBar">
                    {/* Global alert top */}
                    {/* Content */}
                    <div className="mdc-top-app-bar__row space-around__">
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                            <button
                                className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button hide-lg js-trigger-mdc-drawer"
                                aria-label="Open navigation menu"
                                onClick={() => {
                                    this.props.toggleDrawers(true)
                                }}>menu
                            </button>
                            <Link to="/dashboard" className="mdc-top-app-bar__title"><span
                                className="tracked-m tracked-l">KOMPASSERA</span></Link>
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
                                                    Email us at help@boltreactor.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mr3">
                                <div className="default-dropdown">
                                    <div style={{height: '32px', width: '32px'}}>
                                        {this.props.user && this.props.user.profile_image ?
                                            <img className="img-avatar" src={this.props.user.profile_image}
                                                 alt=""/> : <img className="img-avatar" src={"/static/user_avatar.svg"}
                                                                 alt=""/>}
                                    </div>
                                    <div className="mdc-menu-surface--anchor">
                                        <div className="mdc-menu mdc-menu-surface" tabIndex={0}>
                                            <div className="content" style={{width: '15.25rem'}}>
                                                <h4 className="dropdown-header dropdown-menu-item text-secondary">KompassEra
                                                </h4>
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
                                                    <i className="material-icons-outlined v-mid">business</i>
                                                    Manage My Business
                                                </Link>
                                                <Link
                                                    className="dropdown-item dropdown-menu-item header_dropdown-item db link-mute"
                                                    to="/dashboard">
                                                    <i className="material-icons-outlined v-mid">miscellaneous_services</i>
                                                    Services
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
                    {/* Global alert bottom */}
                </header>

                {this.selectDrawer()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});


export default withRouter(connect(mapStateToProps, {getUser, toggleDrawers, addProfilePicture})(SettingsHeader));

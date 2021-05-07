import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import Drawer, {DrawerContent, DrawerHeader} from "@material/react-drawer";
import {connect} from "react-redux";
import {toggleDrawers} from "../../actions/profile";
import {ClickAwayListener} from "@material-ui/core";

class DrawerSettings extends Component {

    handleDrawerClose = () => {
        this.props.toggleDrawers(false)
    };

    render() {
        if (this.props.toggleDrawer) {
            return (
                <ClickAwayListener onClickAway={this.handleDrawerClose}>
                    <Drawer
                        modal
                        open={this.props.toggleDrawer}>
                        <DrawerHeader>
                            <header className="mdc-drawer__header">
                                <div className="flex">
                                    <div className="flex-grow-1">
                                        <a href="/" className="mdc-drawer__title">
                                        <span className="tracked-l tracked-m"
                                              style={{fontSize: '1.25rem'}}>BAMBIHA</span>
                                        </a>
                                    </div>
                                    <div className="mt1">
                                        <button className="mdc-icon-button material-icons js-close-drawer"
                                                onClick={() => {
                                                    this.props.toggleDrawers(false)
                                                }}>close
                                        </button>
                                    </div>
                                </div>
                            </header>
                        </DrawerHeader>
                        <DrawerContent>
                            <div className="mdc-drawer__content display-flex flex--column">
                                <nav className="mdc-list" style={{marginTop: 16 + "px"}} data-mdc-auto-init="MDCList">
                                    <Link className="mdc-list-item mdc-ripple-surface"
                                          data-mdc-auto-init="MDCRipple" to="/account-settings">
                                        <i className="material-icons-outlined v-mid mr2"
                                           aria-hidden="true">perm_identity</i>
                                        My Profile
                                    </Link>
                                    <Link className="mdc-list-item mdc-ripple-surface"
                                          data-mdc-auto-init="MDCRipple" to="/account-settings/social-logins">
                                        <i className="material-icons-outlined v-mid mr2"
                                           aria-hidden="true">share</i>
                                        Social Logins
                                    </Link>
                                    <Link className="mdc-list-item mdc-ripple-surface"
                                          data-mdc-auto-init="MDCRipple" to="/account-settings/change-password">
                                        <i className="material-icons-outlined v-mid mr2"
                                           aria-hidden="true">vpn_key</i>
                                        Change Password
                                    </Link>
                                    <Link className="mdc-list-item mdc-ripple-surface"
                                          data-mdc-auto-init="MDCRipple" to="/account-settings/product-and-billings">
                                        <i className="material-icons-outlined v-mid mr2"
                                           aria-hidden="true">monetization_on</i>
                                        Products & Billing
                                    </Link>
                                    <Link className="mdc-list-item mdc-ripple-surface"
                                          data-mdc-auto-init="MDCRipple" to="/account-settings/general-settings">
                                        <i className="material-icons-outlined v-mid mr2"
                                           aria-hidden="true">settings</i>
                                        General Settings
                                    </Link>

                                </nav>
                            </div>
                            <div className="mdc-drawer-scrim js-close-drawer"/>
                        </DrawerContent>
                    </Drawer>
                </ClickAwayListener>
            );
        }
        {
            return null;
        }
    }
}

const mapStateToProps = state => ({
    toggleDrawer: state.authentication.toggleDrawer
});

export default withRouter(connect(mapStateToProps, {toggleDrawers})(DrawerSettings));
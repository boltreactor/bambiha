import React, {Component} from "react";
import {Link, NavLink, withRouter} from "react-router-dom";
import Drawer, {DrawerContent, DrawerHeader} from "@material/react-drawer";
import {connect} from "react-redux";
import {toggleDrawers} from "../../../actions/profile";


class AccountDrawer extends Component {
    hideToggle = () => {
        this.props.toggleDrawers(false)
    };

    render() {
        if (this.props.toggleDrawer) {
            return (
                <Drawer style={{zIndex:"9999"}}
                    modal
                    open={this.props.toggleDrawer}>
                    <DrawerHeader>
                        <header className="mdc-drawer__header">
                            <div className="flex">
                                <div className="flex-grow-1">
                                    <a href="#" className="mdc-drawer__title">
                                        <span className="tracked-l tracked-m">Base App</span>
                                    </a>
                                </div>
                                <div className="mt1">
                                    <button className="mdc-icon-button material-icons js-close-drawer" onClick={() => {
                                        this.props.toggleDrawers(false)
                                    }}>close
                                    </button>
                                </div>
                            </div>
                        </header>
                    </DrawerHeader>
                    <DrawerContent>
                        <div className="mdc-drawer__content flex flex-column">
                            <aside className="side-menu-panel hide-scrollbar">
                                <div className="ph3">
                                    <ul className="side-menu pl0 pb4">

                                        <li className="item">
                                            <NavLink to="/settings/my-profile" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">perm_identity</i>
                                                <span>My Profile</span>
                                            </NavLink>
                                        </li>

                                        <li className="item">
                                            <NavLink to="/settings/social-logins" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">share</i>
                                                <span>Social Logins</span>
                                            </NavLink>
                                        </li>

                                        <li className="item">
                                            <NavLink to="/settings/change-password" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">vpn_key</i>
                                                <span>Change Password</span>
                                            </NavLink>
                                        </li>

                                        {/*<li className="item">*/}
                                        {/*    <NavLink to="/settings/billing" exact activeClassName="item item-active"*/}
                                        {/*             className="db text-decoration-none"*/}
                                        {/*             onClick={() => this.hideToggle()}>*/}
                                        {/*        <i className="material-icons-outlined v-mid mr2">monetization_on</i>*/}
                                        {/*        <span>Products & Billing</span>*/}
                                        {/*    </NavLink>*/}
                                        {/*</li>*/}

                                       <li className="item">
                                            <NavLink to="/settings/general" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">settings</i>
                                                <span>General Settings</span>
                                            </NavLink>
                                        </li>


                                    </ul>
                                </div>
                            </aside>
                        </div>

                        <div className="mdc-drawer-scrim js-close-drawer"/>
                    </DrawerContent>
                </Drawer>
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

export default withRouter(connect(mapStateToProps, {toggleDrawers})(AccountDrawer));

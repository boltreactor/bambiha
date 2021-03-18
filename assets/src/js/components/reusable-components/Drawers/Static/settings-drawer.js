import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class SettingsDrawer extends Component {
    render() {
        return (
            <aside className="side-menu-panel hide-scrollbar">
                <div className="ph3">
                    <ul className="side-menu pl0 pb4">
                        <li className="item">
                            <NavLink className="db text-decoration-none" exact activeClassName="item-active" to="/account-settings">
                                <i className="material-icons-outlined v-mid mr2">perm_identity</i>
                                <span>My Profile</span>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink className="db text-decoration-none" exact activeClassName="item-active" to="/account-settings/social-logins">
                                <i className="material-icons-outlined v-mid mr2">share</i>
                                <span>Social Logins</span>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink className="db text-decoration-none" exact activeClassName=" item-active" to="/account-settings/change-password">
                                <i className="material-icons-outlined v-mid mr2">vpn_key</i>
                                <span>Change Password</span>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink className="db text-decoration-none" exact activeClassName="item-active" to="/account-settings/product-and-billings">
                                <i className="material-icons-outlined v-mid mr2">monetization_on</i>
                                <span>Products & Billing</span>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink className="db text-decoration-none" activeClassName="item-active" exact to="/account-settings/general-settings">
                                <i className="material-icons-outlined v-mid mr2">settings</i>
                                <span>General Settings</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default SettingsDrawer;
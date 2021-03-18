import React, {Component, Fragment} from 'react';
import Drawer, {DrawerContent, DrawerHeader} from "@material/react-drawer";
import {withRouter, Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {toggleDrawers} from "../../../actions/profile";

class DashboardDrawer extends Component {

    render() {
        if (this.props.toggleDrawer) {
            return (
                <Drawer style={{zIndex:"9999"}}
                    modal
                    open={this.props.toggleDrawer}>
                    <DrawerHeader>
                        <div className="mdc-drawer__header">
                            <div className="flex">
                                <div className="flex-grow-1">
                                    <a href="#" className="mdc-drawer__title">
                                        <span className="tracked-l tracked-m">KOMPASSERA</span>
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
                        </div>
                    </DrawerHeader>

                    <DrawerContent>
                        <div className="mdc-drawer__content flex flex-column">
                            {/* Dashboard */}
                            <aside className="side-menu-panel hide-scrollbar">
                                <div className="ph3">
                                    <ul className="side-menu pl0 pb4">
                                         <li className="item">
                                            <NavLink to="/" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">home</i>
                                                <span>Home</span>
                                            </NavLink>
                                        </li>
                                        <li className="item">
                                            <NavLink to="/contact" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">group</i>
                                                <span>Contact Hub</span>
                                            </NavLink>
                                        </li>
                                        <li className="item">
                                            <NavLink to="/billing" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">payment</i>
                                                <span>Payments</span>
                                            </NavLink>
                                        </li>
                                        <li className="item">
                                            <NavLink to="/chat" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">chat</i>
                                                <span>Messenger</span>
                                            </NavLink>
                                        </li>
                                         <li className="item">
                                            <NavLink to="/today" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">today</i>
                                                <span>Booking</span>
                                            </NavLink>
                                        </li>
                                        <li className="item">
                                            <NavLink to="/reviews" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">emoji_events</i>
                                                <span>Reviews</span>
                                            </NavLink>
                                        </li>
                                        <li className="item">
                                            <NavLink to="/placement" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">place</i>
                                                <span>Placement</span>
                                            </NavLink>
                                        </li>
                                        <li className="item">
                                            <NavLink to="/sites" exact activeClassName="item item-active"
                                                     className="db text-decoration-none"
                                                     onClick={() => this.hideToggle()}>
                                                <i className="material-icons-outlined v-mid mr2">important_devices</i>
                                                <span>Sites</span>
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

export default withRouter(connect(mapStateToProps, {toggleDrawers})(DashboardDrawer));

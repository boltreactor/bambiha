import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import Drawer, {DrawerContent, DrawerHeader} from "@material/react-drawer";
import {connect} from "react-redux";
import {toggleDrawers} from "../../actions/profile";
import {ClickAwayListener} from "@material-ui/core";

class DrawerDashboard extends Component {

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
                                          data-mdc-auto-init="MDCRipple" to="/dashboard">
                                        <i className="material-icons-outlined v-mid mr2"
                                           aria-hidden="true">home</i>
                                        Home
                                    </Link>
                                    <Link className="mdc-list-item mdc-ripple-surface"
                                          data-mdc-auto-init="MDCRipple" to="/orders">
                                        <i className="material-icons-outlined v-mid mr2"
                                           aria-hidden="true">shopping_basket</i>
                                        Orders
                                    </Link>
                                    <Link className="mdc-list-item mdc-ripple-surface"
                                          data-mdc-auto-init="MDCRipple" to="/dashboard/favorites">
                                        <i className="material-icons-outlined v-mid mr2"
                                           aria-hidden="true">favorite_border</i>
                                        Favorites
                                    </Link>
                                    <Link className="mdc-list-item mdc-ripple-surface"
                                          data-mdc-auto-init="MDCRipple" to="/">
                                        <i className="material-icons-outlined v-mid mr2"
                                           aria-hidden="true">add_shopping_cart</i>
                                        Continue Shopping
                                    </Link>
                                    {/*<Link className="mdc-list-item mdc-ripple-surface"
                                                 data-mdc-auto-init="MDCRipple" to="#">*/}
                                    {/*    <i className="material-icons-outlined v-mid mr2"*/}
                                    {/*       aria-hidden="true">live_help</i>*/}
                                    {/*    Help & Support*/}
                                    {/*</Link>*/}

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

export default withRouter(connect(mapStateToProps, {toggleDrawers})(DrawerDashboard));
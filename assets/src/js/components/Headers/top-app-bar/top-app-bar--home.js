import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUser, toggleDrawers} from "../../../actions/profile";
import {getUserCategories, viewCart} from "../../../actions/user";
import DrawerHome from "../../../reusable-components/Drawers/drawer--home";


class TopAppBarHome extends Component {

    componentDidMount() {
        // if (localStorage.getItem("token")) {
        //     this.props.getUser();
        // }

        this.props.getUserCategories();
        this.props.user !==undefined && this.props.viewCart();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.cart !== prevProps.cart) {
    //         this.props.viewCart();
    //     }
    // }

    render() {
        return (
            <div>
                {/* Primary top app bar */}

                <header className="mdc-top-app-bar mdc-top-app-bar--shadow__ mdc-top-app-bar--fixed js-top-app-bar"
                        data-mdc-auto-init="MDCTopAppBar">
                    {/* Primary top app bar */}
                    <div className="mdc-top-app-bar__row contain-full-bleed links--muted ">
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                            <button
                                className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button dn-l js-trigger-mdc-drawer"
                                aria-label="Open navigation menu" onClick={() => {
                                this.props.toggleDrawers(true)
                            }}>menu
                            </button>
                            <Link to="/" className="mdc-top-app-bar__title"><span
                                className="tracked">BAMBIHA</span></Link>
                        </section>
                        <section className="mdc-top-app-bar__section app-shop mdc-top-app-bar__section--align-center"
                                 role="toolbar">

                            {/*get categories*/}

                            <Link to="/" className="show-lg link-mute">
                                <button className="mdc-button mdc-top-app-bar__action-item round">
                                    <span className="mdc-button__ripple"/>
                                    <span className="mdc-button__label">Home</span>
                                </button>
                            </Link>
                            {this.props.header_categories && this.props.header_categories.map(category => {
                                return <div key={category.id}>
                                    <Link to={`/category/${category.id}`} className="show-lg link-mute">
                                        <button className="mdc-button mdc-top-app-bar__action-item round">
                                            <span className="mdc-button__ripple"/>
                                            <span className="mdc-button__label">{category.name}</span>
                                        </button>
                                    </Link>
                                </div>
                            })}

                            {/*<Link to="/men" className="show-lg link-mute">*/}
                            {/*    <button className="mdc-button mdc-top-app-bar__action-item round">*/}
                            {/*        <span className="mdc-button__ripple"/>*/}
                            {/*        <span className="mdc-button__label">Men</span>*/}
                            {/*    </button>*/}
                            {/*</Link>*/}
                            {/*<Link to="/women" className="show-lg link-mute">*/}
                            {/*    <button className="mdc-button mdc-top-app-bar__action-item round">*/}
                            {/*        <span className="mdc-button__ripple"/>*/}
                            {/*        <span className="mdc-button__label">Women</span>*/}
                            {/*    </button>*/}
                            {/*</Link>*/}
                            {/*<Link to="/kids" className="show-lg link-mute">*/}
                            {/*    <button className="mdc-button mdc-top-app-bar__action-item round">*/}
                            {/*        <span className="mdc-button__ripple"/>*/}
                            {/*        <span className="mdc-button__label">Kids</span>*/}
                            {/*    </button>*/}
                            {/*</Link>*/}
                            {/*<Link to="/custom" className="show-lg link-mute">*/}
                            {/*    <button className="mdc-button mdc-top-app-bar__action-item round">*/}
                            {/*        <span className="mdc-button__ripple"/>*/}
                            {/*        <span className="mdc-button__label">Custom</span>*/}
                            {/*    </button>*/}
                            {/*</Link>*/}
                            {/*<Link to="/sale" className="show-lg link-mute">*/}
                            {/*    <button className="mdc-button mdc-top-app-bar__action-item round">*/}
                            {/*        <span className="mdc-button__ripple"/>*/}
                            {/*        <span className="mdc-button__label">Sale</span>*/}
                            {/*    </button>*/}
                            {/*</Link>*/}

                        </section>
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
                                 role="toolbar">
                            <div className="default-dropdown tooltip mr2 hide-sm">
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
                                        <span className=" badge badge--header material-icons">shopping_cart</span>
                                    }
                                </button>
                            </Link>
                            {/*    </div>*/}
                            {/*</Link>*/}
                            <div className="mr3">
                                <div className="default-dropdown">
                                    <div style={{height: '32px', width: '32px'}}>

                                        <img className="img-avatar"
                                             src={this.props.user && this.props.user.profile_image ? this.props.user.profile_image : "/static/user_avatar.svg"}
                                             alt=""/>
                                    </div>
                                    <div className="mdc-menu-surface--anchor">
                                        <div className="mdc-menu mdc-menu-surface" tabIndex={0}>
                                            <div className="content" style={{width: '15.25rem'}}>
                                                <h4 className="dropdown-header dropdown-menu-item text-secondary"
                                                    to="#!">Bolt Reactor</h4>
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
                                                    to="/dashboard/orders">
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
                <DrawerHome user={this.props.user} categories={this.props.header_categories}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    header_categories: state.user.header_categories,
    cart: state.user.cart
});

export default withRouter(connect(mapStateToProps, {
    getUser,
    getUserCategories,
    toggleDrawers,
    viewCart
})(TopAppBarHome))

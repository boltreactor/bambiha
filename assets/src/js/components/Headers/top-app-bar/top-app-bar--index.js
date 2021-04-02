import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUser} from "../../../actions/profile";
import {getUserCategories} from "../../../actions/user";

class TopAppBarIndex extends Component {

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.props.getUser();
        }
        this.props.getUserCategories();
    }

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
                                aria-label="Open navigation menu">menu
                            </button>
                            <Link to="/" className="mdc-top-app-bar__title"><span
                                className="tracked">BAMBIHA</span></Link>
                        </section>
                        <section className="mdc-top-app-bar__section app-shop mdc-top-app-bar__section--align-center"
                                 role="toolbar">
                            <Link to="/new" className="show-lg link-mute">
                                <button className="mdc-button mdc-top-app-bar__action-item round">
                                    <span className="mdc-button__ripple"/>
                                    <span className="mdc-button__label">New Release</span>
                                </button>
                            </Link>

                            {this.props.categories && this.props.categories.map(category => {
                                return <div key={category.id}>
                                        <Link to={`/category/${category.id}`} className="show-lg link-mute">
                                           <button className="mdc-button mdc-top-app-bar__action-item round">
                                               <span className="mdc-button__ripple"/>
                                               <span className="mdc-button__label">{category.name}</span>
                                           </button>
                                        </Link>
                                       </div>
                            })}

                            {/*<Link to="/sale" className="show-lg link-mute">*/}
                            {/*    <button className="mdc-button mdc-top-app-bar__action-item round">*/}
                            {/*        <span className="mdc-button__ripple"/>*/}
                            {/*        <span className="mdc-button__label">Sale</span>*/}
                            {/*    </button>*/}
                            {/*</Link>*/}
                            {/*<button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button dn-l js-trigger-mdc-drawer" aria-label="Open navigation menu">menu</button>*/}
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
                                <div>
                                    <button
                                        className="material-icons-outlined mdc-top-app-bar__action-item mdc-icon-button"
                                        aria-label="Favorite">shopping_cart
                                    </button>
                                </div>
                            </div>
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
                                                    to="#!">Get Started For Free</h4>
                                                <div className="dropdown-divider"/>
                                                <Link
                                                    className="dropdown-item dropdown-menu-item header_dropdown-item db link-mute"
                                                    to="/login">
                                                    <i className="material-icons v-mid">account_box</i>
                                                    Sign In
                                                </Link>
                                                <Link
                                                    className="dropdown-item dropdown-menu-item header_dropdown-item db link-mute"
                                                    to="/signup">
                                                    <i className="material-icons v-mid">how_to_reg</i>
                                                    Sign Up
                                                </Link>
                                                <Link
                                                    className="dropdown-item dropdown-menu-item header_dropdown-item db link-mute"
                                                    to="#">
                                                    <i className="material-icons-outlined v-mid">miscellaneous_services</i>
                                                    Help & Support
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
    user: state.user.user,
    categories: state.user.header_categories
});

export default withRouter(connect(mapStateToProps, {getUser, getUserCategories})(TopAppBarIndex))

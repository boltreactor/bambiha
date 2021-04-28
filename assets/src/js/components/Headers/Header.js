import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import TopAppBarAdmin from "./top-app-bar/top-app-bar--admin";
import TopAppBarDashboard from "./top-app-bar/top-app-bar--dashboard";
import TopAppBarIndex from "./top-app-bar/top-app-bar--index";
import TopAppBarHome from "./top-app-bar/top-app-bar--home";
import {getUser, toggleDrawers} from "../../actions/profile";
import {connect} from "react-redux";
import {getUserCategories} from "../../actions/user";


class Header extends Component {
    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.props.getUser();
        }
    }


    render() {
        return (
            <Fragment>

                {this.props.loginStatus ?
                    window.location.pathname.startsWith("/admin") ? <TopAppBarAdmin/> :
                        window.location.pathname.startsWith("/account-settings") ? <TopAppBarDashboard/> :
                            window.location.pathname.startsWith("/dashboard") ? <TopAppBarDashboard/> :
                                window.location.pathname.startsWith("/orders") ? <TopAppBarDashboard/> :
                                  window.location.pathname.startsWith("/cart") ? <TopAppBarDashboard/> :
                                            <TopAppBarHome/> :
                    !this.props.loginStatus ?
                        window.location.pathname.startsWith("/login") ? null :
                            window.location.pathname.startsWith("/signup") ? null :
                                <TopAppBarIndex/>
                        : null}


                {/*{this.props.loginStatus && window.location.pathname !== '/welcome' ?*/}
                {/*    <LoggedInHeader/> :*/}
                {/*    !this.props.loginStatus && window.location.pathname !== '/welcome' &&*/}
                {/*    null}*/}

                {/*{!this.props.loginStatus && window.location.pathname === '/login' ||*/}
                {/*!this.props.loginStatus && window.location.pathname === '/signup' ?*/}
                {/*    null : !this.props.loginStatus && window.location.pathname === '/reset-password' ? null :*/}
                {/*        !this.props.loginStatus && window.location.pathname.includes('/new-password') ?*/}
                {/*            null : !this.props.loginStatus && window.location.pathname === '/welcome-back' ?*/}
                {/*            null : !this.props.loginStatus && window.location.pathname !== '/welcome' &&*/}
                {/*            <LoggedOutHeader/>}*/}

            </Fragment>
        );
    }

}


export default withRouter(connect(null, {getUser})(Header))


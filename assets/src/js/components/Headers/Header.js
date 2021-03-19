import React, {Component, Fragment} from 'react';
import LoggedOutHeader from "./LoggedOutHeader";
import {withRouter} from 'react-router-dom';
import SettingsHeader from "./settings-header";
import LoggedInHeader from "./loggedInHeader";
import TopAppBarAdmin from "./top-app-bar/top-app-bar--admin";
import TopAppBar from "./top-app-bar/top-app-bar";
import TopAppBarDashboard from "./top-app-bar/top-app-bar--dashboard";


class Header extends Component {


    render() {
        return (
            <Fragment>

                {this.props.loginStatus && window.location.pathname.startsWith("/admin") ? <TopAppBarAdmin/> :
                    this.props.loginStatus && window.location.pathname.startsWith("/dashboard") ? <TopAppBarDashboard/>:
                    this.props.loginStatus && window.location.pathname.startsWith("/orders") ? <TopAppBarDashboard/>:
                    this.props.loginStatus && window.location.pathname.startsWith("/favorites") ? <TopAppBarDashboard/>: <TopAppBar/>}


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

export default withRouter(Header);

import React, {Component, Fragment} from 'react';
import LoggedInHeader from "./loggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";
import {withRouter} from 'react-router-dom';
import WelcomeHeader from "./welcome-header";
import SettingsHeader from "./settings-header";


class Header extends Component {


    render() {
        return (
            <Fragment>

                {this.props.loginStatus && window.location.pathname !== '/welcome' ?
                    <SettingsHeader/> :
                    !this.props.loginStatus && window.location.pathname !== '/welcome' &&
                    null}

                {!this.props.loginStatus && window.location.pathname === '/login' ||
                !this.props.loginStatus && window.location.pathname === '/signup' ?
                    null : !this.props.loginStatus && window.location.pathname === '/reset-password' ? null :
                        !this.props.loginStatus && window.location.pathname.includes('/new-password') ?
                            null : !this.props.loginStatus && window.location.pathname === '/welcome-back' ?
                            null : !this.props.loginStatus && window.location.pathname !== '/welcome' &&
                            <LoggedOutHeader/>}

            </Fragment>
        );
    }
}

export default withRouter(Header);

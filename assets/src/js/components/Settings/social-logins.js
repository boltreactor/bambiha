import React, {Component} from 'react';
import SettingsDrawer from "../../reusable-components/Drawers/Static/settings-drawer";
import SmartFooter from "../Footers/smart-footer";
import {connect} from 'react-redux';
import {addSocialConnection} from '../../actions/profile';
import {GoogleLogin} from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const clientId = '1094579720347-rd6b85nu5soe61pec046b6i6vanjobv5.apps.googleusercontent.com';

class SocialLogins extends Component {

    onSuccess = (res) => {
        this.props.addSocialConnection({
            'platform': 'google',
            'email': res.profileObj.email
        })
    };

    responseFacebook = (response) => {
        this.props.addSocialConnection({
            'platform': 'facebook',
            'email': response.email
        })
    }

    onFailure = (res) => {

    };

    render() {
        return (
            <div>
                <div className="page my-page">
                    <div className="page__content">
                        <div className="main-wrapper">
                            <SettingsDrawer/>
                            <main className="main"
                                  style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                                <div className="container l">
                                    <header className="mb4 db">
                                        <h1 className="bold">My Account</h1>
                                    </header>
                                    <div className="shadow border rounded-sm db pa3">
                                        <header className="mb4">
                                            <h3 className="bold">Social Logins</h3>
                                        </header>
                                        <div className="mb3">
                                            <h4 className="bold">Connect Your Social Accounts</h4>
                                            <p className="text-space-grey mt2 mb4">
                                                You can enable single sign on using your Facebook or Google Accounts.
                                            </p>
                                        </div>
                                        <div className="auth_page-auth w-60-m w-50-l mb4" style={{maxWidth: '22rem'}}>

                                            {this.props.user.google_connection_email ?
                                                <button type="button"
                                                        disabled={true}
                                                        className="btn btn-xl btn-outline align-items-center justify-content-center btn-block d-flex mb3 btn-google-custom">
                                                    <img className="google-icon v-mid mr2"
                                                         style={{width: '20px', height: '20px'}} alt=""
                                                         src="/static/google-icon.png"/>
                                                    <span
                                                        className="relative text-secondary">CONNECTED WITH GOOGLE</span>
                                                </button> :
                                                <GoogleLogin
                                                    className="btn btn-xl btn-outline align-items-center justify-content-center btn-block d-flex mb3 btn-google-custom v-mid mr2"
                                                    clientId={clientId}
                                                    onSuccess={this.onSuccess}
                                                    render={renderProps => (
                                                        <button type="button"
                                                                onClick={renderProps.onClick}
                                                                className="btn btn-xl btn-outline align-items-center justify-content-center btn-block d-flex mb3 btn-google-custom">
                                                            <img className="google-icon v-mid mr2"
                                                                 style={{width: '20px', height: '20px'}} alt=""
                                                                 src="/static/google-icon.png"/>
                                                            <span
                                                                className="relative text-secondary">CONNECT WITH GOOGLE</span>
                                                        </button>
                                                    )}
                                                    onFailure={this.onFailure}
                                                    cookiePolicy={'single_host_origin'}
                                                    style={{marginTop: '100px'}}
                                                    isSignedIn={false}
                                                />
                                            }
                                            {this.props.user.facebook_connection_email ?
                                                <button type="button"
                                                        disabled={true}
                                                        className="btn btn-xl btn-outline align-items-center justify-content-center btn-block d-flex btn-fb-custom">
                                                    <img className="v-mid mr2" alt="" src="/static/facebook-login.svg"/>
                                                    <span className="relative white">CONNECTED WITH FACEBOOK</span>
                                                </button> :
                                                <FacebookLogin
                                                    appId="214759983644946"
                                                    autoLoad={false}
                                                    fields="name,email,picture"
                                                    render={renderProps => (
                                                        <button type="button" onClick={renderProps.onClick}
                                                                className="btn btn-xl btn-outline align-items-center justify-content-center btn-block d-flex btn-fb-custom">
                                                            <img className="v-mid mr2" alt=""
                                                                 src="/static/facebook-login.svg"/>
                                                            <span
                                                                className="relative white">CONNECT WITH FACEBOOK</span>
                                                        </button>

                                                    )}
                                                    callback={this.responseFacebook}/>

                                            }
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <SmartFooter/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.authentication.error,
    error_from: state.authentication.error_from,
    user: state.user.user

});

export default connect(mapStateToProps, {addSocialConnection})(SocialLogins);

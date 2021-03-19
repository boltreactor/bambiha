import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GoogleLogin} from 'react-google-login';
import {login, socialLogin} from '../../actions/authentication';

// const clientId =  '1069085399052-4rt4vtskuk35me0p4qoe2uas2cbjn9in.apps.googleusercontent.com';
const clientId = '1094579720347-rd6b85nu5soe61pec046b6i6vanjobv5.apps.googleusercontent.com';


class GoogleLoginCustom extends Component {
    onSuccess = (res) => {
        this.props.socialLogin({
            'platform': 'google',
            'name': res.profileObj.name,
            'image': res.profileObj.imageUrl,
            'id': res.profileObj.googleId,
            'email': res.profileObj.email
        }, this.props)


        // refreshTokenSetup(res);
    };

    onFailure = (res) => {

    };

    render() {
        return (
            <div>
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
                            <span className="relative text-secondary">{this.props.text}</span>
                        </button>
                    )}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{marginTop: '100px'}}
                    isSignedIn={false}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {socialLogin})(GoogleLoginCustom);

import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login, socialLogin} from '../../actions/authentication';
import Form from '../../reusable-components/form';
import GoogleLoginCustom from './googleLogin'
import Joi from 'joi-browser';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Textfield from "../../reusable-components/material-io/textfield";

class Login extends Form {

    responseFacebook = (response) => {
        this.props.socialLogin({
            'platform': 'facebook',
            'name': response.name,
            'image': response.picture.data.url,
            'id': response.id,
            'email': response.email
        }, this.props)
    }
    state = {
        isHidden: true,
        data: {
            email: "", password: ""
        },
        errors: {},
        email_for_error: ""
    };

    componentDidMount() {
        // this.state.email_for_error=false
    }

    schema = {
        email: Joi.string().required().email().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.email":
                        return {message: "Please enter a valid email"};
                    case "any.empty":
                        return {message: "Email is required"};
                }
            })
        }),
        password: Joi.string().required().min(8).error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.min":
                        return {message: "Your password must contain 8 characters"};
                    case "any.empty":
                        return {message: "Password is required"};
                }
            })
        })
    };


    doSubmit = (event) => {
        const user = {
            email: this.state.data.email,
            password: this.state.data.password
        };
        this.setState({email_for_error: user.email})


        this.props.login(user, this.props);
    };

    changeHidden = (event) => {

        event.preventDefault()
        this.setState({isHidden: !this.state.isHidden})
    }


    render() {
        if (this.props.loginStatus) {
            return <Redirect to='/dashboard'/>
        }
        const {isHidden} = this.state;
        return (
            <div>
                <div className="page ap-skin-blue">
                    <div className="page__content">
                        <div className="auth_master-form tc center">
                            {/* */}
                            <header className="pb4">
                                <Link to="/" className="link-mute"><h5>BAMBIHA</h5></Link>
                            </header>
                            {this.props.error === "Email doesn't exist" &&
                            <div className="ui-paper ui-alert ui-alert--error my2" role="alert">
                                <div className="ui-alert__icon">
                                    <i className="material-icons-outlined">error_outline</i>
                                </div>
                                <div className="ui-alert__message">
                                    Incorrect email or password.
                                </div>
                            </div>}
                            {/* */}
                            <div className="shadow-0 pa3 auth_page-auth">
                                {/* */}
                                <div className="mb4 mt3">
                                    <h4>Sign in to your account</h4>
                                </div>
                                {/* Google Login */}
                                <div className="mb4">
                                    <GoogleLoginCustom {...this.props} text={'LOG IN WITH GOOGLE'}/>
                                    {/*<button type="button" onClick={this.googleLogin}*/}
                                    {/*         className="btn btn-xl btn-outline align-items-center justify-content-center btn-block d-flex mb3 btn-google-custom">*/}
                                    {/*   <img className="google-icon v-mid mr2" style={{width: '20px', height: '20px'}} alt="" src="/static/google-icon.png" />*/}
                                    {/*   <span className="relative">SIGN UP WITH GOOGLE</span>*/}
                                    {/* </button>*/}


                                </div>
                                {/* Linked in Login */}
                                {/*<div className="mb4">*/}
                                {/*    <LinkedInPage {...this.props}/>*/}
                                {/*</div>*/}

                                {/* Facebook Login */}
                                {/*<div className="mb4">*/}
                                {/*    <FacebookLogin*/}
                                {/*        appId="214759983644946"*/}
                                {/*        autoLoad={false}*/}
                                {/*        fields="name,email,picture"*/}
                                {/*        render={renderProps => (*/}
                                {/*            <button type="button" onClick={renderProps.onClick}*/}
                                {/*                    className="btn btn-xl btn-outline align-items-center justify-content-center btn-block d-flex btn-fb-custom">*/}
                                {/*                <img className="v-mid mr2" alt="" src="/static/facebook-login.svg"/>*/}
                                {/*                <span className="relative white">SIGN IN WITH FACEBOOK</span>*/}
                                {/*            </button>*/}

                                {/*        )}*/}
                                {/*        callback={this.responseFacebook}/>*/}
                                {/*</div>*/}

                                {/* */}
                                <div className="mb4 relative auth_divider">
                                    <span className="auth_divider-text relative"
                                          style={{paddingLeft: '.63rem', paddingRight: '.63rem'}}>or</span>
                                </div>
                                {/* */}
                                <div className="mb4">
                                    <form className="form-register">
                                        {/* */}
                                        <Textfield
                                            name="email"
                                            label="Email"
                                            type="email"
                                            onChange={this.handleChange}
                                            value={this.state.data.email}
                                            error={this.state.errors.email}
                                            autoFocus={true}/>

                                        {/* */}
                                        <Textfield
                                            name="password"
                                            label="Password"
                                            type={isHidden ? 'password' : 'text'}
                                            onChange={this.handleChange}
                                            error={this.state.errors.password}
                                            value={this.state.data.password}
                                            onClick={this.onIconClick}
                                            isHidden={isHidden}
                                            changeHidden={this.changeHidden}
                                        />

                                        {/*<div className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trailing-icon w-100" data-mdc-auto-init="MDCTextField">*/}
                                        {/*  <i className="material-icons-outlined mdc-text-field__icon">visibility</i>*/}
                                        {/*  <input className="mdc-text-field__input" type="password" id="text-field-hero-input" />*/}
                                        {/*  <div className="mdc-notched-outline">*/}
                                        {/*    <div className="mdc-notched-outline__leading" />*/}
                                        {/*    <div className="mdc-notched-outline__notch">*/}
                                        {/*      <label htmlFor="text-field-hero-input" className="mdc-floating-label">Password</label>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="mdc-notched-outline__trailing" />*/}
                                        {/*  </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="mdc-text-field-helper-line">*/}
                                        {/*  <div className="mdc-text-field-helper-text" id="my-helper-id" aria-hidden="true" />*/}
                                        {/*</div>*/}


                                        {/* */}
                                        <div className="mv1">
                                            <div className="flex">
                                                <div className="flex-grow-1"/>
                                                <div>
                                                    <Link to="/reset-password">Forgot your password?</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* */}
                                        <div className="mv2 pt3">
                                            <button className="btn btn-xl btn-primary btn-block text-white btn-shadow"
                                                    onClick={this.handleSubmit}>SIGN IN
                                            </button>
                                        </div>
                                    </form>
                                    {/*{this.props.error && this.state.email_for_error &&*/}
                                    {/*<div className="ui-paper ui-alert ui-alert--error my2" role="alert">*/}
                                    {/*    <div className="ui-alert__icon">*/}
                                    {/*        <i className="material-icons-outlined">error_outline</i>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="ui-alert__message">{this.props.error}.*/}
                                    {/*    </div>*/}
                                    {/*</div>}*/}
                                </div>
                            </div>
                            {/* */}
                            <div className="mv2" style={{fontSize: '.875rem'}}>
                                <p>Need a Bambiha account?
                                    <Link title="Sign up" to="/signup"> Create an account</Link></p>
                            </div>
                            {/* */}
                            <div className="pv2 mb4">
                                <div className="flex items-center justify-center">
                                    ??
                                    <span className="mr2" style={{fontSize: '.875rem'}}>2021</span>
                                    <span className="dot"/>
                                    <Link className="di mh2 fw4" style={{fontSize: '.875rem', color: '#576c77'}}
                                          title="Terms of Service"
                                          to="/terms-of-service" target="_blank">Terms of Service</Link>
                                    <span className="dot"/>
                                    <Link className="di mh2 fw4" style={{fontSize: '.875rem', color: '#576c77'}}
                                          title="Terms of Service"
                                          to="/privacy-policy" target="_blank">Privacy Policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    loginStatus: state.authentication.loginStatus,
    error: state.authentication.error

});

export default connect(mapStateToProps, {login, socialLogin})(Login);

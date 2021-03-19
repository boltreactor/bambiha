import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/authentication'
import Form from "../../reusable-components/form";
import Joi from 'joi-browser';
import Textfield from "../../reusable-components/material-io/textfield";


class Welcome extends Form {
    state = {
        isHidden: true,
        data: {password: ""},
        errors: {}
    };
    schema = {
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
    doSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.props.user.email,
            password: this.state.data.password
        };

        this.props.login(user);
    };
    // googleLogin = () => {
    //     this.props.googleLogin();
    // };
    // facebookLogin = () => {
    //     this.props.facebookLogin();
    // };


    render() {
        if (this.props.loginStatus) {
            return <Redirect to="/"/>
        }
        const user = this.props.user;
        const {isHidden} = this.state;
        return (
            <div>
                <div className="page">
                    <div className="page__content">
                        <div className="auth_master-form tc center">
                            {/* */}
                            <header className="pb4">
                                <Link to="#" className="link-mute"><h5>KOMPASSERA</h5></Link>
                            </header>
                            {/* */}
                            <div className="shadow-0 pa3 auth_page-auth">
                                <div className="mb4 mt3">
                                    <h4>Welcome back</h4>
                                    <p>It looks like you already have an account using <span className="fw6"
                                                                                             style={{color: 'var(--primary)'}}>green@kompassera.com</span>
                                    </p>
                                </div>
                                <div className="mb4 col">
                                    <form className="form-register">
                                        {/* */}
                                        {!this.props.message && <Textfield
                                            name="password"
                                            label="Password"
                                            type={isHidden ? 'password' : 'text'}
                                            onChange={this.handleChange}
                                            error={this.state.errors.password || this.props.error}
                                            autoFocus={true}
                                            value={this.state.data.password}
                                            onClick={this.onIconClick}
                                            isHidden={isHidden}/>}

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
                                        <div className="mv2 pt3">
                                            <button className="btn btn-xl btn-primary btn-block text-white btn-shadow"
                                                    onClick={this.handleSubmit}>CONTINUE
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* */}
                            <div className="mv2" style={{fontSize: '.875rem'}}>
                                <p>Need a new Kompassera account?
                                    <Link title="Sign up" to="/signup"> Create an account</Link></p>
                            </div>
                            {/* */}
                            <div className="pv2 mb4">
                                <div className="flex items-center justify-center">
                                    ©
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

    user: state.user.user,
    loginStatus: state.authentication.loginStatus,
    message: state.authentication.message,
    error: state.authentication.error

});

export default withRouter(connect(mapStateToProps, {login})(Welcome));

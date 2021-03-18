import React, {Fragment} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {facebookLogin, googleLogin, login} from '../../actions/authentication'
import TextField from "../reusable-components/outlined-textfield";
import Form from "../reusable-components/form";
import Joi from 'joi-browser';
import {Button} from "@material-ui/core";
import Textfield from "../reusable-components/material-io/textfield";



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
    googleLogin = () => {
        this.props.googleLogin();
    };
    facebookLogin = () => {
        this.props.facebookLogin();
    };


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
                <p>It looks like you already have an account using <span className="fw6" style={{color: 'var(--primary)'}}>green@kompassera.com</span></p>
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
                          onClick={this.handleSubmit}>CONTINUE</button>
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
                <span className="dot" />
                <Link className="di mh2 fw4" style={{fontSize: '.875rem', color: '#576c77'}} title="Terms of Service"
                      to="/terms-of-service" target="_blank">Terms of Service</Link>
                <span className="dot" />
                <Link className="di mh2 fw4" style={{fontSize: '.875rem', color: '#576c77'}} title="Terms of Service"
                      to="/privacy-policy" target="_blank">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

                {/*Old Design*/}

            {/*<main className="page page--grid">*/}
            {/*    <div className="page__wrapper">*/}
            {/*        <div id="alerts" style={{maxWidth: '504px', margin: '16px auto'}}/>*/}
            {/*        <div id="global-status-container" style={{maxWidth: '504px', margin: '16px auto'}}/>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col s12 m12">*/}
            {/*                <div className="canvas-register clearfix">*/}
            {/*                    <div className="brand">*/}
            {/*                        <div className="row">*/}
            {/*                            <div className="col s12">*/}
            {/*                                <div className="header">*/}
            {/*                                    <h2 className="logo mdc-typography--title">*/}
            {/*                                        <Link to="/">*/}
            {/*                                            KompassEra*/}
            {/*                                        </Link>*/}
            {/*                                    </h2>*/}
            {/*                                    <p>*/}
            {/*                                        Welcome back*/}
            {/*                                    </p>*/}
            {/*                                    <div className="text-center mb2">*/}
            {/*                                        <div className="chip">*/}
            {/*                <span>*/}
            {/*                  <i className="material-icons-outlined va-middle">perm_identity</i>*/}
            {/*                </span>*/}
            {/*                <span>*/}
            {/*                    {user.email}*/}
            {/*                </span>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    {this.props.message && <div className="social-login">*/}
            {/*                        <div className="row">*/}
            {/*                            <div className="col s4">*/}
            {/*                                <div className="facebook">*/}
            {/*                                    <a onClick={this.facebookLogin}>*/}
            {/*                                        <svg xmlns="http://www.w3.org/2000/svg" height={20}*/}
            {/*                                             viewBox="0 0 16 16" width={20}*/}
            {/*                                             shapeRendering="geometricPrecision">*/}
            {/*                                            <path*/}
            {/*                                                d="M15.115 0H.885A.883.883 0 0 0 0 .885v14.23c0 .49.395.885.885.885h7.659V9.803h-2.09v-2.4h2.09V5.62c0-2.069 1.27-3.189 3.104-3.189.875 0 1.643.053 1.867.096v2.155h-1.291c-1.003 0-1.184.469-1.184 1.173v1.547h2.379l-.31 2.4H11.04V16h4.075c.49 0 .885-.395.885-.885V.885A.883.883 0 0 0 15.115 0z"*/}
            {/*                                                fillRule="evenodd"/>*/}
            {/*                                        </svg>*/}
            {/*                                    </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                            <div className="col s4">*/}
            {/*                                <div className="twitter">*/}
            {/*                                    <a >*/}
            {/*                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"*/}
            {/*                                             width={20} height={20} shapeRendering="geometricPrecision">*/}
            {/*                                            <path*/}
            {/*                                                d="M31.993 6.077c-1.177.523-2.44.876-3.77 1.033 1.355-.812 2.396-2.098 2.887-3.63-1.27.75-2.673 1.3-4.168 1.592C25.744 3.797 24.038 3 22.15 3c-3.626 0-6.563 2.938-6.563 6.563 0 .514.057 1.016.17 1.496C10.3 10.783 5.464 8.17 2.227 4.2c-.565.97-.89 2.098-.89 3.3 0 2.28 1.16 4.287 2.92 5.465-1.076-.035-2.088-.33-2.973-.82v.08c0 3.182 2.26 5.835 5.264 6.438-.55.15-1.13.23-1.73.23-.423 0-.833-.04-1.233-.117.834 2.606 3.26 4.504 6.13 4.558-2.245 1.76-5.075 2.81-8.15 2.81-.53 0-1.053-.03-1.566-.09C2.905 27.914 6.355 29 10.062 29c12.072 0 18.675-10 18.675-18.675 0-.284-.008-.568-.02-.85 1.283-.925 2.395-2.08 3.276-3.398z"/>*/}
            {/*                                        </svg>*/}
            {/*                                    </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                            <div className="col s4">*/}
            {/*                                <div className="google">*/}
            {/*                                    <a onClick={this.googleLogin}>*/}
            {/*                                        <svg id="social-gplus" viewBox="0 0 18 18" width={20}*/}
            {/*                                             height={20}>*/}
            {/*                                            <path*/}
            {/*                                                d="M6.4,8.1v2h2.8c-0.2,1.2-1.3,2.1-2.8,2.1c-1.7,0-3.1-1.5-3.1-3.2s1.4-3.2,3.1-3.2c0.8,0,1.5,0.3,2,0.8v0 l1.5-1.5C9,4.3,7.8,3.8,6.4,3.8C3.5,3.8,1.1,6.1,1.1,9s2.4,5.2,5.2,5.2c3,0,5-2.1,5-5.1c0-0.4,0-0.7-0.1-1.1H6.4z"/>*/}
            {/*                                            <polygon*/}
            {/*                                                points="15.4,8.2 15.4,6.8 14.2,6.8 14.2,8.2 12.8,8.2 12.8,9.4 14.2,9.4 14.2,10.9 15.4,10.9 15.4,9.4 16.9,9.4 16.9,8.2"/>*/}
            {/*                                        </svg>*/}
            {/*                                    </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>}*/}
            {/*                    <form className="form-register">*/}
            {/*                        <div className="mdc-typography--body2 text-center"*/}
            {/*                             style={{marginBottom: 8}}>*/}
            {/*                            {this.props.message ? "Looks like you already have an account. Please log in instead using Social Login" :*/}
            {/*                                "Looks like you already have an account. Please log in instead"*/}
            {/*                            }*/}
            {/*                        </div>*/}
            {/*                        {!this.props.message && <TextField name="password" label="Password"*/}
            {/*                                   type={isHidden ? 'password' : 'text'}*/}
            {/*                                   onChange={this.handleChange}*/}
            {/*                                   error={this.state.errors.password || this.props.error}*/}
            {/*                                   onClick={this.onIconClick} isHidden={isHidden}/>}*/}
            {/*                    </form>*/}


            {/*                    <div className="my2 text-center">*/}
            {/*                        <button className="mdc-button mdc-button--unelevated mdc-button--large" onClick={this.handleSubmit} disabled={this.validate()}*/}
            {/*                                style={{minWidth: '100%', fontSize: '17px'}}><span*/}
            {/*                            className="mdc-button__ripple"/> Continue*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                    <div className="my3">*/}
            {/*                        <div style={{*/}
            {/*                            fontSize: '15px',*/}
            {/*                            fontWeight: 500,*/}
            {/*                            textAlign: 'left',*/}
            {/*                            color: '#666',*/}
            {/*                            lineHeight: '24px'*/}
            {/*                        }}>*/}
            {/*                            <Link to="/reset-password">*/}
            {/*                                Forgot password?*/}
            {/*                            </Link>*/}
            {/*                        </div>*/}
            {/*                        <div style={{*/}
            {/*                            fontSize: '15px',*/}
            {/*                            fontWeight: 500,*/}
            {/*                            textAlign: 'left',*/}
            {/*                            color: '#666',*/}
            {/*                            lineHeight: '24px'*/}
            {/*                        }}>*/}
            {/*                            <Link to="/signup">*/}
            {/*                                Register*/}
            {/*                            </Link>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</main>*/}
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

export default withRouter(connect(mapStateToProps, {login, googleLogin, facebookLogin})(Welcome));

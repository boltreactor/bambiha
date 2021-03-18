import React, {Component, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import TextField from "../reusable-components/outlined-textfield";
import {connect} from 'react-redux';
import {resetPassword} from "../../actions/authentication";
import MessageSnackbar from "../reusable-components/messageSnackbar";
import Form from "../reusable-components/form";
import Joi from 'joi-browser';
import Textfield from "../reusable-components/material-io/textfield";

class ResetPassword extends Form {
    state = {
        data: {email: ""},
        errors: {}
    };
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
        })
    };
    doSubmit = event => {
        event.preventDefault();
        const email = this.state.data.email;
        this.props.resetPassword(email);
    };

    render() {
        return (
            <div>
                <div className="page">
                    <div className="page__content">
                        <div className="auth_master-form tc center">
                            {/* */}
                            <header className="pb4">
                                <a href="#" className="link-mute"><h5>KOMPASSERA</h5></a>
                            </header>
                            {/* */}
                            <div className="shadow-0 pa3 auth_page-auth">
                                <div className="mb4 mt3">
                                    <h4>Forgot your password</h4>
                                </div>
                                <div className="mb4 col">
                                    <form className="form-register">
                                        <Textfield name="email" label="Enter your registered email" type="email" autoFocus={true} onChange={this.handleChange}
                                               error={this.state.errors.email || this.props.error ? this.props.error_reset : null}/>
                                        <div className="mv2 pt3">
                                            <button className="btn btn-xl btn-primary btn-block text-white btn-shadow"
                                                    onClick={this.handleSubmit}>SUBMIT
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* */}
                            <div className="mt4" style={{fontSize: '.875rem'}}>
                                <span onClick={this.props.history.goBack}>

                                        <i
                                        className="material-icons-outlined v-mid mr1"
                                        style={{color: '#0258ff', fontSize: '15px'}}>arrow_back_ios</i>
                                        <span>Back to Login</span>

                                </span>
                            </div>
                            {/* */}
                            <div className="pv2 mb4">
                                <div className="flex items-center justify-center">
                                    ©
                                    <span className="mr2" style={{fontSize: '.875rem'}}>2021</span>
                                    <span className="dot"/>
                                    <a className="di mh2 fw4" style={{fontSize: '.875rem', color: '#576c77'}}
                                       title="Terms of Service" href="/terms-of-service" target="_blank">Terms of
                                        Service</a>
                                    <span className="dot"/>
                                    <a className="di mh2 fw4" style={{fontSize: '.875rem', color: '#576c77'}}
                                       title="Terms of Service" href="/privacy-policy" target="_blank">Privacy
                                        Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<main className="page page--grid">*/}
                {/*    <div className="page__wrapper">*/}
                {/*        {this.props.message &&*/}
                {/*        <MessageSnackbar show={true} msg={this.props.snackMsg}/>}*/}
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
                {/*                                        <a href="/">*/}
                {/*                                            KompassEra*/}
                {/*                                        </a>*/}
                {/*                                    </h2>*/}
                {/*                                    <p>*/}
                {/*                                        Forgot your password?*/}
                {/*                                    </p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <form className="form-register">*/}
                {/*                        /!* *!/*/}
                {/*                        <TextField name="email" label="Email" type="email" onChange={this.handleChange}*/}
                {/*                                   error={this.state.errors.email || this.props.error ? this.props.error_reset : null}/>*/}

                {/*                    </form>*/}
                {/*                    <div className="my2 text-center">*/}
                {/*                        <button className="mdc-button mdc-button--unelevated mdc-button--large"*/}
                {/*                                style={{minWidth: '100%', fontSize: '17px'}} disabled={this.validate()}*/}
                {/*                                onClick={this.handleSubmit}><span*/}
                {/*                            className="mdc-button__ripple"/> Send me reset password instructions*/}
                {/*                        </button>*/}
                {/*                    </div>*/}
                {/*                    <div className="my3">*/}
                {/*                        {!this.props.loginStatus &&*/}
                {/*                        <div style={{*/}
                {/*                            fontSize: '15px',*/}
                {/*                            fontWeight: 500,*/}
                {/*                            textAlign: 'left',*/}
                {/*                            color: '#666',*/}
                {/*                            lineHeight: '24px'*/}
                {/*                        }}>*/}
                {/*                            <Link to="/login">*/}
                {/*                                Sign in*/}
                {/*                            </Link>*/}
                {/*                        </div>}*/}
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
    message: state.authentication.message,
    snackMsg: state.authentication.snackMsg,
    error: state.authentication.error,
    loginStatus: state.authentication.loginStatus
});

export default withRouter(connect(mapStateToProps, {resetPassword})(ResetPassword));

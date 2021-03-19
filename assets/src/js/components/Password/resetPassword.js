import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {resetPassword} from "../../actions/authentication";
import Form from "../../reusable-components/form";
import Joi from 'joi-browser';
import Textfield from "../../reusable-components/material-io/textfield";

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
                                <a href="#" className="link-mute"><h5>Base App</h5></a>
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

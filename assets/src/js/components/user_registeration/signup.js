import React from 'react';
import {connect} from "react-redux";
import {clearAuthErrors, signup, socialLogin} from "../../actions/authentication";
import {Link, Redirect} from "react-router-dom";

import Joi from 'joi-browser';
import Form from "../../reusable-components/form";
import Textfield from "../../reusable-components/material-io/textfield";
import GoogleLoginCustom from "./googleLogin";
// import {LinkedIn} from 'react-linkedin-login-oauth2';
import FacebookLogin from 'react-facebook-login';
import LinkedInPage from "./linkedinLogin";


class Signup extends Form {

    linkedinSuccess = (response) => {
        console.log(response)
        // this.props.socialLogin({
        //   'platform': 'facebook',
        //   'name': response.name,
        //   'image': response.picture.data.url,
        //   'id': response.id,
        //   'email': response.email
        // }, this.props)
    }

    linkedinFailure = (response) => {
        console.log(response)

        // this.props.socialLogin({
        //   'platform': 'facebook',
        //   'name': response.name,
        //   'image': response.picture.data.url,
        //   'id': response.id,
        //   'email': response.email
        // }, this.props)
    }


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
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        },
        errors: {}
    };
    schema = {
        email: Joi.string().required().email().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.email":
                        return {message: "Enter a valid email"};
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
        }),
        first_name: Joi.string().required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "any.empty":
                        return {message: "First Name is required"};
                }
            })
        }),
        last_name: Joi.string().required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "any.empty":
                        return {message: "Last Name is required"};
                }
            })
        })
    };
    doSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: this.state.data.email,
            email: this.state.data.email,
            password: this.state.data.password,
            first_name: this.state.data.first_name,
            last_name: this.state.data.last_name
        };
        this.props.signup(user, this.props);
    };
    // googleLogin = () => {
    //   this.props.googleLogin();
    // };
    // facebookLogin = () => {
    //   this.props.facebookLogin();
    // };

    componentDidMount() {
        this.props.clearAuthErrors();
    }

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

                <div className="page">
                    <div className="page__content">
                        <div className="auth_master-form tc center">
                            {/* */}
                            <header className="pb4">
                                <Link to="#" className="link-mute"><h5>BAMBIHA</h5></Link>
                            </header>
                            {/* */}
                            <div className="shadow-0 pa3 auth_page-auth">
                                <div className="mb4 mt3">
                                    <h3>Create Your Free Account</h3>
                                </div>
                                <div className="mb4">
                                    <GoogleLoginCustom {...this.props} text={'SIGN UP WITH GOOGLE'}/>
                                </div>
                                <div className="mb4">
                                    <LinkedInPage {...this.props}/>
                                </div>
                                <div className="mb4">
                                    <FacebookLogin
                                        appId="214759983644946"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        callback={this.responseFacebook}/>
                                </div>
                                <div className="mb4 relative auth_divider">
                  <span className="auth_divider-text relative"
                        style={{paddingLeft: '.63rem', paddingRight: '.63rem'}}>or</span>
                                </div>
                                <div className="mb4 col">
                                    <form className="form-register">
                                        {/* */}
                                        <div className="row" style={{marginBottom: 0}}>
                                            <div className="col s6">
                                                <Textfield
                                                    value={this.state.data.first_name}
                                                    label="First Name"
                                                    name="first_name"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    error={this.state.errors.first_name}
                                                    autoFocus={true}/>
                                            </div>
                                            <div className="col s6">
                                                <Textfield
                                                    value={this.state.data.last_name}
                                                    name="last_name"
                                                    label="Last Name"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    error={this.state.errors.last_name}/>
                                            </div>
                                        </div>
                                        {/* */}

                                        <Textfield
                                            value={this.state.data.email}
                                            name="email"
                                            label="Email"
                                            type="email"
                                            onChange={this.handleChange}
                                            error={this.state.errors.email}/>
                                        {/* */}


                                        {/* */}
                                        <Textfield
                                            value={this.state.data.password}
                                            name="password"
                                            label="Password"
                                            type={isHidden ? 'password' : 'text'}
                                            onChange={this.handleChange}
                                            error={this.state.errors.password}
                                            onClick={this.onIconClick}
                                            isHidden={isHidden}
                                            changeHidden={this.changeHidden}
                                        />

                                        <div className="mv1">
                                            <p style={{fontSize: '.875rem'}}>By signing up, you agree to our <Link
                                                title="Terms of Service" to="/terms-of-service"
                                                target="_blank">Terms &amp; Conditions</Link></p>
                                        </div>
                                        {/* */}
                                        <div className="mv2 pt3">
                                            <button className="btn btn-xl btn-primary btn-block text-white btn-shadow"
                                                    onClick={this.handleSubmit}>
                                                CREATE ACCOUNT
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* */}
                            <div className="mv2" style={{fontSize: '.875rem'}}>
                                <p>Already have an account?
                                    <Link title="Sign up" to="/login"> Login</Link></p>
                            </div>
                            {/* */}
                            <div className="pv2 mb4">
                                <div className="flex items-center justify-center">
                                    ©
                                    <span className="mr2" style={{fontSize: '.875rem'}}>2021</span>
                                    <span className="dot"/>
                                    <Link className="di mh2 fw4" style={{fontSize: '.875rem', color: '#576c77'}}
                                          title="Terms of Service" to="/terms-of-service" target="_blank">Terms of
                                        Service</Link>
                                    <span className="dot"/>
                                    <Link className="di mh2 fw4" style={{fontSize: '.875rem', color: '#576c77'}}
                                          title="Terms of Service" to="/privacy-policy" target="_blank">Privacy
                                        Policy</Link>
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
    error: state.authentication.error,
    new_user: state.authentication.new_user
});

export default connect(mapStateToProps, {signup, socialLogin, clearAuthErrors})(Signup);

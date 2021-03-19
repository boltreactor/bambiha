import React from 'react';
import Form from "../../reusable-components/form";
import Joi from "joi-browser";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {changePassword, setChangePass} from "../../actions/authentication";

;
import NoLabelTextfield from "../../reusable-components/material-io/no-label-textfield";
import SettingsDrawer from "../../reusable-components/Drawers/Static/settings-drawer";
import SmartFooter from "../Footers/smart-footer";


class ChangePassword extends Form {
    componentDidMount() {
        // this.props.getUser();
        this.props.setChangePass("")

    }

    state = {
        isHidden: true,
        data: {
            re_new_password: "",
            new_password: "",
            current_password: ""
        },
        errors: {}
    };

    schema = {
        new_password: Joi.string().required().min(8).error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.min":
                        return {message: "Your password must contain 8 characters"};
                    case "any.empty":
                        return {message: "New Password is required"};
                }
            })
        }),
        current_password: Joi.string().required().min(8).error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.min":
                        return {message: "Your password must contain 8 characters"};
                    case "any.empty":
                        return {message: "Current password is required"};
                }
            })
        }),
        re_new_password: Joi.any().valid(Joi.ref('new_password')).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "any.allowOnly":
                        return {message: "Confirm password must match New password"};
                    case "any.empty":
                        return {message: "Confirm password is required"};
                }
            })
        })
    };

    doSubmit = event => {
        event.preventDefault();
        this.props.changePassword(this.state.data.re_new_password,
            this.state.data.new_password,
            this.state.data.current_password, this.props.user.email)
    };

    handleReNewPassword = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        if (input.value !== null && input.value !== "") {
            if (input.value !== this.state.data.new_password) {
                errors['re_new_password'] = "Verify password must match New Password"
            } else {
                errors['re_new_password'] = null
            }
        } else {
            errors['re_new_password'] = "Verify New Password is required"
        }
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors})
    };

    render() {
        debugger
        const {isHidden} = this.state;
        const {message, error_new, error_current} = this.props;
        return (

            <div>
                <div className="page my-page">


                    <div className="page__content">
                        {/* */}
                        <div className="main-wrapper">
                            {message &&
                            <div className="ui-paper ui-alert ui-alert--info my2" role="alert"
                                 style={{marginLeft: "7cm"}}>
                                <div className="ui-alert__icon">
                                    <i className="material-icons-outlined">info</i>
                                </div>
                                <div className="ui-alert__message">Your password has been changed successfully</div>
                                {/*
            <div class="ui-alert__action">
              <button class="button2 button2--icon" type="button" aria-label="Close">
                <i class="material-icons-outlined" style="color: #42444a;vertical-align: middle">close</i>
              </button>
            </div>
            */}   </div>}
                            <SettingsDrawer/>
                            {/* */}
                            <main className="main"
                                  style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>

                                <div className="container l">
                                    {/* */}
                                    <header className="mb4 db">
                                        <h1 className="bold">My Account</h1>
                                    </header>
                                    <div className="shadow border rounded-sm db pa3">
                                        <header className="mb4">
                                            <h3 className="bold">Change Password</h3>
                                        </header>
                                        {this.props.user && this.props.user.user_type === 1 ?
                                            <div className="w-50-l">
                                                <div className="mb3">
                                                    <NoLabelTextfield label="CURRENT PASSWORD" name="current_password"
                                                                      onChange={this.handleChange}
                                                                      error={this.state.errors.current_password || error_current}
                                                                      onClick={this.onIconClick}
                                                                      type={isHidden ? 'password' : 'text'}
                                                                      isHidden={isHidden}
                                                                      placeholder="Enter your current password"/>
                                                </div>
                                                <div className="mb3">
                                                    <NoLabelTextfield label="NEW PASSWORD" name="new_password"
                                                                      onChange={this.handleChange}
                                                                      error={this.state.errors.new_password || error_new}
                                                                      onClick={this.onIconClick}
                                                                      type={isHidden ? 'password' : 'text'}
                                                                      isHidden={isHidden}
                                                                      placeholder="Enter your new password"/>
                                                </div>
                                                <div className="mb3">
                                                    <NoLabelTextfield label="REPEAT NEW PASSWORD" name="re_new_password"
                                                                      onChange={this.handleReNewPassword}
                                                                      error={this.state.errors.re_new_password}
                                                                      onClick={this.onIconClick}
                                                                      type={isHidden ? "password" : 'text'}
                                                                      isHidden={isHidden}
                                                                      placeholder="Confirm your new password"/>
                                                </div>

                                                <div className="mt4 mb3">
                                                    <button className="btn btn-primary btn-lg"
                                                            disabled={this.validateUser()}
                                                            onClick={this.handleSubmit}>
                                                        UPDATE
                                                    </button>
                                                </div>
                                            </div> :
                                            <div className="w-80-l">You cannot change your password. You registered your
                                                account using Facebook/Google Authentication.</div>}

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
    message: state.authentication.change_pass,
    error_current: state.authentication.error_current,
    error_new: state.authentication.error_new,
    user: state.user.user
});

export default withRouter(connect(mapStateToProps, {changePassword, setChangePass})(ChangePassword));

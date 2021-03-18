import React from 'react';
import SimpleTextfield from "../../reusable-components/simple-textfield";
import Form from "../../reusable-components/form";
import Joi from "joi-browser";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {changePassword, setChangePass} from "../../actions/authentication";
import {getUser} from "../../actions/profile";
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
            //           <main className="page">
            //               {message &&
            //               <div className="ui-paper ui-alert ui-alert--info my2" role="alert">
            //                   <div className="ui-alert__icon">
            //                       <i className="material-icons-outlined">info</i>
            //                   </div>
            //                   <div className="ui-alert__message">Your password has been changed successfully</div>
            //                   {/*
            // <div class="ui-alert__action">
            //   <button class="button2 button2--icon" type="button" aria-label="Close">
            //     <i class="material-icons-outlined" style="color: #42444a;vertical-align: middle">close</i>
            //   </button>
            // </div>
            // */}
            //               </div>}
            //               {/*// <MessageSnackbar message="Your password has been changed successfully"/>}*/}
            //               <div className="page__content">
            //                   <div className="drawer-frame-adaptive">
            //                       <div className="drawer">
            //                           <div className="drawer__content-wrapper">
            //                               <div className="drawer__content-inner">
            //                                   <div className="drawer__content">
            //                                       <div className="mdc-drawer__content display-flex flex--column">
            //                                           <div className="flex__grow-1">
            //                                               <nav className="mdc-list" style={{marginTop: '16px'}}
            //                                                    data-mdc-auto-init="MDCList">
            //                                                   <Link to="/settings" className="mdc-list-item mdc-ripple-surface"
            //                                                         data-mdc-auto-init="MDCRipple">
            //                                                       <i className="material-icons-outlined mdc-list-item__graphic"
            //                                                          aria-hidden="true">account_circle</i>
            //                                                       Home
            //                                                   </Link>
            //                                                   <Link to="/settings/personal-info"
            //                                                         className="mdc-list-item mdc-ripple-surface"
            //                                                         data-mdc-auto-init="MDCRipple" aria-current="page">
            //                                                       <i className="material-icons-outlined mdc-list-item__graphic"
            //                                                          aria-hidden="true">contacts</i>
            //                                                       Personal info
            //                                                   </Link>
            //                                                   <Link to="/settings/security"
            //                                                         className="mdc-list-item mdc-list-item--activated mdc-ripple-surface"
            //                                                         data-mdc-auto-init="MDCRipple">
            //                                                       <i className="material-icons-outlined mdc-list-item__graphic"
            //                                                          aria-hidden="true">security</i>
            //                                                       Security
            //                                                   </Link>
            //                                                   <Link to="/settings/payments-&-payouts"
            //                                                         className="mdc-list-item mdc-ripple-surface"
            //                                                         data-mdc-auto-init="MDCRipple">
            //                                                       <i className="material-icons-outlined mdc-list-item__graphic"
            //                                                          aria-hidden="true">payment</i>
            //                                                       Payments & Payouts
            //                                                   </Link>
            //                                                   <Link to="/settings/notifications"
            //                                                         className="mdc-list-item mdc-ripple-surface"
            //                                                         data-mdc-auto-init="MDCRipple">
            //                                                       <i className="material-icons-outlined mdc-list-item__graphic"
            //                                                          aria-hidden="true">notifications</i>
            //                                                       Notifications
            //                                                   </Link>
            //                                                   <Link to="#" className="mdc-list-item mdc-ripple-surface"
            //                                                         data-mdc-auto-init="MDCRipple">
            //                                                       <i className="material-icons mdc-list-item__graphic"
            //                                                          aria-hidden="true">help_outline</i>
            //                                                       Help &amp; Support
            //                                                   </Link>
            //                                               </nav>
            //                                           </div>
            //                                           <footer>
            //                                               <Link to="#"> Privacy &amp; Terms </Link> .
            //                                               <Link to="#"> Help </Link>
            //                                           </footer>
            //                                       </div>
            //                                   </div>
            //                               </div>
            //                           </div>
            //                       </div>
            //                       <div className="content content--settings">
            //                           <div className="container">
            //                               <div className="container__content">
            //                                   <div className="content__header">
            //                                       <div className="text-center">
            //                                           <div className="mdc-typography--headline5"
            //                                                style={{margin: '24px auto 16px'}}>
            //                                               Security
            //                                           </div>
            //                                           <div className="mdc-typography--body1" style={{margin: '16px auto'}}>
            //                                               Settings and recommendations to help you keep your account secure
            //                                           </div>
            //                                       </div>
            //                                   </div>
            //                                   {this.props.message !== "" ?
            //                                       <div className="ui-paper ui-alert ui-alert--info my2" role="alert">
            //                                           <div className="ui-alert__icon">
            //                                               <i className="material-icons-outlined">info</i>
            //                                           </div>
            //                                           <div className="ui-alert__message">Your password has been changed.</div>
            //                                       </div> : null
            //                                   }
            //                                   <div className="content__body">
            //                                       <div className="mdc-layout-grid" style={{paddingTop: 0}}>
            //                                           <div className="mdc-layout-grid__inner">
            //                                               <div
            //                                                   className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
            //                                                   <div className="panel panel-default"
            //                                                        style={{paddingBottom: '16px', marginBottom: '24px'}}>
            //                                                       <div className="panel__content" style={{paddingBottom: '24px'}}>
            //                                                           <div className="mdc-typography--headline6 mb3">
            //                                                               Change your password
            //                                                           </div>
            //                                                           <div className="row mb0">
            //                                                               <div className="col col--no-spacing s12 m8"
            //                                                                    style={{paddingLeft: 0}}>
            //                                                                   <div className="mb2">
            //                                                                       <SimpleTextfield
            //                                                                           name="current_password"
            //                                                                           label="Current Password"
            //                                                                           type={isHidden ? 'password' : 'text'}
            //                                                                           onChange={this.handleChange}
            //                                                                           error={this.state.errors.current_password || error_current}
            //                                                                           onClick={this.onIconClick}
            //                                                                           isHidden={isHidden}/>
            //                                                                   </div>
            //                                                                   <div className="mb2">
            //                                                                       <SimpleTextfield
            //                                                                           name="new_password"
            //                                                                           value={this.state.data.new_password}
            //                                                                           label="New Password"
            //                                                                           type={isHidden ? 'password' : 'text'}
            //                                                                           onChange={this.handleChange}
            //                                                                           error={this.state.errors.new_password || error_new}
            //                                                                           onClick={this.onIconClick}
            //                                                                           isHidden={isHidden}/>
            //                                                                   </div>
            //                                                                   <div>
            //                                                                       <SimpleTextfield
            //                                                                           name="re_new_password"
            //                                                                           label="Verify Password"
            //                                                                           type={isHidden ? 'password' : 'text'}
            //                                                                           onChange={this.handleChange}
            //                                                                           value={this.state.data.re_new_password}
            //                                                                           error={this.state.errors.re_new_password}
            //                                                                           onClick={this.onIconClick}
            //                                                                           isHidden={isHidden}/>
            //                                                                   </div>
            //                                                               </div>
            //                                                               <div className="col col--no-spacing s12 m4">
            //                                                                   <div className="mdc-typography--body text-grey">
            //                                                                       Changing your password will sign you out of all
            //                                                                       your devices, including your phone.
            //                                                                   </div>
            //                                                                   <div className="mdc-typography--body">
            //                                                                       <Link to="#">Learn more</Link>
            //                                                                   </div>
            //                                                               </div>
            //                                                           </div>
            //                                                       </div>
            //                                                   </div>
            //                                               </div>
            //                                           </div>
            //                                       </div>
            //
            //                                       <div style={{padding: '16px 16px 24px 0', textAlign: 'right'}}>
            //                                           <button className="mdc-button mr3" onClick={this.props.history.goBack}><span
            //                                               className="mdc-button__ripple"/> Cancel
            //                                           </button>
            //                                           <button className="mdc-button mdc-button--unelevated"
            //                                                   disabled={this.validateUser()} onClick={this.handleSubmit}><span
            //                                               className="mdc-button__ripple"/> Update
            //                                           </button>
            //                                       </div>
            //                                   </div>
            //
            //                               </div>
            //                           </div>
            //                       </div>
            //                   </div>
            //               </div>
            //           </main>

            <div>
                <div className="page my-page">


                    <div className="page__content">
                        {/* */}
                        <div className="main-wrapper">
  {message &&
                          <div className="ui-paper ui-alert ui-alert--info my2" role="alert" style={{marginLeft: "7cm"}}>
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
                                        {this.props.user && this.props.user.user_type===1?
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
                                        </div>:
                                            <div className="w-80-l">You cannot change your password. You registered your account using Facebook/Google Authentication.</div>}

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

export default withRouter(connect(mapStateToProps, {changePassword, getUser, setChangePass})(ChangePassword));

import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {flogin, glogin, setLoginStatus} from "../../actions/authentication";
import {getUser, setUserInfo} from "../../actions/profile";
// import {LinkedInPopUp} from 'react-linkedin-login-oauth2';
// import LinkedInPage from '../../components/user_registeration/linkedinLogin'
import Notifications from "../../components/Settings/notifications";

import Home from '../../components/Landing/home';
import NotFound from '../../components/NotFound';
import Header from '../../components/Headers/Header';
import Signup from '../../components/user_registeration/signup';
import Login from "../../components/user_registeration/login";
import Logout from "../../components/user_registeration/logout";
import ResetPassword from "../../components/Password/resetPassword";
import ChangePassword from "../../components/Settings/changePassword";
import NewPassword from "../../components/Password/newPassword";
import WelcomeBack from "../../components/user_registeration/welcome";
import EditPersonalInfo from "../../components/PersonalInformation/editPersonalInfo";
import CheckEmail from "../../components/user_registeration/checkEmail";
import VerifyEmail from "../../components/user_registeration/verifyEmail";
import ResendEmail from "../../components/user_registeration/resendEmail";
import ResendPassword from "../../components/Password/resendPassword";
import ProtectedRoute from "../../components/protectedRoute";
import SettingHome from "../../components/Settings/home";
import Dashboard from "../../components/Dashboard/dashboard";
import Welcome from "../../components/welcome";
import Stripe from "../../components/Stripe/Card-Minimal";
import GeneralSettings from "../../components/Settings/general_settings";
import SocialLogins from "../../components/Settings/social-logins";
import MyProfile from "../../components/Settings/my-profile";
import ProductsBillings from "../../components/Settings/Product-Billings/products-&-billings";
import AddPayment from "../../components/Settings/Product-Billings/addPayment";
import AddPayout from "../../components/Settings/Product-Billings/addPayout";
import AddVat from "../../components/Settings/Product-Billings/addVAT";


class App extends Component {

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.setLoginStatus(true);
      this.props.getUser();
      this.props.setUserInfo(this.props.user);
    }
  }

  render() {
    return (
      <Fragment>
        <Header loginStatus={this.props.loginStatus}/>
        <Switch>
          {/*<Route path="/linkedin" exact component={LinkedInPopUp}/>*/}
          {/*<Route path="/linked" exact component={LinkedInPage}/>*/}
          <ProtectedRoute path='/stripe' render={(props) => <Stripe {...props}/>}/>
          {/*<ProtectedRoute path='/allcards' render={(props) => <AllCards {...props}/>}/>*/}
          <Route path='/signup' render={(props) => <Signup {...props}/>}/>
          <Route exact path='/' render={(props) => <Home {...props}/>}/>
          <Route path='/:state/:code&scope' render={(props) => <Home {...props}/>}/>
          <Route path='/login' render={(props) => <Login {...props}/>}/>
          <Route path='/reset-password' render={(props) => <ResetPassword {...props}/>}/>
          <ProtectedRoute exact path='/account-settings/change-password' render={(props) => <ChangePassword {...props}/>}/>
          <Route path='/new-password/:token' render={(props) => <NewPassword {...props}/>}/>
          <Route path='/welcome-back' render={(props) => <WelcomeBack {...props}/>}/>
          <Route exact path='/account-settings' render={(props) => <MyProfile{...props}/>}/>
          <Route exact path='/account-settings/general-settings' render={(props) => <GeneralSettings {...props}/>}/>
          <Route exact path='/account-settings/social-logins' render={(props) => <SocialLogins {...props}/>}/>
          <Route path='/create-payment' render={(props) => <AddPayment {...props}/>}/>
          <Route path='/create-payout' render={(props) => <AddPayout {...props}/>}/>
          <Route path='/create-vat' render={(props) => <AddVat {...props}/>}/>
          <Route exact path='/account-settings/product-and-billings' render={(props) => <ProductsBillings {...props}/>}/>
          <ProtectedRoute exact path='/settings/personal-info' render={(props) => <EditPersonalInfo {...props}/>}/>
          <ProtectedRoute exact path='/checkout' render={(props) => <Checkout {...props}/>}/>
          <ProtectedRoute path='/welcome' render={(props) => <Welcome {...props}/>}/>
          <Route path='/check-email' render={(props) => <CheckEmail {...props}/>}/>
          <Route path='/verify-email/:uid/:token' render={(props) => <VerifyEmail {...props}/>}/>
          <Route path='/resend/verify-email' render={(props) => <ResendEmail {...props}/>}/>
          <ProtectedRoute path='/logout' render={(props) => <Logout {...props}/>}/>
          <Route exact path='/resend/new-password' render={(props) => <ResendPassword {...props}/>}/>
          <Route exact path='/settings' render={(props) => <SettingHome{...props}/>}/>
          <ProtectedRoute exact path='/settings/notifications' render={(props) => <Notifications{...props}/>}/>
          <ProtectedRoute exact path='/dashboard' render={(props) => <Dashboard {...props}/>}/>
          <Route path='/not-found' component={NotFound}/>
          <Redirect to='/not-found'/>
        </Switch>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    user: state.user.user,
    loginStatus: state.authentication.loginStatus
});

export default withRouter(connect(mapStateToProps, {getUser, setUserInfo, glogin, flogin,setLoginStatus})(App));

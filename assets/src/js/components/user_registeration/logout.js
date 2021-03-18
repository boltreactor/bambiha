import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../actions/authentication";
import {useGoogleLogout} from 'react-google-login';

const clientId =
  '1069085399052-4rt4vtskuk35me0p4qoe2uas2cbjn9in.apps.googleusercontent.com';


class Logout extends Component {


  componentDidMount() {
    this.props.logout()
    // useGoogleLogout({
    //   clientId,
    //
    // });
  }

  render() {
    return null;

  }
}

const mapStateToProps = state => ({
  loginStatus: state.authentication.loginStatus
});

export default withRouter(connect(mapStateToProps, {logout})(Logout));
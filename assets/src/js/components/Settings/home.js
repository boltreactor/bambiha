import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addProfilePicture} from "../../actions/authentication";
// import StaticSettingsDrawer from "../../reusable-components/Drawers/Static/settings-drawer";
import {Link} from "react-router-dom";
import ContentFooter from "../Footers/content-footer";
import MessageSnackbar from "../../reusable-components/messageSnackbar";


class Home extends Component {

  doSubmit = (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("profile_image", e.target.files[0], e.target.files[0].name);
    fd.append("image_type", 'profile');
    this.props.addProfilePicture(fd, this.props);
  };

  render() {
    return (
      <div>
        <MessageSnackbar msg={this.props.msg} show={this.props.show}/>
        <main className="page">
          <div className="page__content">
            <div className="drawer-frame-adaptive">
              <StaticSettingsDrawer/>
              <div className="content content--settings">
                <div className="container">
                  <div className="container__content">
                    <div className="content__header">
                      <div className="display-flex align-items--center">
                        <div className="avatar avatar--xlarge">
                          {this.props.user && this.props.user.profile_image ?
                            <img src={this.props.user.profile_image}
                                 alt=""/> : this.props.user && this.props.user.first_name && this.props.user.first_name.slice(0, 1)}
                          <div className="avatar__cover">
                            <label htmlFor="user-profile-picture">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24}
                                   height={24} viewBox="0 0 24 24"
                                   style={{display: 'block', margin: '3px auto'}}>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path fill="#dbdbdc"
                                      d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"/>
                              </svg>
                            </label>
                          </div>
                        </div>
                        <input
                          type="file"
                          onChange={this.doSubmit}
                          accept=".jpg, .png, .jpeg"
                          id="user-profile-picture"
                          style={{display: 'none'}}/>
                      </div>
                      <div className="text-center">
                        <div className="mdc-typography--headline5"
                             style={{margin: '24px auto 16px', fontSize: '1.75rem'}}>
                          Welcome, <span>{this.props.user.first_name + " " + this.props.user.last_name}</span>
                        </div>
                        <div className="mdc-typography--body1" style={{margin: '16px auto'}}>
                          Manage your info, privacy, and security to make us work better for
                          you
                        </div>
                      </div>
                    </div>
                    <div className="content__body mb0">
                      <div className="row mb0">
                        <div className="col s12 m6 col--no-spacing">
                          <div className="panel panel-default mb3">
                            <div className="panel__content">
                              <div className="mdc-typography--headline6">
                                Personal info
                              </div>
                              <div className="display-flex pt2">
                                <div className="flex__grow-1 mdc-typography--label1">
                                  Basic info such as your name, photo and contact
                                  address
                                </div>
                                <div className="ml2">
                                  <img src="/static/personal-info-sm.png"
                                       alt=""/>
                                </div>
                              </div>
                            </div>
                            <div className="panel__footer">
                              <Link to="/settings/personal-info"
                                    className="link--mute blue">
                                Update personal info
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6 col--no-spacing">
                          <div className="panel panel-default mb3">
                            <div className="panel__content">
                              <div className="mdc-typography--headline6">
                                Review security settings
                              </div>
                              <div className="display-flex pt2">
                                <div className="flex__grow-1 mdc-typography--label1">
                                  Security settings and recommendations to help you
                                  keep your account secure
                                </div>
                                <div className="ml2">
                                  <img src="/static/security-sm.png"
                                       alt=""/>
                                </div>
                              </div>
                            </div>
                            <div className="panel__footer">
                              <Link to="/settings/security" className="link--mute blue">
                                Secure account
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6 col--no-spacing">
                          <div className="panel panel-default mb3">
                            <div className="panel__content">
                              <div className="mdc-typography--headline6">
                                Payments & Payouts
                              </div>
                              <div className="display-flex pt2">
                                <div className="flex__grow-1 mdc-typography--label1">
                                  Your payment & payout info, billing address, and
                                  balance
                                </div>
                                <div className="ml2">
                                  <img src="/static/pay-out-sm.png"
                                       alt=""/>
                                </div>
                              </div>
                            </div>
                            <div className="panel__footer">
                              <Link to="/settings/payments-&-payouts"
                                    className="link--mute blue">
                                Manage your payments & payouts
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6 col--no-spacing">
                          <div className="panel panel-default mb3">
                            <div className="panel__content">
                              <div className="mdc-typography--headline6">
                                Notifications
                              </div>
                              <div className="display-flex pt2">
                                <div className="flex__grow-1 mdc-typography--label1">
                                  A step-by-step guide that helps you choose your
                                  notifications settings
                                </div>
                                <div className="ml2">
                                  <img src="/static/switch-sm.png" alt=""/>
                                </div>
                              </div>
                            </div>
                            <div className="panel__footer">
                              <Link to="/settings/notifications" className="link--mute blue">
                                Get started
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__footer">
                      <div className="display-flex">
                        <div className="flex__grow-1 mdc-typography--body2">
                          Only you can see your settings. You might also want to review your
                          settings for Maps,
                          Search, or whichever services you use most. We keeps your data
                          private, safe, and secure.
                          <Link to="#">
                            Learn more
                          </Link>
                        </div>
                        <div style={{marginLeft: '16px'}}>
                          <i className="material-icons-outlined"
                             style={{color: '#1a72e8', fontSize: '36px'}}>security</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user.user,
  show: state.user.show,
  msg: state.user.msg
});

export default withRouter(connect(mapStateToProps, {addProfilePicture})(Home));

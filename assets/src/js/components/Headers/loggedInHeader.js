import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {addProfilePicture} from "../../actions/authentication";
import {getUser, toggleDrawers} from "../../actions/profile";
import SettingsHeader from "./settings-header";
import SettingsDrawer from "../../reusable-components/Drawers/Toggle/settings-drawer";
import DashboardDrawer from "../../reusable-components/Drawers/Toggle/dashboard-drawer";
import HomeDrawer from "../../reusable-components/Drawers/Toggle/home-drawer";

class LoggedInHeader extends Component {

  state = {
    open: false,
    hover: false
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.getUser();
    }
  }

  doImageSubmit = (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("profile_image", e.target.files[0], e.target.files[0].name);
    this.props.addProfilePicture(fd, this.props);
  };

  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  };
  selectDrawer = () => {
    if (this.props.location.pathname === ("/settings")) {
      return <SettingsDrawer/>
    } else if (this.props.location.pathname === ("/dashboard")) {
      return <DashboardDrawer/>
    } else {
      return <HomeDrawer/>
    }
  };

  render() {
    return (
      // <header className="mdc-top-app-bar mdc-top-app-bar--shadow js-mdc-top-app-bar mdc-top-app-bar--fixed"
      //         data-mdc-auto-init="MDCTopAppBar">
      //   <div className="mdc-top-app-bar__row container container--large">
      //     <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      //       <button
      //         className="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded js-trigger-mdc-drawer">menu
      //       </button>
      //       <Link to="/" className="mdc-top-app-bar__title">
      //         <span>Kompass</span><span>Era</span>
      //         <span style={{
      //           color: '#9aa0a6',
      //           fontSize: '9px',
      //           fontWeight: 300,
      //           marginTop: '36px'
      //         }}>BETA</span>
      //       </Link>
      //     </section>
      //     <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
      //
      //       <div className="mdc-top-app-bar__menu-item active hide-sm">
      //         <Link to="#" className="mdc-icon-button mdc-top-app-bar__action-item--unbounded"
      //            aria-label="Notifications">
      //                           <span className="material-icons badge badge--header"
      //                                 data-badge={1}>notifications_none</span>
      //         </Link>
      //       </div>
      //       <div className="mdc-top-app-bar__menu-item hide-sm">
      //         <Link to="/chatroom"
      //               className="mdc-icon-button material-icons-outlined mdc-top-app-bar__action-item--unbounded"
      //               aria-label="Dashboard">
      //           chat
      //         </Link>
      //       </div>
      //       <div className="mdc-top-app-bar__menu-item mdc-menu-dropdown">
      //         <Link
      //           className="avatar avatar--default mdc-top-app-bar__action-item--unbounded"
      //           aria-label="Bookmark this page">
      //           {this.props.user && this.props.user.profile_image ?
      //
      //             <img src={this.props.user.profile_image} height={50}
      //                  alt=""/> : this.props.user && this.props.user.first_name && this.props.user.first_name.slice(0, 1)}
      //         </Link>
      //         <div className="mdc-menu-surface--anchor">
      //           <div className="mdc-menu mdc-menu-surface mdc-menu-surface--pri" tabIndex={0}
      //                style={{minWidth: '240px'}}>
      //             <ul className="mdc-list" role="menu" aria-hidden="true">
      //               <Link to="/dashboard" className="link--mute">
      //                 <li className="mdc-list-item mdc-ripple-surface"
      //                     data-mdc-auto-init="MDCRipple" role="menuitem" tabIndex={-1}
      //                     style={{fontSize: '16px', fontWeight: 500}}>
      //                   <i className="material-icons-outlined">dashboard</i> Dashboard
      //                 </li>
      //               </Link>
      //
      //               <Link to="/settings" className="link--mute">
      //                 <li className="mdc-list-item mdc-ripple-surface"
      //                     data-mdc-auto-init="MDCRipple" role="menuitem" tabIndex={-1}
      //                     style={{fontSize: '16px', fontWeight: 500}}>
      //                   <i className="material-icons-outlined">settings</i> Settings
      //                 </li>
      //               </Link>
      //               <Link to="/logout" className="link--mute">
      //                 <li className="mdc-list-item mdc-ripple-surface"
      //                     data-mdc-auto-init="MDCRipple" role="menuitem" tabIndex={-1}
      //                     style={{fontSize: '16px', fontWeight: 500}}>
      //                   <i className="material-icons-outlined">exit_to_app</i> Sign out
      //                 </li>
      //               </Link>
      //               <li role="separator" className="mdc-list-divider hide-sm"/>
      //               <Link to="#" className="link--mute text-center hide-sm">
      //                 <button className="mdc-button mdc-button--large mdc-button--unelevated"
      //                         style={{margin: '16px 24px'}}><span className="mdc-button__ripple"/>
      //                   Become a member
      //                 </button>
      //               </Link>
      //             </ul>
      //           </div>
      //         </div>
      //       </div>
      //     </section>
      //   </div>
      // </header>
     <SettingsHeader/>
    );

  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default withRouter(connect(mapStateToProps, {getUser, toggleDrawers, addProfilePicture})(LoggedInHeader));

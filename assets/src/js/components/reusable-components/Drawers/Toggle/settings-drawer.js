import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import Drawer, {DrawerContent, DrawerHeader} from "@material/react-drawer";
import {connect} from "react-redux";
import {toggleDrawers} from "../../../actions/profile";


class SettingsDrawer extends Component {
  render() {
    if (this.props.toggleDrawer) {
      return (
          <Drawer
              modal
              open={this.props.toggleDrawer}
          >
            <DrawerHeader>
              <div className="mdc-drawer__header">
                <div className="display-flex">
                  <div className="flex__grow-1">
                    <Link to="/" className="mdc-drawer__title link--mute">
                      <span style={{color: "mdc-theme-text-on-primary-light"}}>Vital</span><span style={{color: "mdc-theme-secondary"}}>Memos</span>
                      <span style={{color: "mdc-theme-text-on-primary-light", fontSize: 9 + "px", fontWeight: 300, marginTop: 36 + "px"}}>BETA</span>
                    </Link>
                  </div>
                  <div style={{"marginTop": 8 + "px"}}>
                    <button className="mdc-icon-button material-icons js-close-drawer" onClick={() => {
                      this.props.toggleDrawers(false)
                    }}>close
                    </button>
                  </div>
                </div>
              </div>
            </DrawerHeader>
            <DrawerContent>
              <div className="mdc-drawer__content display-flex flex--column">
                <nav className="mdc-list" style={{marginTop: 16 + "px"}} data-mdc-auto-init="MDCList">
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/settings">
                    <i className="material-icons-outlined mdc-list-item__graphic" aria-hidden="true">account_circle</i>
                    Home
                  </Link>
                  <Link className="mdc-list-item mdc-list-item--activated mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/settings/personal-info" aria-current="page">
                    <i className="material-icons-outlined mdc-list-item__graphic" aria-hidden="true">contacts</i>
                    Personal info
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="#">
                    <i className="material-icons-outlined mdc-list-item__graphic" aria-hidden="true">security</i>
                    Security
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/privacy">
                    <i className="material-icons-outlined mdc-list-item__graphic" aria-hidden="true">people</i>
                    People & sharing
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/payment">
                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">credit_card</i>
                    Payments & subscription
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/help">
                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">help_outline</i>
                    Help & Support
                  </Link>
                </nav>
                <footer>
                  <Link to="/privacy"> Privacy & Terms </Link> .
                  <Link to="/help"> Help </Link>
                </footer>
              </div>
              <div className="mdc-drawer-scrim js-close-drawer"/>
            </DrawerContent>
          </Drawer>
      );
    }
    {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  toggleDrawer: state.authentication.toggleDrawer
});

export default withRouter(connect(mapStateToProps, {toggleDrawers})(SettingsDrawer));

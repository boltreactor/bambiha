import React, {Component, Fragment} from "react";
import Drawer, {DrawerContent, DrawerHeader} from "@material/react-drawer";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {toggleDrawers} from "../../../../actions/profile";


class HomeDrawer extends Component {
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
                <nav className="mdc-list flex__grow-1" style={{marginTop: 16 + "px"}} data-mdc-auto-init="MDCList">
                  <Link className="mdc-list-item mdc-list-item--activated mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/dashboard" tabIndex="-1" aria-selected="true">
                    <i className="material-icons-outlined  mdc-list-item__graphic" aria-hidden="true">dashboard</i>
                    Home
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/dasboard/insights" tabIndex="-1" aria-selected="true">
                    <i className="material-icons-outlined mdc-list-item__graphic" aria-hidden="true">bar_chart</i>
                    Insights
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/dashboard/messages" tabIndex="-1" aria-selected="true">
                    <i className="material-icons-outlined mdc-list-item__graphic" aria-hidden="true">message</i>
                    Messaging
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/dashboard/reviews" tabIndex="-1" aria-selected="true">
                    <i className="material-icons-outlined mdc-list-item__graphic" aria-hidden="true">rate_review</i>
                    Reviews
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/settings" tabIndex="-1" aria-selected="true">
                    <i className="material-icons-outlined mdc-list-item__graphic" aria-hidden="true">settings</i>
                    Settings
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/support" tabIndex="-1" aria-selected="true">
                    <i className="material-icons-outlined mdc-list-item__graphic" aria-hidden="true">help_outline</i>
                    Support
                  </Link>
                </nav>
                <footer>
                  <Link to="#"> Privacy & Terms </Link> .
                  <Link to="#"> Help </Link>
                </footer>
              </div>
              < div className="mdc-drawer-scrim js-close-drawer"/>
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

export default withRouter(connect(mapStateToProps, {toggleDrawers})(HomeDrawer));

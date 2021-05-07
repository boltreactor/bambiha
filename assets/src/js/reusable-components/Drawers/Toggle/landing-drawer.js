import React, {Component, Fragment} from 'react';
import Drawer, {DrawerContent, DrawerHeader} from "@material/react-drawer";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {toggleDrawers} from "../../../actions/profile";
import SettingsDrawer from "./settings-drawer";
import DashboardDrawer from "./dashboard-drawer";
import HomeDrawer from "./home-drawer";

class LandingDrawer extends Component {
  handleDrawerClose = () => {
    this.props.toggleDrawers(false)
  };

  render() {
    if (this.props.toggleDrawer) {
      return (
        <ClickAwayListener onClickAway={this.handleDrawerClose}>
          <Drawer style={{zIndex:"9999"}}modal open={this.props.toggleDrawer}>
            <DrawerHeader>
            <header className="mdc-drawer__header">
                            <div className="flex">
                                <div className="flex-grow-1">
                                    <Link href="#" className="mdc-drawer__title">
                                        <span className="tracked-l tracked-m">BAMBIHA</span>
                                    </Link>
                                </div>
                                <div className="mt1">
                                    <button className="mdc-icon-button material-icons js-close-drawer" onClick={() => {
                                        this.props.toggleDrawers(false)
                                    }}>close
                                    </button>
                                </div>
                            </div>
                        </header>
            </DrawerHeader>
            <DrawerContent>
              <div className="mdc-drawer__content display-flex flex--column">
                <nav className="mdc-list flex__grow-1" style={{marginTop: 16 + "px"}} data-mdc-auto-init="MDCList">
                  <Link className="mdc-list-item mdc-list-item--activated mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/" tabIndex="-1" aria-selected="true">
                    Home
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/signup" tabIndex="-1" aria-selected="true">
                    Sign up
                  </Link>
                  <Link className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" to="/login" tabIndex="-1" aria-selected="true">
                    Log in
                  </Link>

                </nav>
                <footer>
                  <Link to="#"> Privacy & Terms </Link> .
                  <Link to="#"> Help </Link>
                </footer>
              </div>
              <div className="mdc-drawer-scrim js-close-drawer"/>
            </DrawerContent>
          </Drawer>
        </ClickAwayListener>
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

export default withRouter(connect(mapStateToProps, {toggleDrawers})(LandingDrawer));

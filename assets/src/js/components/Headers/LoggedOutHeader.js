import React, {Component, Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {toggleDrawers} from "../../actions/profile";
import LandingDrawer from "../../reusable-components/Drawers/Toggle/landing-drawer";
import {connect} from "react-redux";


class LoggedOutHeader extends Component {

  render() {
    return (
      <Fragment>
        <header className="mdc-top-app-bar mdc-top-app-bar--shadow" data-mdc-auto-init="MDCTopAppBar">
          {/*<div className="mdc-top-app-bar__row">*/}
          {/*  <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">*/}
          {/*    <button className="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded js-trigger-mdc-drawer" onClick={() => {*/}
          {/*      this.props.toggleDrawers(true)*/}
          {/*    }}>menu*/}
          {/*    </button>*/}
          {/*    <Link to="/" className="mdc-top-app-bar__title" style={{color: "#9aa0a6"}}>*/}
          {/*      <span style={{color: "mdc-theme-text-on-primary-light"}}>Wed</span><span style={{color: "#9aa0a6"}}>Kompass</span>*/}
          {/*      <span style={{color: "mdc-theme-text-on-primary-light", fontSize: 9 + "px", fontWeight: 300, marginTop: 36 + "px"}}>BETA</span>*/}
          {/*    </Link>*/}
          {/*  </section>*/}
          {/*  <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end get-started">*/}
          {/*    <Link to="/help" className="mdc-top-app-bar__action-item--unbounded" aria-label="Help">Help</Link>*/}
          {/*    <Link to="/signup" className="mdc-top-app-bar__action-item--unbounded" aria-label="Sign up">Sign up</Link>*/}
          {/*    <Link to="/login" className="mdc-top-app-bar__action-item--unbounded" aria-label="Log in">Log in</Link>*/}
          {/*  </section>*/}
          {/*</div>*/}


          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <button className="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded js-trigger-mdc-drawer" onClick={() => {
                this.props.toggleDrawers(true)
              }}>menu
              </button>
              <Link to="/" className="mdc-top-app-bar__title">
                <span>Kompass</span><span>Era</span>
                {/*<span style={{color: '#9aa0a6', fontSize: '9px', fontWeight: 300, marginTop: '36px'}}>BETA</span>*/}
              </Link>
            </section>
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end get-started">
              <div className="mh2">
                <Link to="/login" className="mdc-top-app-bar__action-item link--mute text-muted" aria-label="Log in">Sign in</Link>
              </div>
              <div className="mh2">
                <Link to="/signup" className="mdc-top-app-bar__action-item text-muted" aria-label="Sign up">
                  <button className="mdc-button mdc-button--large mdc-button--unelevated"><span className="mdc-button__ripple"/>
                    Register
                  </button>
                </Link>
              </div>
            </section>
          </div>

        </header>
        <LandingDrawer/>

      </Fragment>
    );
  }
}


export default withRouter(connect(null, {toggleDrawers})(LoggedOutHeader));
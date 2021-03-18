import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';


class WelcomeHeader extends Component {
    render() {
        return (
            <header className="mdc-top-app-bar" data-mdc-auto-init="MDCTopAppBar" style={{borderBottom: '1px solid #ededed'}}>
        <div className="mdc-top-app-bar__row container container--large">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <Link to="/" className="mdc-top-app-bar__title">
              <span>Kompass</span><span>Era</span>
              <span style={{color: '#9aa0a6', fontSize: '9px', fontWeight: 300, marginTop: '36px'}}>BETA</span>
            </Link>
          </section>
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end get-started__">
            <div className="mdc-top-app-bar__menu-item">
              <Link to="/logout" className="mdc-top-app-bar__action-item--unbounded" aria-label="Sign out">Sign out</Link>
            </div>
          </section>
        </div>
      </header>
        );
    }
}

export default withRouter(WelcomeHeader);
import React, {Component, Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";

class TopAppBar extends Component {
    render() {
        return (
            <div>
                 {/* Primary top app bar */}
      <header className="mdc-top-app-bar mdc-top-app-bar--shadow__ mdc-top-app-bar--fixed js-top-app-bar" data-mdc-auto-init="MDCTopAppBar" style={{zIndex: 1000}}>
        {/* Brand top app bar */}
        <nav className="show-lg" style={{display: 'none'}}>
          <div className="flex justify-between bg-space-gray contain-full-bleed">
            <div className="flex items-center pt2 pb2" style={{paddingLeft: '12px'}} title="Eco-friendly">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#00401A" enableBackground="new 0 0 24 24" height={24} viewBox="0 0 24 24" width={24}>
                <g>
                  <rect fill="none" height={24} width={24} />
                </g>
                <g>
                  <g>
                    <path d="M6.05,8.05c-2.73,2.73-2.73,7.15-0.02,9.88c1.47-3.4,4.09-6.24,7.36-7.93c-2.77,2.34-4.71,5.61-5.39,9.32 c2.6,1.23,5.8,0.78,7.95-1.37C19.43,14.47,20,4,20,4S9.53,4.57,6.05,8.05z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex-grow pa0 flex items-center links--muted">
              <Link className="f7 mr1 mr4-ns link-mute link-dark" to="#0">Help</Link>
              <span className="mr1 mr4-ns">|</span>
              <Link className="f7 dib mr2 mr3-ns link-mute link-dark" to="#0">
                Hi BOLT
              </Link>
            </div>
            {/*
      <div class="flex-grow pa0 flex items-center links--muted">
        <a class="f7 mr2 mr4-ns link-mute link-dark" href="#0">Help</a>
        <a class="f7 dib mr2 mr4-ns link-mute link-dark" href="#0">Join Us</a>
        <a class="f7 dib mr2 mr3-ns link-mute link-dark" href="#0">Sign In</a>
      </div>
      */}
          </div>
        </nav>
        {/* Primary top app bar */}
        <div className="mdc-top-app-bar__row contain-full-bleed links--muted ">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button dn-l js-trigger-mdc-drawer" aria-label="Open navigation menu">menu</button>
            <Link to="/e-store" className="mdc-top-app-bar__title"><span className="tracked">BAMBIHA</span></Link>
          </section>
          <section className="mdc-top-app-bar__section app-shop mdc-top-app-bar__section--align-center" role="toolbar">
            <Link to="/new" className="show-lg link-mute">
              <button className="mdc-button mdc-top-app-bar__action-item round">
                <span className="mdc-button__ripple" />
                <span className="mdc-button__label">New Release</span>
              </button>
            </Link>
            <Link to="/men" className="show-lg link-mute">
              <button className="mdc-button mdc-top-app-bar__action-item round">
                <span className="mdc-button__ripple" />
                <span className="mdc-button__label">Men</span>
              </button>
            </Link>
            <Link to="/women" className="show-lg link-mute">
              <button className="mdc-button mdc-top-app-bar__action-item round">
                <span className="mdc-button__ripple" />
                <span className="mdc-button__label">Women</span>
              </button>
            </Link>
            <Link to="/kids" className="show-lg link-mute">
              <button className="mdc-button mdc-top-app-bar__action-item round">
                <span className="mdc-button__ripple" />
                <span className="mdc-button__label">Kids</span>
              </button>
            </Link>
            <Link to="/custom" className="show-lg link-mute">
              <button className="mdc-button mdc-top-app-bar__action-item round">
                <span className="mdc-button__ripple" />
                <span className="mdc-button__label">Custom</span>
              </button>
            </Link>
            <Link to="/sale" className="show-lg link-mute">
              <button className="mdc-button mdc-top-app-bar__action-item round">
                <span className="mdc-button__ripple" />
                <span className="mdc-button__label">Sale</span>
              </button>
            </Link>
            {/*<button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button dn-l js-trigger-mdc-drawer" aria-label="Open navigation menu">menu</button>*/}
          </section>
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <div>
              <div className="sec-dropdown right">
                <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
                <div className="dropdown-wrapper quick-search">
                  <div className="content">
                  </div>
                </div>
              </div>
            </div>
            <Link to="/cart">
              <button className="material-icons-outlined mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite_border</button>
            </Link>
            <div>
              <div className="pri-dropdown right">
                <button className="material-icons-outlined mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">shopping_cart</button>
                <div className="dropdown-wrapper">
                  <div className="content s">
                  </div>
                </div>
              </div>
            </div>
            {/*
      <a href="#" class="show-lg">
        <button class="mdc-button mdc-top-app-bar__action-item round">
          <span class="mdc-button__ripple"></span>
          <span class="mdc-button__label">Help</span>
        </button>
      </a>
      <a href="#" class="show-lg">
        <button class="mdc-button mdc-top-app-bar__action-item round">
          <span class="mdc-button__ripple"></span>
          <span class="mdc-button__label">Log in</span>
        </button>
      </a>
      <a href="#" class="show-lg">
        <button class="mdc-button mdc-top-app-bar__action-item round">
          <span class="mdc-button__ripple"></span>
          <span class="mdc-button__label">Sign up</span>
        </button>
      </a>
      */}
            {/*<button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button dn-l js-trigger-mdc-drawer" aria-label="Open navigation menu">menu</button>*/}
          </section>
        </div>
      </header>
            </div>
        );
    }
}
export default withRouter(TopAppBar);

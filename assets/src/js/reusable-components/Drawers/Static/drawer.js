import React, {Component, Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";

class Drawer extends Component {
    render() {
        return (
            <div>
        <aside className="mdc-drawer mdc-drawer--modal js-mdc-drawer">
          <header className="mdc-drawer__header">
            <div className="flex">
              <div className="flex-grow-1">
                <Link to="#" className="mdc-drawer__title">
                  <span className="tracked-l tracked-m" style={{fontSize: '1.25rem'}}>BAMBIHA</span>
                </Link>
              </div>
              <div className="mt1">
                <button className="mdc-icon-button material-icons js-close-drawer">close</button>
              </div>
            </div>
          </header>
          <div className="mdc-drawer__content flex flex-column">
            <aside className="side-menu-panel hide-scrollbar">
              <div className="ph3">
                <ul className="side-menu app-shop pl0 pb4">
                  <li className="item">
                    <Link className="db text-decoration-none fw7" to="#">
                      <span>New Release</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none fw7" to="#">
                      <span>Men</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none fw7" to="#">
                      <span>Women</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none fw7" to="#">
                      <span>Kids</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none fw7" to="#">
                      <span>Custom</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none fw7" to="#">
                      <span>Sale</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none" to="#">
                      <i className="material-icons-outlined v-mid mr2">favorite_border</i>
                      <span>Favorites</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none" to="#">
                      <i className="material-icons-outlined v-mid mr2">shopping_bag</i>
                      <span>Bag</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none" to="#">
                      <i className="material-icons-outlined v-mid mr2">shopping_cart</i>
                      <span>Orders</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none" to="#">
                      <i className="material-icons-outlined v-mid mr2">help_outline</i>
                      <span>Help</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </aside>
        <div className="mdc-drawer-scrim js-close-drawer" />
      </div>
        );
    }
}
export default withRouter(Drawer);

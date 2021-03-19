import React, {Component, Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";


class DrawerDashboard extends Component {
    render() {
        return (
            <div>
        <aside className="mdc-drawer mdc-drawer--modal js-mdc-drawer">
          <header className="mdc-drawer__header">
            <div className="flex">
              <div className="flex-grow-1">
                <Link to="#" className="mdc-drawer__title">
                  <span className="tracked-l tracked-m">BAMBIHA</span>
                </Link>
              </div>
              <div className="mt1">
                <button className="mdc-icon-button material-icons js-close-drawer">close</button>
              </div>
            </div>
          </header>
          <div className="mdc-drawer__content flex flex-column">
            {/* Dashboard */}
            <aside className="side-menu-panel hide-scrollbar">
              <div className="ph3">
                <ul className="side-menu pl0 pb4">
                  <li className="item item-active">
                    <Link className="db text-decoration-none" to="#">
                      <i className="material-icons-outlined v-mid mr2">home</i>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none" to="#">
                      <i className="material-icons-outlined v-mid mr2">shopping_basket</i>
                      <span>Orders</span>
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
                      <i className="material-icons-outlined v-mid mr2">add_shopping_cart</i>
                      <span>Continue Shopping</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="db text-decoration-none" to="#">
                      <i className="material-icons-outlined v-mid mr2">live_help</i>
                      <span>Help &amp; Support</span>
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
export default withRouter(DrawerDashboard);

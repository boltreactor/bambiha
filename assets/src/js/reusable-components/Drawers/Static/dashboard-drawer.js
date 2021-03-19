import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class DashboardDrawer extends Component {
    render() {
        return (
             <aside className="side-menu-panel hide-scrollbar">
              <div className="ph3">
                <ul className="side-menu pl0 pb4">
                  <li className="item">
                    <NavLink className="db text-decoration-none" exact activeClassName="item-active" to="/dashboard">
                      <i className="material-icons-outlined v-mid mr2">home</i>
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li className="item">
                    <NavLink className="db text-decoration-none" exact activeClassName="item-active" to="orders">
                      <i className="material-icons-outlined v-mid mr2">shopping_basket</i>
                      <span>Orders</span>
                    </NavLink>
                  </li>
                  <li className="item">
                    <NavLink className="db text-decoration-none"  exact activeClassName="item-active" to="/favorites">
                      <i className="material-icons-outlined v-mid mr2">favorite_border</i>
                      <span>Favorites</span>
                    </NavLink>
                  </li>
                  <li className="item">
                    <NavLink className="db text-decoration-none" exact activeClassName="item-active"  to="/">
                      <i className="material-icons-outlined v-mid mr2">add_shopping_cart</i>
                      <span>Continue Shopping</span>
                    </NavLink>
                  </li>
                  <li className="item">
                    <NavLink className="db text-decoration-none" exact activeClassName="item-active"  to='/help&Support'>
                      <i className="material-icons-outlined v-mid mr2">live_help</i>
                      <span>Help & Support</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </aside>
        );
    }
}

export default DashboardDrawer;
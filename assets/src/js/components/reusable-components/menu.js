import React, {Component} from 'react';
import Menu from '@material/react-menu';
import {Link} from "react-router-dom";

class Menus extends Component {
  state = {
    open: true
  };

  render() {

    return (
        <Menu
            open={this.props.hover}
            style={{
              transformOrigin: "right top",
              right: 0,
              top: 60
            }}
        >
          <ul className="mdc-list" role="menu" aria-hidden="true" data-mdc-auto-init="MDCList">
            <Link to="/messages">
              <li className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" role="menuitem" tabIndex="0">Messages</li>
            </Link>
            <Link to="/settings/notifications">
              <li className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" role="menuitem" tabIndex="-1">Notifications
                <div className="has-notifications" aria-label="Has notifications"/>
              </li>
            </Link>
            <Link to="/bookings">
              <li className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" role="menuitem" tabIndex="-1">Bookings</li>
            </Link>
            <Link to="/saved">
              <li className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" role="menuitem" tabIndex="-1">Saved</li>
            </Link>
            <Link to="#">
              <li className="mdc-list-divider" role="separator"/>
            </Link>
            <Link to="/settings/personal-info">
              <li className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" role="menuitem" tabIndex="-1">Account</li>
            </Link>
            <Link to="/help">
              <li className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" role="menuitem" tabIndex="-1">Help</li>
            </Link>
            <Link to="/logout">
              <li className="mdc-list-item mdc-ripple-surface" data-mdc-auto-init="MDCRipple" role="menuitem" tabIndex="-1">Log out</li>
            </Link>
          </ul>
          {/*<MenuList>*/}
          {/*  <MenuListItem>*/}
          {/*    <Link to="/settings" style={{color: "inherit", textDecoration: 'none'}}><MenuListItemText primaryText="Settings"/></Link>*/}
          {/*  </MenuListItem>*/}
          {/*  <MenuListItem>*/}
          {/*    <Link to="/logout" style={{color: "inherit", textDecoration: 'none'}}><MenuListItemText primaryText="Logout"/></Link>*/}
          {/*  </MenuListItem>*/}

          {/*</MenuList>*/}
        </Menu>
    );
  }
}

export default Menus;
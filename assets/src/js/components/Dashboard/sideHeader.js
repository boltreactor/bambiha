import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link, withRouter} from 'react-router-dom';
import MessageSnackbar from "../../reusable-components/messageSnackbar";

class SideHeader extends Component {
  state = {}


  render() {
    return (
      <aside className="side-menu-panel hide-scrollbar">
        <div className="ph3">
          <ul className="side-menu pl0 pb4">
            <li  className={this.props.activeClass === "home" ? "item item-active" : "item"}>
              <Link className="db text-decoration-none" to="/dashboard">
                <i className="material-icons-outlined v-mid mr2">home</i>
                <span>Home</span>
              </Link>
            </li>
            <li className={this.props.activeClass === "listings" ? "item item-active" : "item"}>
              <Link className="db text-decoration-none" to="/dashboard/listings">
                <i className="material-icons-outlined v-mid mr2">group</i>
                <span>My Listings</span>
              </Link>
            </li>
            <li className="item">
              <Link className="db text-decoration-none" to="#">
                <i className="material-icons-outlined v-mid mr2">payment</i>
                <span>Payments</span>
              </Link>
            </li>
            <li className="item">
              <Link className="db text-decoration-none" to="#">
                <i className="material-icons-outlined v-mid mr2">chat</i>
                <span>Messenger</span>
              </Link>
            </li>
            <li className="item">
              <Link className="db text-decoration-none" to="#">
                <i className="material-icons-outlined v-mid mr2">today</i>
                <span>Booking</span>
              </Link>
            </li>
            <li className="item">
              <Link className="db text-decoration-none" to="#">
                <i className="material-icons-outlined v-mid mr2">emoji_events</i>
                <span>Reviews</span>
              </Link>
            </li>
            <li className="item">
              <Link className="db text-decoration-none" to="#">
                <i className="material-icons-outlined v-mid mr2">place</i>
                <span>Placement</span>
              </Link>
            </li>
            <li className="item">
              <Link className="db text-decoration-none" to="#">
                <i className="material-icons-outlined v-mid mr2">important_devices</i>
                <span>Sites</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>


    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps, {})(SideHeader);

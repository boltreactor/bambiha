import React, {Component, Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";

class StoreDrawer extends Component {
    render() {
        return (

        <aside className="side-menu-panel hide-scrollbar">
        <div className="ph3">
          <h4 className="mv3 pt5">New Release (123)</h4>
          <ul className="store-categories">
            <Link to="#" className="link-mute">
              <li>Shoes</li>
            </Link>
            <Link to="#" className="link-mute">
              <li>Sports Bags</li>
            </Link>
            <Link to="#" className="link-mute">
              <li>Tracksuits</li>
            </Link>
            <Link to="#" className="link-mute">
              <li>Socks</li>
            </Link>
            <Link to="#" className="link-mute">
              <li>Base layer</li>
            </Link>
            <Link to="#" className="link-mute">
              <li>Pants</li>
            </Link>
            <Link to="#" className="link-mute">
              <li>Tights</li>
            </Link>
            <Link to="#" className="link-mute">
              <li>Jumpsuits</li>
            </Link>
            <Link to="#" className="link-mute">
              <li>Surf & Swimwear</li>
            </Link>
            <Link to="#" className="link-mute">
              <li>Accessories & Equipment</li>
            </Link>
          </ul>
        </div>
      </aside>
        );
    }
}
export default withRouter(StoreDrawer);

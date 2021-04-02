import React, {Component, Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import { getHeaderCategories} from "../../../actions/admin";
import {connect} from "react-redux";


class StoreDrawer extends Component {

    componentDidMount() {

        this.props.getHeaderCategories();

    }



    render() {
        return (

      <aside className="side-menu-panel hide-scrollbar">
        <div className="ph3">
          <h4 className="mv3 pt5">New Release</h4>
          <ul className="store-categories">
            {this.props.header_categories && this.props.header_categories.map(cat => {
              return <div key={cat.id}>
                       <Link to={`/category/${cat.id}`} className="link-mute">
                          <li>{cat.name}</li>
                       </Link>
                </div>
            })}
          </ul>
        </div>
      </aside>
        );
    }
}

const mapStateToProps = state => ({
    header_categories: state.admin.header_categories
});


export default withRouter(connect(mapStateToProps, {getHeaderCategories})(StoreDrawer));

import React, {Component} from "react";
import {Link, withRouter} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <aside className="side-menu-panel hide-scrollbar">
                <div className="ph3">
                    <ul className="side-menu pl0 pb4">
                        <li className={this.props.location.pathname === ("/admin") ? "item item-active" : "item"}>
                            <Link className="db text-decoration-none" to="/admin">
                                <i className="material-icons-outlined v-mid mr2">home</i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className={this.props.location.pathname === ("/admin/users") ? "item item-active" : "item"}>
                            <Link className="db text-decoration-none" to="/admin/users">
                                <i className="material-icons-outlined v-mid mr2">people</i>
                                <span>Users</span>
                            </Link>
                        </li>
                        <li className={this.props.location.pathname === ("/admin/orders") ? "item item-active" : "item"}>
                            <Link className="db text-decoration-none" to="/admin/orders">
                                <i className="material-icons-outlined v-mid mr2">shopping_bag</i>
                                <span>Orders</span>
                            </Link>
                        </li>
                        <li className={this.props.location.pathname === ("/admin/products") ? "item item-active" : "item"}>
                            <Link className="db text-decoration-none" to="/admin/products">
                                <i className="material-icons-outlined v-mid mr2">list</i>
                                <span>Products</span>
                            </Link>
                        </li>
                        <li className={this.props.location.pathname === ("/admin/categories") ? "item item-active" : "item"}>
                            <Link className="db text-decoration-none" to="/admin/categories">
                                <i className="material-icons-outlined v-mid mr2">category</i>
                                <span>Categories</span>
                            </Link>
                        </li>
                        {/*<li className="item">*/}
                        {/*    <Link className="db text-decoration-none" to="#">*/}
                        {/*        <i className="material-icons-outlined v-mid mr2">live_help</i>*/}
                        {/*        <span>Help & Support</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </aside>
        );
    }
}


export default withRouter(Navigation);

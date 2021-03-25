import React, {Component} from 'react';
import {Link} from "react-router-dom";

class TableCategory extends Component {
    render() {
        return (
            <div className="page my-page">
                <div className="page__content">
                    {/* */}
                    <div className="main-wrapper">
                        {/* */}
                        <aside className="side-menu-panel hide-scrollbar">
                            <div className="ph3">
                                <ul className="side-menu pl0 pb4">
                                    <li className="item">
                                        <Link className="db text-decoration-none" to="/admin">
                                            <i className="material-icons-outlined v-mid mr2">home</i>
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    <li className="item">
                                        <Link className="db text-decoration-none" to="/admin/users">
                                            <i className="material-icons-outlined v-mid mr2">people</i>
                                            <span>Users</span>
                                        </Link>
                                    </li>
                                    <li className="item">
                                        <Link className="db text-decoration-none" to="/admin/orders">
                                            <i className="material-icons-outlined v-mid mr2">shopping_bag</i>
                                            <span>Orders</span>
                                        </Link>
                                    </li>
                                    <li className="item">
                                        <Link className="db text-decoration-none" to="/admin/products">
                                            <i className="material-icons-outlined v-mid mr2">list</i>
                                            <span>Products</span>
                                        </Link>
                                    </li>
                                    <li className="item item-active">
                                        <Link className="db text-decoration-none" to="/admin/categories">
                                            <i className="material-icons-outlined v-mid mr2">category</i>
                                            <span>Categories</span>
                                        </Link>
                                    </li>
                                    <li className="item">
                                        <Link className="db text-decoration-none" to="#">
                                            <i className="material-icons-outlined v-mid mr2">live_help</i>
                                            <span>Help & Support</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                        <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                            <div className="container l">
                                {/* */}
                                <header className="mb4 db flex items-center flex-wrap">
                                    <div className="mb4 mb0-m mb0-l">
                                        <h1 className="bold">Categories</h1>
                                    </div>
                                    <div className="flex-grow-1 ml3 tr">
                                        <Link to="/admin/categories/new" className="link-mute">
                                            <button className="btn btn-primary btn-lg">
                                                Add New Category
                                            </button>
                                        </Link>
                                    </div>
                                </header>
                                {/* */}
                                <div className="tab-wrapper">
                                    {/* */}
                                    <header className="tab-header">
                                        <Link to="#" className="tab-item link-mute" aria-selected="true">
                                            Categories
                                        </Link>
                                        <Link to="#" className="tab-item link-mute" aria-selected="false">
                                            Help & Support
                                        </Link>
                                    </header>
                                    {/* Categories */}
                                    <div className="tab-content">
                                        <div className="mb4">
                                            <h3 className="bold">Categories <span>5</span></h3>
                                        </div>
                                        {/* Table */}
                                        <div className="custom-datatable overflow-x-auto overflow-y-hidden">
                                            <div className="mdc-data-table hide-scrollbar"
                                                 data-mdc-auto-init="MDCDataTable">
                                                <div className="mdc-data-table__table-container">
                                                    <table className="mdc-data-table__table"
                                                           aria-label="Dessert calories">
                                                        <thead>
                                                        <tr className="mdc-data-table__header-row">
                                                            <th className="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                                                                role="columnheader" scope="col">
                                                                <div
                                                                    className="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected">
                                                                    <input type="checkbox"
                                                                           className="mdc-checkbox__native-control"
                                                                           aria-label="Toggle all rows"/>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg className="mdc-checkbox__checkmark"
                                                                             viewBox="0 0 24 24">
                                                                            <path
                                                                                className="mdc-checkbox__checkmark-path"
                                                                                fill="none"
                                                                                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark"/>
                                                                    </div>
                                                                    <div className="mdc-checkbox__ripple"/>
                                                                </div>
                                                            </th>
                                                            <th className="mdc-data-table__header-cell"
                                                                role="columnheader" scope="col">Category name
                                                            </th>
                                                            <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                                                                role="columnheader" scope="col">Date
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="mdc-data-table__content">
                                                        <tr data-row-id="u0"
                                                            className="mdc-data-table__row transparent">
                                                            <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                                                                <div
                                                                    className="mdc-checkbox mdc-data-table__row-checkbox">
                                                                    <input type="checkbox"
                                                                           className="mdc-checkbox__native-control"
                                                                           aria-labelledby="u0"/>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg className="mdc-checkbox__checkmark"
                                                                             viewBox="0 0 24 24">
                                                                            <path
                                                                                className="mdc-checkbox__checkmark-path"
                                                                                fill="none"
                                                                                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark"/>
                                                                    </div>
                                                                    <div className="mdc-checkbox__ripple"/>
                                                                </div>
                                                            </td>
                                                            <th className="mdc-data-table__cell tl" scope="row"
                                                                id="u0">Men
                                                            </th>
                                                            <td className="mdc-data-table__cell mdc-data-table__cell--numeric">25-03-2021</td>
                                                        </tr>
                                                        <tr data-row-id="u1"
                                                            className="mdc-data-table__row mdc-data-table__row--selected"
                                                            aria-selected="true">
                                                            <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                                                                <div
                                                                    className="mdc-checkbox mdc-data-table__row-checkbox mdc-checkbox--selected">
                                                                    <input type="checkbox"
                                                                           className="mdc-checkbox__native-control"
                                                                           defaultChecked aria-labelledby="u1"/>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg className="mdc-checkbox__checkmark"
                                                                             viewBox="0 0 24 24">
                                                                            <path
                                                                                className="mdc-checkbox__checkmark-path"
                                                                                fill="none"
                                                                                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark"/>
                                                                    </div>
                                                                    <div className="mdc-checkbox__ripple"/>
                                                                </div>
                                                            </td>
                                                            <th className="mdc-data-table__cell tl" scope="row"
                                                                id="u1">Women
                                                            </th>
                                                            <td className="mdc-data-table__cell mdc-data-table__cell--numeric">25-03-2021</td>
                                                        </tr>
                                                        <tr data-row-id="u2"
                                                            className="mdc-data-table__row mdc-data-table__row--selected"
                                                            aria-selected="true">
                                                            <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                                                                <div
                                                                    className="mdc-checkbox mdc-data-table__row-checkbox mdc-checkbox--selected">
                                                                    <input type="checkbox"
                                                                           className="mdc-checkbox__native-control"
                                                                           defaultChecked aria-labelledby="u2"/>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg className="mdc-checkbox__checkmark"
                                                                             viewBox="0 0 24 24">
                                                                            <path
                                                                                className="mdc-checkbox__checkmark-path"
                                                                                fill="none"
                                                                                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark"/>
                                                                    </div>
                                                                    <div className="mdc-checkbox__ripple"/>
                                                                </div>
                                                            </td>
                                                            <th className="mdc-data-table__cell tl" scope="row"
                                                                id="u2">Kids
                                                            </th>
                                                            <td className="mdc-data-table__cell mdc-data-table__cell--numeric">25-03-2021</td>
                                                        </tr>
                                                        <tr data-row-id="u3" className="mdc-data-table__row">
                                                            <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                                                                <div
                                                                    className="mdc-checkbox mdc-data-table__row-checkbox">
                                                                    <input type="checkbox"
                                                                           className="mdc-checkbox__native-control"
                                                                           aria-labelledby="u3"/>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg className="mdc-checkbox__checkmark"
                                                                             viewBox="0 0 24 24">
                                                                            <path
                                                                                className="mdc-checkbox__checkmark-path"
                                                                                fill="none"
                                                                                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark"/>
                                                                    </div>
                                                                    <div className="mdc-checkbox__ripple"/>
                                                                </div>
                                                            </td>
                                                            <th className="mdc-data-table__cell tl" scope="row"
                                                                id="u3">New Arrivals
                                                            </th>
                                                            <td className="mdc-data-table__cell mdc-data-table__cell--numeric">25-03-2021</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tr mv3">
                                            <button className="btn btn-outline-primary btn-sm mr3">
                                                <i className="material-icons-outlined"
                                                   style={{fontSize: '16px'}}>edit</i>
                                                Edit
                                            </button>
                                            <button className="btn btn-outline-danger btn-sm">
                                                <i className="material-icons-outlined"
                                                   style={{fontSize: '16px', color: 'var(--danger)'}}>delete</i>
                                                DELETE
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </div>
        );
    }
}

export default TableCategory;
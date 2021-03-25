import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import {getAllCategories} from "../actions/admin";
import {connect} from 'react-redux';
import SmartFooter from "../components/Footers/smart-footer";
import TableCategory from "../reusable-components/tableCategory";

class ManageCategory extends Component {
    state = {
        id: "",
    }

    componentDidMount() {
        this.props.getAllCategories();
    }

    onEdit = (event) => {
        event.preventDefault();
        return this.props.history.push(`/admin/categories/${this.state.id}`)
    }
    handleChange = (e, id) => {
        console.log(id)
        e.preventDefault()
        this.setState({id: id})
    }


    // state = {
    //     Categories: true,
    //     HelpSupport: false
    // }
    //
    // handleTab = (e) => {
    //     let name = e.target.text
    //     debugger
    //     if (name === "Categories") {
    //         this.setState({Categories: true, HelpSupport: false})
    //     } else {
    //         this.setState({Categories: false, HelpSupport: true})
    //     }
    // }

    render() {
        return (
            <Fragment>
                <div className="page my-page">
                    <div className="page__content">
                        {/* */}
                        <div className="main-wrapper">
                            {/* */}
                            <Navigation/>

                            <main className="main"
                                  style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
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
                                                                    {/*<div*/}
                                                                    {/*    className="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected">*/}
                                                                    {/*    <input type="checkbox"*/}
                                                                    {/*           className="mdc-checkbox__native-control"*/}
                                                                    {/*           aria-label="Toggle all rows"/>*/}
                                                                    {/*    <div className="mdc-checkbox__background">*/}
                                                                    {/*        <svg className="mdc-checkbox__checkmark"*/}
                                                                    {/*             viewBox="0 0 24 24">*/}
                                                                    {/*            <path*/}
                                                                    {/*                className="mdc-checkbox__checkmark-path"*/}
                                                                    {/*                fill="none"*/}
                                                                    {/*                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                                                    {/*        </svg>*/}
                                                                    {/*        <div className="mdc-checkbox__mixedmark"/>*/}
                                                                    {/*    </div>*/}
                                                                    {/*    <div className="mdc-checkbox__ripple"/>*/}
                                                                    {/*</div>*/}
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
                                                            {this.props.categories && this.props.categories.map((category, index) => {
                                                                return <tr key={category.id} data-row-id="u0"
                                                                           className="mdc-data-table__row transparent">
                                                                    <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                                                                        <div className="mdc-touch-target-wrapper">
                                                                            <div className="mdc-radio mdc-radio--touch"
                                                                                 data-mdc-auto-init="MDCRadio">
                                                                                <input
                                                                                    className="mdc-radio__native-control"
                                                                                    type="radio" id="radio-1"
                                                                                    name="radios"
                                                                                    value={this.state.id}
                                                                                    onChange={(e) => this.handleChange(e, category.id)}
                                                                                    checked={category.id === this.state.id && true || false}
                                                                                />

                                                                                <div className="mdc-radio__background">
                                                                                    <div
                                                                                        className="mdc-radio__outer-circle"/>
                                                                                    <div
                                                                                        className="mdc-radio__inner-circle"/>
                                                                                </div>
                                                                                <div className="mdc-radio__ripple"/>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <th className="mdc-data-table__cell tl" scope="row"
                                                                        id="u0">{category.name}
                                                                    </th>
                                                                    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">25-03-2021</td>
                                                                </tr>
                                                            })}
                                                            {/*<tr data-row-id="u1"*/}
                                                            {/*    className="mdc-data-table__row mdc-data-table__row--selected"*/}
                                                            {/*    aria-selected="true">*/}
                                                            {/*    <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">*/}
                                                            {/*        <div*/}
                                                            {/*            className="mdc-checkbox mdc-data-table__row-checkbox mdc-checkbox--selected">*/}
                                                            {/*            <input type="checkbox"*/}
                                                            {/*                   className="mdc-checkbox__native-control"*/}
                                                            {/*                   defaultChecked aria-labelledby="u1"/>*/}
                                                            {/*            <div className="mdc-checkbox__background">*/}
                                                            {/*                <svg className="mdc-checkbox__checkmark"*/}
                                                            {/*                     viewBox="0 0 24 24">*/}
                                                            {/*                    <path*/}
                                                            {/*                        className="mdc-checkbox__checkmark-path"*/}
                                                            {/*                        fill="none"*/}
                                                            {/*                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                                            {/*                </svg>*/}
                                                            {/*                <div className="mdc-checkbox__mixedmark"/>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="mdc-checkbox__ripple"/>*/}
                                                            {/*        </div>*/}
                                                            {/*    </td>*/}
                                                            {/*    <th className="mdc-data-table__cell tl" scope="row"*/}
                                                            {/*        id="u1">Women*/}
                                                            {/*    </th>*/}
                                                            {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">25-03-2021</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr data-row-id="u2"*/}
                                                            {/*    className="mdc-data-table__row mdc-data-table__row--selected"*/}
                                                            {/*    aria-selected="true">*/}
                                                            {/*    <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">*/}
                                                            {/*        <div*/}
                                                            {/*            className="mdc-checkbox mdc-data-table__row-checkbox mdc-checkbox--selected">*/}
                                                            {/*            <input type="checkbox"*/}
                                                            {/*                   className="mdc-checkbox__native-control"*/}
                                                            {/*                   defaultChecked aria-labelledby="u2"/>*/}
                                                            {/*            <div className="mdc-checkbox__background">*/}
                                                            {/*                <svg className="mdc-checkbox__checkmark"*/}
                                                            {/*                     viewBox="0 0 24 24">*/}
                                                            {/*                    <path*/}
                                                            {/*                        className="mdc-checkbox__checkmark-path"*/}
                                                            {/*                        fill="none"*/}
                                                            {/*                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                                            {/*                </svg>*/}
                                                            {/*                <div className="mdc-checkbox__mixedmark"/>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="mdc-checkbox__ripple"/>*/}
                                                            {/*        </div>*/}
                                                            {/*    </td>*/}
                                                            {/*    <th className="mdc-data-table__cell tl" scope="row"*/}
                                                            {/*        id="u2">Kids*/}
                                                            {/*    </th>*/}
                                                            {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">25-03-2021</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr data-row-id="u3" className="mdc-data-table__row">*/}
                                                            {/*    <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">*/}
                                                            {/*        <div*/}
                                                            {/*            className="mdc-checkbox mdc-data-table__row-checkbox">*/}
                                                            {/*            <input type="checkbox"*/}
                                                            {/*                   className="mdc-checkbox__native-control"*/}
                                                            {/*                   aria-labelledby="u3"/>*/}
                                                            {/*            <div className="mdc-checkbox__background">*/}
                                                            {/*                <svg className="mdc-checkbox__checkmark"*/}
                                                            {/*                     viewBox="0 0 24 24">*/}
                                                            {/*                    <path*/}
                                                            {/*                        className="mdc-checkbox__checkmark-path"*/}
                                                            {/*                        fill="none"*/}
                                                            {/*                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                                            {/*                </svg>*/}
                                                            {/*                <div className="mdc-checkbox__mixedmark"/>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="mdc-checkbox__ripple"/>*/}
                                                            {/*        </div>*/}
                                                            {/*    </td>*/}
                                                            {/*    <th className="mdc-data-table__cell tl" scope="row"*/}
                                                            {/*        id="u3">New Arrivals*/}
                                                            {/*    </th>*/}
                                                            {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">25-03-2021</td>*/}
                                                            {/*</tr>*/}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tr mv3">
                                                <button className="btn btn-outline-primary btn-sm mr3"
                                                        onClick={(e) => this.onEdit(e)}>
                                                    <i className="material-icons-outlined"
                                                       style={{fontSize: '16px'}}
                                                    >edit</i>
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


                            {/*            <main className="main"*/}
                            {/*                  style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>*/}
                            {/*                <div className="container l">*/}
                            {/*                    /!* *!/*/}
                            {/*                    <header className="mb4 db flex items-center flex-wrap">*/}
                            {/*                        <div className="mb4 mb0-m mb0-l">*/}
                            {/*                            <h1 className="bold">Categories</h1>*/}
                            {/*                        </div>*/}
                            {/*                        <div className="flex-grow-1 ml3 tr">*/}
                            {/*                            <Link to="/admin/categories/new" className="link-mute">*/}
                            {/*                                <button className="btn btn-primary btn-lg">*/}
                            {/*                                    Add New Category*/}
                            {/*                                </button>*/}
                            {/*                            </Link>*/}
                            {/*                        </div>*/}
                            {/*                    </header>*/}
                            {/*                    /!* *!/*/}
                            {/*                    <div className="tab-wrapper">*/}
                            {/*                        /!* *!/*/}
                            {/*                        <header className="tab-header">*/}
                            {/*                            <Link to="#" className="tab-item link-mute" aria-selected="true">*/}
                            {/*                                Categories*/}
                            {/*                            </Link>*/}
                            {/*                            <Link to="#" className="tab-item link-mute" aria-selected="false">*/}
                            {/*                                Help & Support*/}
                            {/*                            </Link>*/}
                            {/*                        </header>*/}
                            {/*                        /!* *!/*/}
                            {/*                        <div className="tab-content">*/}
                            {/*                            <div className="mb4">*/}
                            {/*                                <h3 className="bold">Categories Management</h3>*/}
                            {/*                            </div>*/}
                            {/*                            /!* Call to action - Favourites *!/*/}

                            {/*                             <div  className="tab-no-data">*/}
                            {/*                                 {this.props.categories && this.props.categories.map((category, index) => {*/}
                            {/*                                 return <div key={category.id} className="tc">*/}
                            {/*                                    <header className="mt3 my-page">*/}
                            {/*                                        <h3 className="bold">{category.name}</h3>*/}
                            {/*                                    </header>*/}
                            {/*                                    <p>*/}
                            {/*                                        Categories management made easy. <br/>*/}
                            {/*                                        All categories at the store will be shown here.*/}
                            {/*                                    </p>*/}
                            {/*                                    <div className="mv3">*/}
                            {/*                                        /!**/}
                            {/*<button class="btn btn-primary btn-lg">*/}
                            {/*  <i class="material-icons-outlined">shopping_cart</i> Continue Shopping*/}
                            {/*</button>*/}
                            {/**!/*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                                 })}*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </main>*/}
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.admin.categories
})

export default withRouter(connect(mapStateToProps, {getAllCategories})(ManageCategory));

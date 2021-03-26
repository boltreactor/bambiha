import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import {getAllCategories} from "../actions/admin";
import {connect} from 'react-redux';
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

class ManageCategory extends Component {
    state = {
        id: null,
    }

    componentDidMount() {
        this.props.getAllCategories();
    }

    handleRadioButton = (event) => {
        event.preventDefault();
        this.setState({id: event.target.value})
    };

    onEdit = (event) => {
        event.preventDefault();
        return this.props.history.push(`/admin/categories/${this.state.id}`)
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
                                                                        <RadioGroup
                                                                            value={this.state.id}
                                                                            onChange={this.handleRadioButton}
                                                                        >
                                                                            <FormControlLabel value={category.id}
                                                                                              control={<Radio/>}
                                                                            />
                                                                        </RadioGroup>
                                                                    </td>
                                                                    <th className="mdc-data-table__cell tl" scope="row"
                                                                        id="u0">{category.name}
                                                                    </th>
                                                                    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">25-03-2021</td>
                                                                </tr>
                                                            })}

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

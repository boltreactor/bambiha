import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import {getAllCategories, editCategory} from "../actions/admin";
import {connect} from 'react-redux';
import SmartFooter from "../components/Footers/smart-footer";

class ManageCategory extends Component {
    state = {
        id: null,
        Categories: true,
        HelpSupport: false,
    }


    componentDidMount() {
        this.props.getAllCategories();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.id !== this.state.id) {
            this.props.getAllCategories()
            this.setState({id: null})
        }
    }

    handleTab = (e) => {
        e.preventDefault()
        let name = e.target.text
        if (name === "Categories") {
            this.setState({Categories: true, HelpSupport: false})
        } else {
            this.setState({Categories: false, HelpSupport: true})
        }
    }

    onEdit = (event, categoryId) => {
        event.preventDefault();
        return this.props.history.push(`/admin/categories/${categoryId}`)
    }

    handleDisable = (event, category) => {
        event.preventDefault();
        let name = category.name
        let id = category.id
        let status = category.status === 1 ? 0 : 1
        this.props.editCategory(id, name, status, this.props)
        this.setState({id: id})
    }

    render() {
        const headers = [{name: 'Category name'}, {name: 'Date and Time'}, {name: "status"}];
        const {categories} = this.props;
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
                                                <h3 className="bold">{this.state.Categories === true ? categories.length > 0 ?
                                                    <div>
                                                        Categories<span className="ml2"
                                                                        style={{color: '#0258ff'}}>{categories.length}</span>
                                                    </div>
                                                    : "Catagories Management" : "Help & Support"}</h3>
                                            </div>

                                            {/*{/ Table /}*/}
                                            {this.state.Categories &&
                                            <div>
                                                <div className="tc">
                                                    {!categories.length > 0 ? <div>
                                                        <header className="mt3 my-page">
                                                            <h3 className="bold">Categories</h3>
                                                        </header>
                                                        <p>
                                                            Categories management made easy. <br/>
                                                            All Categories at the store will be shown here.
                                                        </p>
                                                    </div> : <div>
                                                        <div
                                                            className="custom-datatable overflow-x-auto overflow-y-hidden">
                                                            <div className="mdc-data-table hide-scrollbar"
                                                                 data-mdc-auto-init="MDCDataTable">
                                                                <div className="mdc-data-table__table-container">
                                                                    <table className="mdc-data-table__table"
                                                                           aria-label="Dessert calories">
                                                                        <thead>
                                                                        <tr className="mdc-data-table__header-row">
                                                                            <th className="mdc-data-table__header-cell tl"
                                                                                role="columnheader" scope="col">Sr. No.
                                                                            </th>
                                                                            <th className="mdc-data-table__header-cell tl"
                                                                                role="columnheader" scope="col">Category
                                                                                name
                                                                            </th>
                                                                            <th className="mdc-data-table__header-cell tl mdc-data-table__header-cell--numeric"
                                                                                role="columnheader" scope="col">Date
                                                                            </th>
                                                                            <th className="mdc-data-table__header-cell tl mdc-data-table__header-cell--numeric"
                                                                                role="columnheader" scope="col">Status
                                                                            </th>
                                                                            <th className="mdc-data-table__header-cell tl"
                                                                                role="columnheader" scope="col">Actions
                                                                            </th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody className="mdc-data-table__content">
                                                                        {categories.map((category, index) => <tr
                                                                            data-row-id="u0"
                                                                            className="mdc-data-table__row">
                                                                            <th className="mdc-data-table__cell tl">{index + 1}</th>
                                                                            <th className="mdc-data-table__cell tl"
                                                                                scope="row" id="u0">{category.name}
                                                                            </th>
                                                                            <td className="mdc-data-table__cell mdc-data-table__cell--numeric tl">{category.date}</td>
                                                                            <td className="mdc-data-table__cell mdc-data-table__cell--numeric tl">{category.status === 1 ?
                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row"
                                                                                    id="u0">Enabled</td> :
                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row"
                                                                                    style={{color: "#FF0000"}}
                                                                                    id="u0">Disabled</td>}</td>
                                                                            <td className="mdc-data-table__cell tl">
                                                                                <button
                                                                                    className="btn btn-outline-primary btn-sm mr3"
                                                                                    onClick={(e) => this.onEdit(e, category.id)}>
                                                                                    <i className="material-icons-outlined"
                                                                                       style={{fontSize: '16px'}}>edit</i>
                                                                                    Edit
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-outline-danger btn-sm"
                                                                                    onClick={(e) => this.handleDisable(e, category)}>
                                                                                    <i className="material-icons-outlined"
                                                                                       style={{fontSize: "16px"}}>block</i>ENABLE/DISABLE
                                                                                </button>
                                                                            </td>
                                                                        </tr>)}

                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>}
                                                    {/*<CustomTable headers={headers}*/}
                                                    {/*                  data={categories} onEdit={this.onEdit}*/}
                                                    {/*                  onChange={this.handleRadioButton}*/}
                                                    {/*                  onDisable={this.handleDisable}*/}
                                                    {/*                  id={this.state.id}/>*/}

                                                </div>
                                            </div>}


                                            <div
                                                className={this.state.HelpSupport === true ? "tab-no-data" : "tab-no-data hide"}>
                                                <div className="tc">
                                                    <header className="mt3 my-page">
                                                        <h3 className="bold">Help & Support</h3>
                                                    </header>
                                                    <p>
                                                        24/7 chat support — message us at anytime!
                                                    </p>
                                                    <div className="mv3">
                                                        <Link to="tel:00923165953458" className="link-mute">
                                                            <button className="btn btn-primary btn-lg">
                                                                <i className="material-icons-outlined">phone</i> Contact
                                                                Us
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <SmartFooter/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.admin.categories
})

export default withRouter(connect(mapStateToProps, {getAllCategories, editCategory})(ManageCategory));

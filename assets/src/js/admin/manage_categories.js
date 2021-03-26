import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";
import {getAllCategories } from "../actions/admin";
import {connect} from "react-redux";
import CustomTable from "../reusable-components/custom-table";


class ManageCategory extends Component {

    state = {
        Categories: true,
        HelpSupport: false
    }

    handleTab = (e) => {
        let name = e.target.text

        if (name === "Categories") {
            this.setState({Categories: true, HelpSupport: false})
        } else {
            this.setState({Categories: false, HelpSupport: true})
        }
    }



    componentDidMount() {
     this.props.getAllCategories();
    }

    onEdit = (e) => {
        e.preventDefault();
    }



    render() {
        const headers = [{name: 'Category name'}, {name: 'Date'}];
        const {categories} = this.props;
        return (
            <Fragment>
                <div className="page my-page">
                    <div className="page__content">
                        {/* */}
                        <div className="main-wrapper">
                            {/* */}
                            <Navigation/>

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
                                        <Link to="#" className="tab-item link-mute"
                                              aria-selected={this.state.Categories}
                                              onClick={(e) => this.handleTab(e)}>
                                            Categories
                                        </Link>
                                        <Link to="#" className="tab-item link-mute"
                                              aria-selected={this.state.HelpSupport}
                                              onClick={(e) => this.handleTab(e)}>
                                            Help & Support
                                        </Link>
                                    </header>
                                    {/* Categories */}
                                    <div className="tab-content">
                                        <div className="mb4">
                                            <h3 className="bold">{this.state.Categories === true ? categories.length>0? <div>
                                                    Categories<span className="ml2" style={{color: '#0258ff'}}>15</span>
                                                </div>
                                                    :"Catagories Management" : "Help & Support"}</h3>
                                            </div>

                                        {/* Table */}
                                        {this.state.Categories &&
                                                <div>
                                                <div className="tc">
                                                    {!categories.length>0 ? <div><header className="mt3 my-page">
                                                        <h3 className="bold">Products</h3>
                                                    </header>
                                                    <p>
                                                        Products management made easy. <br/>
                                                        All products at the store will be shown here.
                                                    </p>
                                                    </div>:

                                                   <CustomTable headers={headers}
                                                                  data={categories} onEdit={this.onEdit}/>}


                                                </div>
                                            </div>}



                                        <div className={this.state.HelpSupport === true ? "tab-no-data" : "tab-no-data hide"}>
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
                                         {/*<div className="custom-datatable overflow-x-auto overflow-y-hidden">*/}
                                         {/*       <div className="mdc-data-table hide-scrollbar"*/}
                                         {/*            data-mdc-auto-init="MDCDataTable">*/}
                                         {/*           <div className="mdc-data-table__table-container">*/}
                                         {/*               <table className="mdc-data-table__table"*/}
                                         {/*                      aria-label="Dessert calories">*/}
                                         {/*                   <thead>*/}
                                         {/*                   <tr className="mdc-data-table__header-row">*/}
                                         {/*                       <th className="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"*/}
                                         {/*                           role="columnheader" scope="col">*/}
                                         {/*                           <div*/}
                                         {/*                               className="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected">*/}
                                         {/*                               <input type="checkbox"*/}
                                         {/*                                      className="mdc-checkbox__native-control"*/}
                                         {/*                                      aria-label="Toggle all rows"/>*/}
                                         {/*                               <div className="mdc-checkbox__background">*/}
                                         {/*                                   <svg className="mdc-checkbox__checkmark"*/}
                                         {/*                                        viewBox="0 0 24 24">*/}
                                         {/*                                       <path*/}
                                         {/*                                           className="mdc-checkbox__checkmark-path"*/}
                                         {/*                                           fill="none"*/}
                                         {/*                                           d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                         {/*                                   </svg>*/}
                                         {/*                                   <div className="mdc-checkbox__mixedmark"/>*/}
                                         {/*                               </div>*/}
                                         {/*                               <div className="mdc-checkbox__ripple"/>*/}
                                         {/*                           </div>*/}
                                         {/*                       </th>*/}
                                         {/*                       <th className="mdc-data-table__header-cell"*/}
                                         {/*                           role="columnheader" scope="col">Category name*/}
                                         {/*                       </th>*/}
                                         {/*                       <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"*/}
                                         {/*                           role="columnheader" scope="col">Date*/}
                                         {/*                       </th>*/}
                                         {/*                   </tr>*/}
                                         {/*                   </thead>*/}
                                         {/*                   <tbody className="mdc-data-table__content">*/}
                                         {/*                   {this.props.categories && this.props.categories.map((category, index) => {*/}
                                         {/*                    return  <tr key={category.id} data-row-id="u0"*/}
                                         {/*                       className="mdc-data-table__row transparent">*/}
                                         {/*                       <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">*/}
                                         {/*                           <div*/}
                                         {/*                               className="mdc-checkbox mdc-data-table__row-checkbox">*/}
                                         {/*                               <input type="checkbox"*/}
                                         {/*                                      className="mdc-checkbox__native-control"*/}
                                         {/*                                      aria-labelledby="u0"/>*/}
                                         {/*                               <div className="mdc-checkbox__background">*/}
                                         {/*                                   <svg className="mdc-checkbox__checkmark"*/}
                                         {/*                                        viewBox="0 0 24 24">*/}
                                         {/*                                       <path*/}
                                         {/*                                           className="mdc-checkbox__checkmark-path"*/}
                                         {/*                                           fill="none"*/}
                                         {/*                                           d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                         {/*                                   </svg>*/}
                                         {/*                                   <div className="mdc-checkbox__mixedmark"/>*/}
                                         {/*                               </div>*/}
                                         {/*                               <div className="mdc-checkbox__ripple"/>*/}
                                         {/*                           </div>*/}
                                         {/*                       </td>*/}
                                         {/*                       <th className="mdc-data-table__cell tl" scope="row"*/}
                                         {/*                           id="u0">{category.name}*/}
                                         {/*                       </th>*/}
                                         {/*                       <td className="mdc-data-table__cell mdc-data-table__cell--numeric">25-03-2021</td>*/}
                                         {/*                   </tr>})}*/}
                                         {/*                   </tbody>*/}
                                         {/*               </table>*/}
                                         {/*           </div>*/}
                                         {/*       </div>*/}
                                         {/*   </div>*/}

                                        {/*<div className="tr mv3">*/}
                                        {/*    <button className="btn btn-outline-primary btn-sm mr3">*/}
                                        {/*        <i className="material-icons-outlined"*/}
                                        {/*           style={{fontSize: '16px'}}>edit</i>*/}
                                        {/*        Edit*/}
                                        {/*    </button>*/}
                                        {/*    <button className="btn btn-outline-danger btn-sm">*/}
                                        {/*        <i className="material-icons-outlined"*/}
                                        {/*           style={{fontSize: '16px', color: 'var(--danger)'}}>delete</i>*/}
                                        {/*        DELETE*/}
                                        {/*    </button>*/}
                                        {/*</div>*/}

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
                <SmartFooter/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
   categories : state.admin.categories
})

export default withRouter(connect(mapStateToProps,{getAllCategories})(ManageCategory));

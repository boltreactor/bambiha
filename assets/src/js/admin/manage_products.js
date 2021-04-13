import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";
import {getAllProducts, delProduct} from "../actions/admin";
import {connect} from "react-redux";
import product from "../components/product";

class ManageProducts extends Component {
    state = {
        Products: true,
        HelpSupport: false,
        id: null
    }
    handleTab = (e) => {
        let name = e.target.text
        if (name === "Products") {
            this.setState({Products: true, HelpSupport: false})
        } else {
            this.setState({Products: false, HelpSupport: true})
        }
    }

    componentDidMount() {
        this.props.getAllProducts()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.id !== this.state.id) {
            this.props.getAllProducts()
            this.setState({id: null})
        }
    }

    onEdit = (event, productId) => {
        event.preventDefault();
        return this.props.history.push(`/admin/products/${productId}`)
    }
    handleDeleteProduct = (event, productId) => {
        event.preventDefault();
        this.props.delProduct(productId)
        this.setState({id: productId})
    }

    render() {
        const headers = [{name: 'Product Title'}, {name: 'Price'}, {name: 'Quantity'},
            {name: 'Category'}, {name: 'Description'}, {name: 'Images'}];
        const {products} = this.props;
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
                                            <h1 className="bold">Products</h1>
                                        </div>
                                        <div className="flex-grow-1 ml3 tr">
                                            <Link to="/admin/products/new" className="link-mute">
                                                <button className="btn btn-primary btn-lg">
                                                    Add New Product
                                                </button>
                                            </Link>
                                        </div>
                                    </header>
                                    {/* */}
                                    <div className="tab-wrapper">
                                        {/* */}
                                        <header className="tab-header">
                                            <Link to="#" className="tab-item link-mute"
                                                  aria-selected={this.state.Products}
                                                  onClick={(e) => this.handleTab(e)}>
                                                Products
                                            </Link>
                                            <Link to="#" className="tab-item link-mute"
                                                  aria-selected={this.state.HelpSupport}
                                                  onClick={(e) => this.handleTab(e)}>
                                                Help & Support
                                            </Link>
                                        </header>
                                        {/*Products */}
                                        <div className="tab-content">
                                            <div className="mb4">
                                                <h3 className="bold"> {this.state.Products === true ? products.length > 0 ?
                                                    <div>
                                                        Products<span className="ml2"
                                                                      style={{color: '#0258ff'}}>{products.length}</span>
                                                    </div>
                                                    : "Products Management" : "Help & Support"}</h3>
                                            </div>
                                            {/* Table */}
                                            {/*<div className={this.state.Products === true ? "tab-no-data" : "tab-no-data hide"}>*/}
                                            {this.state.Products &&
                                            <div>
                                                <div className="tc">
                                                    {!products.length > 0 ? <div>
                                                            <header className="mt3 my-page">
                                                                <h3 className="bold">Products</h3>
                                                            </header>
                                                            <p>
                                                                Products management made easy. <br/>
                                                                All products at the store will be shown here.
                                                            </p>
                                                        </div> :
                                                        <div>
                                                            <div
                                                                className="custom-datatable overflow-x-auto overflow-y-hidden">
                                                                <div className="mdc-data-table hide-scrollbar"
                                                                     data-mdc-auto-init="MDCDataTable">
                                                                    <div className="mdc-data-table__table-container">
                                                                        <table className="mdc-data-table__table"
                                                                               aria-label="Dessert calories">
                                                                            <thead>
                                                                            <tr className="mdc-data-table__header-row">
                                                                                <th className="mdc-data-table__header-cell"
                                                                                    role="columnheader" scope="col">Sr.
                                                                                    No.
                                                                                </th>
                                                                                <th className="mdc-data-table__header-cell"
                                                                                    role="columnheader"
                                                                                    scope="col">Avatar
                                                                                </th>
                                                                                <th className="mdc-data-table__header-cell"
                                                                                    role="columnheader"
                                                                                    scope="col">Product
                                                                                    title
                                                                                </th>
                                                                                <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                                                                                    role="columnheader"
                                                                                    scope="col">Price
                                                                                </th>
                                                                                <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                                                                                    role="columnheader"
                                                                                    scope="col">Quantity
                                                                                </th>
                                                                                <th className="mdc-data-table__header-cell"
                                                                                    role="columnheader"
                                                                                    scope="col">Category
                                                                                </th>
                                                                                <th className="mdc-data-table__header-cell"
                                                                                    role="columnheader"
                                                                                    scope="col">Description
                                                                                </th>
                                                                                <th className="mdc-data-table__header-cell"
                                                                                    role="columnheader" scope="col">No.
                                                                                    of
                                                                                    Images
                                                                                </th>
                                                                                <th className="mdc-data-table__header-cell"
                                                                                    role="columnheader"
                                                                                    scope="col">Actions
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody className="mdc-data-table__content">
                                                                            {products.map((product, index) =>
                                                                                <tr key={index} data-row-id="u0"
                                                                                    className="mdc-data-table__row transparent">
                                                                                    <th className="mdc-data-table__cell tl">{index + 1}</th>
                                                                                    <th className="mdc-data-table__cell tl">
                                                                                        <img src={product.images[0]}/>
                                                                                    </th>
                                                                                    <th className="mdc-data-table__cell tl"
                                                                                        scope="row"
                                                                                        id="u0">{product.title}
                                                                                    </th>
                                                                                    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{product.price}
                                                                                    </td>
                                                                                    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{product.quantity}</td>
                                                                                    <td className="mdc-data-table__cell">{product.category}</td>
                                                                                    <td className="mdc-data-table__cell">{product.description}</td>
                                                                                    <td className="mdc-data-table__cell">{product.images.length}</td>
                                                                                    <td className="mdc-data-table__cell">
                                                                                        <button
                                                                                            onClick={(e) => this.onEdit(e, product.id)}
                                                                                            className="btn btn-outline-primary btn-sm mr3">
                                                                                            <i className="material-icons-outlined"
                                                                                               style={{fontSize: '16px'}}>edit</i>
                                                                                            Edit
                                                                                        </button>
                                                                                        <button
                                                                                            className="btn btn-outline-danger btn-sm"
                                                                                            onClick={(e) => this.handleDeleteProduct(e, product.id)}>
                                                                                            <i className="material-icons-outlined"
                                                                                               style={{
                                                                                                   fontSize: '16px',
                                                                                                   color: 'var(--danger)'
                                                                                               }}>delete</i>
                                                                                            DELETE
                                                                                        </button>
                                                                                    </td>
                                                                                </tr>
                                                                            )}

                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>}
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

const mapStateToProps = state => ({
    products: state.admin.products,
    categories: state.admin.categories
})
export default withRouter(connect(mapStateToProps, {getAllProducts, delProduct})(ManageProducts));
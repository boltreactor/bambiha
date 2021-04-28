import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";
import {getAllProducts, delProduct, editProduct, getAllCategories} from "../actions/admin";
import {connect} from "react-redux";
import SkeletonTableLoader from "../components/Skeleton/table_skeleton";
import MessageSnackbar from "../reusable-components/messageSnackbar";

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
        this.props.getAllCategories()
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
    handleDisable = (event, product) => {
        event.preventDefault()
        let fd = new FormData();
        let category_key = product.category
        fd.append("title", product.title);
        fd.append("description", product.description);
        fd.append("quantity", product.quantity);
        fd.append("price", product.price);
        product.status === 0 ? fd.append("status", '1') : fd.append("status", '0');
        fd.append("category_key", `${this.props.categories.find(function (category) {
            return category.name === category_key;
        }).id}`);
        fd.append("product_key", product.id);
        this.props.editProduct(fd, this.props)
    }

    render() {

        const headers = [{name: 'Sr. No.'}, {name: 'Avatar'}, {name: 'Product Title'}, {name: 'Price'}, {name: 'Quantity'},
            {name: 'Category'}, {name: 'Description'}, {name: 'No. of Images'}, {name: 'Status'}, {name: 'Action'}];
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
                                                        <div>
                                                        Products<span className="ml2"
                                                                      style={{color: '#0258ff'}}>{products.length}</span>
                                                            </div>
                                                    </div>
                                                    : "Products Management" : "Help & Support"}</h3>
                                            </div>
                                            {this.state.Products &&
                                            <div>
                                                <div className="tc">
                                                    {this.props.msg!==null && <MessageSnackbar msg={this.props.msg} show={this.props.show}/>}
                                                            {this.props.msg!==null && this.props.msg}
                                                    {!products.length > 0 ?
                                                        <div>
                                                            <header className="mt3 my-page">
                                                                <h3 className="bold">Products</h3>
                                                            </header>
                                                            <p>
                                                                Products management made easy. <br/>
                                                                All products at the store will be shown here.
                                                            </p>
                                                            <SkeletonTableLoader/>
                                                        </div>

                                                        :
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
                                                                                {headers.map((h, index) => {
                                                                                    return <th key={index}
                                                                                               className="mdc-data-table__header-cell"
                                                                                               role="columnheader"
                                                                                               scope="col">{h.name}
                                                                                    </th>
                                                                                })}


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
                                                                                    <td className="mdc-data-table__cell mdc-data-table__cell--">{product.description}</td>
                                                                                    <td className="mdc-data-table__cell">{product.images.length}</td>
                                                                                    <td className="mdc-data-table__cell">{product.status === 0 ? "Disabled" : "Enabled"}</td>
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
                                                                                        <button
                                                                                            className="btn btn-outline-danger btn-sm"
                                                                                            onClick={(e) => this.handleDisable(e, product)}>
                                                                                            <i className="material-icons-outlined"
                                                                                               style={{fontSize: "16px"}}>block</i>ENABLE/DISABLE
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
    categories: state.admin.categories,
    msg:state.user.msg,
    show:state.user.show
})
export default withRouter(connect(mapStateToProps, {
    getAllProducts,
    delProduct,
    editProduct,
    getAllCategories
})(ManageProducts));

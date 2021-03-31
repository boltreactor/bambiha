import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";
import {getAllProducts} from "../actions/admin";
import {connect} from "react-redux";
import Table from "../reusable-components/table";
import CustomTable from "../reusable-components/custom-table";

class ManageProducts extends Component {

    state = {
        Products: true,
        HelpSupport: false
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
                                                <h3 className="bold"> {this.state.Products === true ? products.length>0?<div>
                                                    Products<span className="ml2" style={{color: '#0258ff'}}>15</span>
                                                </div>
                                                    :"Products Management" : "Help & Support"}</h3>
                                            </div>

                                            {/* Table */}

                                            {/*<div className={this.state.Products === true ? "tab-no-data" : "tab-no-data hide"}>*/}
                                            {this.state.Products &&
                                                <div>
                                                <div className="tc">
                                                    {!products.length>0 ? <div><header className="mt3 my-page">
                                                        <h3 className="bold">Products</h3>
                                                    </header>
                                                    <p>
                                                        Products management made easy. <br/>
                                                        All products at the store will be shown here.
                                                    </p>
                                                    </div>:

                                                   <CustomTable headers={headers}
                                                                  data={products} onEdit={this.editProduct} categories={this.props.categories}/>}


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
    categories:state.admin.categories
})
export default withRouter(connect(mapStateToProps, {getAllProducts})(ManageProducts));

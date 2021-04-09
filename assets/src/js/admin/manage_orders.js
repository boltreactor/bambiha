import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";
import {getAllOrders, deleteOrder, updateOrderStatus} from "../actions/admin";
import {connect} from "react-redux";
// import CustomTable from "../reusable-components/custom-table";
// import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import NewSelect from "../reusable-components/new-select";

class ManageOrders extends Component {

    state = {
        Orders: true,
        HelpSupport: false,
        id: null,

    }

    componentDidMount() {
        this.props.getAllOrders();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.id !== prevState.id) {
            debugger
            this.props.getAllOrders();
            this.setState({id: null})
        }
    }

    handleTab = (e) => {
        let name = e.target.text

        if (name === "Orders") {
            this.setState({Orders: true, HelpSupport: false})
        } else {
            this.setState({Orders: false, HelpSupport: true})
        }
    }
    handleRadioButton = (event) => {
        event.preventDefault();
        this.setState({id: event.target.value})
    };
    onEdit = (event) => {
        event.preventDefault();
        return this.props.history.push(`/admin/categories/${this.state.id}`)
    }

    handleDelete = (event, id) => {
        event.preventDefault();
        this.props.deleteOrder(id, this.props)

    }

    handleChangeOption = (event, id) => {
        event.preventDefault();
        debugger
        this.props.updateOrderStatus(id, event.target.value, this.props);
        this.setState({id})

    }

    render() {

        const headers = [{name: 'Sr. No.'}, {name: 'Order No.'}, {name: 'Price'}, {name: 'Quantity'}, {name: 'User'},
            {name: 'Email'}, {name: 'Phone no'}, {name: 'Address'}, {name: 'Status'}];

        const {orders} = this.props;

        const data = [

            {"name": "Pending", "status": 0},
            {"name": "Cancelled", "status": 1},
            {"name": "Shipped", "status": 2},
            {"name": "Delivered", "status": 3},

        ];

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
                                            <h1 className="bold">Orders</h1>
                                        </div>
                                        <div className="flex-grow-1 ml3 tr">
                                            <button className="btn btn-primary btn-lg">
                                                Manage Orders
                                            </button>
                                        </div>
                                    </header>
                                    {/* */}
                                    <div className="tab-wrapper">
                                        {/* */}
                                        <header className="tab-header">
                                            <Link to="#" className="tab-item link-mute"
                                                  aria-selected={this.state.Orders}
                                                  onClick={(e) => this.handleTab(e)}>
                                                Orders
                                            </Link>
                                            <Link to="#" className="tab-item link-mute"
                                                  aria-selected={this.state.HelpSupport}
                                                  onClick={(e) => this.handleTab(e)}>
                                                Help & Support
                                            </Link>
                                        </header>
                                        {/* */}
                                        <div className="tab-content">
                                            <div className="mb4">
                                                <h3 className="bold">{this.state.Orders === true ? orders.length > 0 ?
                                                    <div>
                                                        Orders
                                                        <span className="ml2"
                                                              style={{color: '#0258ff'}}>{orders.length}</span>
                                                    </div>
                                                    : "Orders Management" : "Help & Support"}</h3>
                                            </div>
                                            {/*{/ Table /}*/}

                                            {this.state.Orders &&
                                            <div>
                                                <div className="tc">
                                                    {!orders.length > 0 ? <div>
                                                            <header className="mt3 my-page">
                                                                <h3 className="bold">Orders</h3>
                                                            </header>
                                                            <p>
                                                                Orders management made easy. <br/>
                                                                All Orders at the store will be shown here.
                                                            </p>
                                                        </div> :
                                                        // <CustomTable headers={headers}
                                                        //                   data={orders}
                                                        //                   onEdit={this.onEdit}
                                                        //                   onChange={this.handleRadioButton}
                                                        //                   id={this.state.id}/>

                                                        <div
                                                            className="custom-datatable overflow-x-auto overflow-y-hidden">
                                                            <div className="mdc-data-table hide-scrollbar"
                                                                 data-mdc-auto-init="MDCDataTable">
                                                                <div className="mdc-data-table__table-container">
                                                                    <table className="mdc-data-table__table"
                                                                           aria-label="Dessert calories">
                                                                        <thead>
                                                                        <tr className="mdc-data-table__header-row">
                                                                            {/*<th className="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"*/}
                                                                            {/* role="columnheader" scope="col">*/}
                                                                            {/*</th>*/}
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
                                                                        {orders.map((item, index) => {
                                                                            return <tr key={index} data-row-id="u0"
                                                                                       className="mdc-data-table__row transparent">
                                                                                {/*<td className="mdc-data-table__cell mdc-data-table__cell--checkbox">*/}
                                                                                {/*  <RadioGroup*/}
                                                                                {/*    value={this.state.id}*/}
                                                                                {/*    onChange={this.handleRadioButton}>*/}
                                                                                {/*    <FormControlLabel value={item.id || item.order_key}*/}
                                                                                {/*      control={<Radio/>}*/}
                                                                                {/*     // label={item.id || item.order_key}*/}
                                                                                {/*    />*/}
                                                                                {/*  </RadioGroup>*/}
                                                                                {/*</td>*/}

                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row" id="u0">{index + 1}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row"
                                                                                    id="u0">
                                                                                    <Link to={`/admin/orders/${item.order_key}`}>
                                                                                        {item.order_number}
                                                                                    </Link>
                                                                                </td>

                                                                                <td className="mdc-data-table__cell mdc-data-table__cell--numeric tl"
                                                                                    scope="row"
                                                                                    id="u0">{item.total_price}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell mdc-data-table__cell--numeric tl"
                                                                                    scope="row"
                                                                                    id="u0">{item.product_quantity}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row" id="u0">{item.user.name}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row"
                                                                                    id="u0">{item.user.email}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row"
                                                                                    id="u0">{item.phone_number}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row" id="u0">{item.address}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row" id="u0">



                                                                                    {/*<NewSelect data={data}*/}
                                                                                    {/*           value={item.status}*/}
                                                                                    {/*           onChange={(e) => {*/}
                                                                                    {/*               this.handleChangeOption(e, item.order_key)*/}
                                                                                    {/*           }}*/}
                                                                                    {/*/>*/}
                                                                                </td>

                                                                                {/* Intentionally Commented */}
                                                                                {/*<td className="mdc-data-table__cell tl">*/}
                                                                                {/*    <button*/}
                                                                                {/*        className="btn btn-primary mr3">*/}
                                                                                {/*        Update*/}
                                                                                {/*    </button>*/}
                                                                                {/*    <button*/}
                                                                                {/*        className="btn btn-outline-primary btn-sm mr3">*/}
                                                                                {/*        <i className="material-icons-outlined"*/}
                                                                                {/*           style={{fontSize: '16px'}}>edit</i>*/}
                                                                                {/*        Edit*/}
                                                                                {/*    </button>*/}
                                                                                {/*    <button*/}
                                                                                {/*        className="btn btn-outline-danger btn-sm"*/}
                                                                                {/*        onClick={(e) => {*/}
                                                                                {/*            this.handleDelete(e, item.order_key)*/}
                                                                                {/*        }}*/}
                                                                                {/*    >*/}
                                                                                {/*        <i className="material-icons-outlined"*/}
                                                                                {/*           style={{*/}
                                                                                {/*               fontSize: '16px',*/}
                                                                                {/*               color: 'var(--danger)'*/}
                                                                                {/*           }}>*/}
                                                                                {/*            delete</i>*/}
                                                                                {/*        DELETE*/}
                                                                                {/*    </button>*/}
                                                                                {/*</td>*/}
                                                                                {/* Intentionally Commented */}

                                                                            </tr>
                                                                        })}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    }


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
                                                        <a href="tel:00923165953458" className="link-mute">
                                                            <button className="btn btn-primary btn-lg">
                                                                <i className="material-icons-outlined">phone</i> Contact
                                                                Us
                                                            </button>
                                                        </a>
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
    orders: state.admin.orders
})

export default withRouter(connect(mapStateToProps, {getAllOrders, deleteOrder, updateOrderStatus})(ManageOrders));

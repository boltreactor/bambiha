import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import {connect} from 'react-redux';
import SmartFooter from "../components/Footers/smart-footer";
import {getAllOrders} from "../actions/admin";
import NewSelect from "../reusable-components/new-select";


class OrderDetail extends Component {

    constructor(props) {
        super(props);
     this.state = {
        Orders: true,
        HelpSupport: false,
        id: this.props.match.params.id,

         order: {
            title: "",
            price: null,
            totalPrice: null,
         }
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

    // componentDidMount() {
    //
    //
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
     debugger
        if (prevProps.orders === this.props.orders ) {

            this.props.getAllOrders();
            const orders = this.props.orders && this.props.orders.filter(order =>
            this.state.id === order.order_key)
          console.log('hi');
        }

    }




    render() {

        const orders = this.props.orders && this.props.orders.filter(order =>
         this.state.id === order.order_key
        )

        const order = orders[0];

        const headers = [{name: 'Sr. No.'}, {name: 'Ordered items'},  {name: 'Quantity'},{name: 'Unit Price'},
            {name: 'Amount'}];


        return (
            <Fragment>
                <div className="page my-page">
                    <div className="page__content">
                        <div className="main-wrapper">
                            <Navigation/>

                 {/* Orders Detail */}
            <main className="main mb7" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
              <div className="container l">
                <div className="mb2">
                  <Link to="/admin/orders" className="flex items-center link-mute">
                    <div>
                      <i className="material-icons va-middle">arrow_back</i>
                    </div>
                    <div className="ml2">
                      Back to orders
                    </div>
                  </Link>
                </div>
                {/* */}
                <header className="mb4 db">
                  <div className="mb4 mb0-m mb0-l">
                    <h1 className="bold adaptive">Order Details</h1>
                  </div>
                </header>
                {/* */}
                <div className="tab-wrapper pb5">
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
                    {/* */}

                    <div className="mb4">
                      <div className="row">
                        <div className="col s12 m6 l8">
                          <h3 className="bold adaptive">Order No. <span className="ml2" style={{color: '#0258ff'}}>{order && order.order_number}</span></h3>
                        </div>
                        <div className="col s12 m6 l4">
                          <div className="caption" style={{fontFamily: 'var(--font-family-montserrat)'}}>
                            Bambiha Textile (Private) Limited.
                            P.O.BOX 501. POST MALL, Jinnah Super F-7,
                            Islamabad, Pakistan
                            <br />
                            0092 316 5953458
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* */}
                    <div style={{borderBottom: '1px solid #ebedf3'}} />
                    {/* */}
                    <div className="row">
                      <div className="col s12 m6 l3">
                        <div className="mv3">
                          <h6 className="mb2">Order Date</h6>
                          <div className="caption" style={{fontFamily: 'var(--font-family-montserrat)'}}>
                              {order && order.date_time}
                          </div>
                        </div>
                      </div>
                      <div className="col s12 m6 l3">
                        <div className="mv3">
                          <h6 className="mb2">Order No.</h6>
                          <div className="caption" style={{fontFamily: 'var(--font-family-montserrat)'}}>
                              {order && order.order_number}
                          </div>
                        </div>
                      </div>
                      <div className="col s12 m6 l6">
                        <div className="mv3">
                          <h6 className="mb2">Delivered to</h6>
                          <div className="caption" style={{fontFamily: 'var(--font-family-montserrat)'}}>
                            <div className="mb2">
                                {order && order.user.name}
                            </div>
                            <div className="mb2">
                                {order && order.address}
                            </div>
                            <div className="mb2">
                                {order && order.user.email}
                            </div>
                            <div className="mb2">
                                {order && order.phone_number}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* */}

                    <div className="custom-datatable overflow-x-auto overflow-y-hidden">
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
                                                                        {order && order.products.map((item, index) => {
                                                                            return <tr key={index} data-row-id="u0"
                                                                                       className="mdc-data-table__row transparent">

                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row" id="u0">{index + 1}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row"
                                                                                    id="u0">{item.title}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell mdc-data-table__cell--numeric tl"
                                                                                    scope="row"
                                                                                    id="u0">{item.quantity}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell mdc-data-table__cell--numeric tl"
                                                                                    scope="row"
                                                                                    id="u0">{item.price}
                                                                                </td>

                                                                                <td className="mdc-data-table__cell tl"
                                                                                    scope="row" id="u0">{item.price}
                                                                                </td>
                                                                            </tr>
                                                                        })}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>

                    <div className="row">
                      <div className="col s12 m12 l12 tr">
                        <div className="ma3 mt5 mr3 mr5-l mr5-m">
                          <h6 className="mb2">Total Amount</h6>
                          <div className="caption" style={{fontFamily: 'var(--font-family-montserrat)'}}>
                              {order && order.total_price}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mv3">
                      <div>
                        <button className="btn btn-primary-outline btn-lg mr3 mb3">Download Order Details</button>
                        <button className="btn btn-primary btn-lg mb3">Print Order Details</button>
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

export default withRouter(connect(mapStateToProps, {getAllOrders})(OrderDetail));

import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";
import {getAllOrders} from "../actions/admin";
import {connect} from "react-redux";
import CustomTable from "../reusable-components/custom-table";

class ManageOrders extends Component {

    state = {
        Orders: true,
        HelpSupport: false,
        id: null
    }

    componentDidMount() {
        this.props.getAllOrders()

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

    render() {
        const headers = [{name: 'Order name'}, {name: 'Placed by'}, {name: 'Date and time'}];
        const {orders} = this.props;
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
                                                        {/*<span className="ml2"*/}
                                                        {/*                style={{color: '#0258ff'}}></span>*/}
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
                                                    </div> : <CustomTable headers={headers}
                                                                          data={orders}
                                                        // onEdit={this.onEdit}
                                                                          onChange={this.handleRadioButton}
                                                                          id={this.state.id}/>}


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

export default withRouter(connect(mapStateToProps, {getAllOrders})(ManageOrders));

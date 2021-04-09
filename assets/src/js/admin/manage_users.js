import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";
import {getAllUsers, disableUser} from "../actions/admin";
import {connect} from "react-redux";
import CustomTable from "../reusable-components/custom-table";
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import equal from "fast-deep-equal";


class ManageUsers extends Component {

    state = {
        Users: true,
        HelpSupport: false,
        id: null,
        user_id: null,
        account_status: 1
    }

    handleTab = (e) => {
        let name = e.target.text

        if (name === "Users") {
            this.setState({Users: true, HelpSupport: false})
        } else {
            this.setState({Users: false, HelpSupport: true})
        }
    }

    handleRadioButton = (event) => {
        event.preventDefault();
        this.setState({id: event.target.value})
    };

    componentDidMount() {
        this.props.getAllUsers();
    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.user_id !== prevState.user_id) {
            debugger
            this.props.getAllUsers();
            this.setState({user_id: null})
        }
    }

    handleDisable = (event, id, status) => {
        event.preventDefault();
        let account_status;
        status ? account_status = 0 : account_status = 1
        this.props.disableUser(id, account_status, this.props);
        this.setState({account_status: account_status, user_id: id})

    }

    render() {
        const headers = [{name: 'Sr. No.'}, {name: 'User name'}, {name: 'E-mail address'}, {name: 'Status'}, {name: 'Action'}];
        const {users} = this.props;
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
                                            <h1 className="bold">Users</h1>
                                        </div>
                                        <div className="flex-grow-1 ml3 tr">
                                            <button className="btn btn-primary btn-lg">
                                                Manage Users
                                            </button>
                                        </div>
                                    </header>
                                    {/* */}
                                    <div className="tab-wrapper">
                                        {/* */}
                                        <header className="tab-header">
                                            <Link to="#" className="tab-item link-mute" aria-selected={this.state.Users}
                                                  onClick={(e) => this.handleTab(e)}>
                                                Users
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
                                                <h3 className="bold">{this.state.Users === true ? users.length > 0 ?
                                                    <div>
                                                        Users
                                                        <span className="ml2"
                                                                        style={{color: '#0258ff'}}>{users.length}</span>
                                                    </div>
                                                    : "Users Management" : "Help & Support"}</h3>
                                            </div>
                                            {/*{/ Table /}*/}
                                            {this.state.Users &&
                                            <div>
                                                <div className="tc">
                                                    {!users.length > 0 ? <div>
                                                            <header className="mt3 my-page">
                                                                <h3 className="bold">Users</h3>
                                                            </header>
                                                            <p>
                                                                <br/>
                                                                All Users at the store will be shown here.
                                                            </p>
                                                        </div> :
                                                        // <CustomTable headers={headers}
                                                        //                   data={users}
                                                        //                   onChange={this.handleRadioButton}
                                                        //                   id={this.state.id}/>
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
                                                                            {users.map((item, index) => {
                                                                                return <tr key={item.id}
                                                                                           data-row-id="u0"
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
                                                                                        id="u0">{item.first_name}
                                                                                    </td>

                                                                                    <td className="mdc-data-table__cell tl"
                                                                                        scope="row" id="u0">{item.email}
                                                                                    </td>
                                                                                    {
                                                                                        item.account_status ?
                                                                                            <td className="mdc-data-table__cell tl"
                                                                                                scope="row"
                                                                                                id="u0">Enabled</td> :
                                                                                            <td className="mdc-data-table__cell tl"
                                                                                                scope="row"
                                                                                                style={{color: "#FF0000"}}
                                                                                                id="u0">Disabled</td>
                                                                                    }

                                                                                    <td className="mdc-data-table__cell tl">
                                                                                        <button
                                                                                            className="btn btn-outline-primary btn-sm mr3"
                                                                                            onClick={(e) => {
                                                                                                this.handleDisable(e, item.id, item.account_status)
                                                                                            }}
                                                                                        >
                                                                                            <i className="material-icons-outlined"
                                                                                               style={{fontSize: '16px'}}>block</i>
                                                                                            {item.account_status ? "DISABLE" : "ENABLE"}
                                                                                        </button>
                                                                                        {/*<button*/}
                                                                                        {/*    className="btn btn-outline-danger btn-sm">*/}
                                                                                        {/*    <i className="material-icons-outlined"*/}
                                                                                        {/*       style={{*/}
                                                                                        {/*           fontSize: '16px',*/}
                                                                                        {/*           color: 'var(--danger)'*/}
                                                                                        {/*       }}>*/}
                                                                                        {/*        delete</i>*/}
                                                                                        {/*    DELETE*/}
                                                                                        {/*</button>*/}
                                                                                    </td>
                                                                                </tr>
                                                                            })}
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
    users: state.admin.users
})
export default connect(mapStateToProps, {getAllUsers, disableUser})(ManageUsers);

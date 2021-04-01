import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";
import {addCategory, editCategory, getAllUsers, getCategory} from "../actions/admin";
import {connect} from "react-redux";
import CustomTable from "../reusable-components/custom-table";


class ManageUsers extends Component {

    state = {
        Users: true,
        HelpSupport: false,
        id: null
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

    render() {
        const headers = [{name: 'User Names'}];
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
                                                    </div>
                                                    : "Orders Management" : "Help & Support"}</h3>
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
                                                    </div> : <CustomTable headers={headers}
                                                                          data={users}
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
    users: state.admin.users
})
export default connect(mapStateToProps, {getAllUsers})(ManageUsers);
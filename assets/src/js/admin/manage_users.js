import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";

class ManageUsers extends Component {

    state = {
        Users: true,
        HelpSupport: false
    }

    handleTab = (e) => {
        let name = e.target.text
        debugger
        if (name === "Users") {
            this.setState({Users: true, HelpSupport: false})
        } else {
            this.setState({Users: false, HelpSupport: true})
        }
    }

    render() {
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
                                                <h3 className="bold"> {this.state.Users === true ? "User Management" : "Help & Support"}</h3>
                                            </div>
                                            {/* Call to action - Favourites */}
                                            <div
                                                className={this.state.Users === true ? "tab-no-data" : "tab-no-data hide"}>
                                                <div className="tc">
                                                    <header className="mt3 my-page">
                                                        <h3 className="bold">Users</h3>
                                                    </header>
                                                    <p>
                                                        User management made easy. <br/>
                                                        All users at the store will be shown here.
                                                    </p>
                                                    <div className="mv3">
                                                        {/* <button class="btn btn-primary btn-lg">
                                                              <i class="material-icons-outlined">shopping_cart</i> Continue Shopping
                                                            </button> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={this.state.HelpSupport === true ? "tab-no-data" : "tab-no-data hide"}>
                                                <div className="tc">
                                                    <header className="mt3 my-page">
                                                        <h3 className="bold">Help &amp; Support</h3>
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

export default ManageUsers;
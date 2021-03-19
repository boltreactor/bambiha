import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import Navigation from "./navigation";

class ManageOrders extends Component {

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
                                            <Link to="#" className="tab-item link-mute" aria-selected="true">
                                                Orders
                                            </Link>
                                            <Link to="#" className="tab-item link-mute" aria-selected="false">
                                                Help &amp; Support
                                            </Link>
                                        </header>
                                        {/* */}
                                        <div className="tab-content">
                                            <div className="mb4">
                                                <h3 className="bold">Orders Management</h3>
                                            </div>
                                            {/* Call to action - Favourites */}
                                            <div className="tab-no-data">
                                                <div className="tc">
                                                    <header className="mt3 my-page">
                                                        <h3 className="bold">Users</h3>
                                                    </header>
                                                    <p>
                                                        Orders management made easy. <br/>
                                                        All orders at the store will be shown here.
                                                    </p>
                                                    <div className="mv3">
                                                        {/*
                <button class="btn btn-primary btn-lg">
                  <i class="material-icons-outlined">shopping_cart</i> Continue Shopping
                </button>
                */}
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

            </Fragment>
        );
    }
}

export default ManageOrders;
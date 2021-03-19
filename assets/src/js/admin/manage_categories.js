import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import Navigation from "./navigation";

class ManageCategory extends Component {

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
                                            <h1 className="bold">Categories</h1>
                                        </div>
                                        <div className="flex-grow-1 ml3 tr">
                                            <Link to="/admin/categories/new" className="link-mute">
                                                <button className="btn btn-primary btn-lg">
                                                    Add New Category
                                                </button>
                                            </Link>
                                        </div>
                                    </header>
                                    {/* */}
                                    <div className="tab-wrapper">
                                        {/* */}
                                        <header className="tab-header">
                                            <Link to="#" className="tab-item link-mute" aria-selected="true">
                                                Categories
                                            </Link>
                                            <Link to="#" className="tab-item link-mute" aria-selected="false">
                                                Help & Support
                                            </Link>
                                        </header>
                                        {/* */}
                                        <div className="tab-content">
                                            <div className="mb4">
                                                <h3 className="bold">Categories Management</h3>
                                            </div>
                                            {/* Call to action - Favourites */}
                                            <div className="tab-no-data">
                                                <div className="tc">
                                                    <header className="mt3 my-page">
                                                        <h3 className="bold">Categories</h3>
                                                    </header>
                                                    <p>
                                                        Categories management made easy. <br/>
                                                        All categories at the store will be shown here.
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

export default ManageCategory;
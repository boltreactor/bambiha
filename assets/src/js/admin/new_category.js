import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';

class NewCategory extends Component {

    render() {
        return (
            <Fragment>
                <div className="page my-page">
                    <div className="page__content">
                        {/* Add Category */}
                        <section className="container s mt4" style={{maxWidth: '420px'}}>
                            <header className="mt4 mb2 tc">
                                <h3 className="bold">Add new category</h3>
                                <p>
                                    Manually add new category
                                </p>
                            </header>
                            <div className="mv4">
                                <div className="mb4">
                                    <label className="label-text bold">Category name <i className="material-icons red"
                                                                                        style={{fontSize: '7px'}}>star</i>
                                        {/*
        <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
          ! Required
        </span>
        <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
          Passwords do not match
        </span>
        */}
                                    </label>
                                    <div
                                        className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label"
                                        data-mdc-auto-init="MDCTextField">
                                            <span className="mdc-notched-outline">
                                              <span className="mdc-notched-outline__leading"/>
                                              <span className="mdc-notched-outline__trailing"/>
                                            </span>
                                        <input className="mdc-text-field__input" type="text" aria-label="Label"
                                               placeholder="Category Name"/>
                                    </div>
                                </div>
                                <div className="mt4 mb4">
                                    <Link to="/admin/categories" className="link-mute">
                                        <button className="btn btn-primary btn-lg">
                                            <i className="v-mid material-icons mr1"
                                               style={{fontSize: '18px'}}>lock</i> Add
                                        </button>
                                    </Link>
                                    <Link to="/admin/categories" className="link-mute">
                                        <button className="btn btn-outline-primary btn-lg ml3">
                                            CANCEL
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default NewCategory;
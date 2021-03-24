import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';

class NewProduct extends Component {

    render() {
        return (
            <Fragment>
                <div className="page my-page">
                    <div className="page__content">
                        {/* Add Taxes */}
                        <section className="container s mt4" style={{maxWidth: '600px'}}>
                            <header className="mt4 mb2 tc">
                                <h3 className="bold">Add new product</h3>
                                <p>
                                    To setup your online store, you need to add products
                                </p>
                            </header>
                            <div className="mv4">
                                <div className="row">
                                    <div className="col s12 m6 mb3">
                                        <label className="label-text bold">Product Title <i
                                            className="material-icons red" style={{fontSize: '7px'}}>star</i>
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
                                                   placeholder="Enter product title"/>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <label className="label-text bold">Product Category <i
                                            className="material-icons red" style={{fontSize: '7px'}}>star</i>
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
                                                   placeholder="Select product category"/>
                                        </div>
                                    </div>
                                    <div className="col s12 mb3">
                                        <label className="label-text bold">Product description<i
                                            className="material-icons red" style={{fontSize: '7px'}}>star</i>
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
                                                   placeholder="Enter product description"/>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <label className="label-text bold">Product quantity<i
                                            className="material-icons red" style={{fontSize: '7px'}}>star</i>
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
                                                   placeholder="Enter product quantity"/>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <label className="label-text bold">Price<i className="material-icons red"
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
                                                   placeholder="Enter product price"/>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <div className="mv3">
                                            <button className="btn btn-dark btn-lg">
                                                <i className="material-icons-outlined v-mid mr2">add_a_photo</i>
                                                Add Photos
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col s12 mt3 mb3">
                                        <Link to="/admin/products" className="link-mute">
                                            <button className="btn btn-primary btn-lg">
                                                ADD
                                            </button>
                                        </Link>
                                        <Link to="/admin/products" className="link-mute">
                                            <button className="btn btn-outline-primary btn-lg ml3">
                                                CANCEL
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default NewProduct;
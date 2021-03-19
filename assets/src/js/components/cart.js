import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import Footer from "./Footers/estore-footer";

class Cart extends Component {
    render() {
        return (
              <div className="page">
        <div className="page__content">
          <div className="container l mt5">
            <div className="row">
              <div className="col s12 m8 l8 col--no-spacing-sm">
                {/* */}
                <div className="banner">
                  <div className="banner-wrapper gray my-page pa2">
                    <div className="flex items-center">
                      <div className="flex-grow-1">
                        <h5 className="bold">Free Shipping &amp; 60-Day Free Returns</h5>
                        <div className="mt1">
                          <Link to="#" className="link-mute link-dark">
                            <h5 className="bold">Join Now</h5>
                          </Link>
                        </div>
                      </div>
                      <div className="ml2">
                        <button className="mdc-icon-button material-icons">close</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bag */}
                <div className="cart-or-bag mv4">
                  <h3 className="mb3">Bag</h3>
                  <div className="cart-item ma0">
                    <div className="flex mb3">
                      <div className="mr2 mb3">
                        <Link to="#" className="link-mute">
                          <img src="/assets/images/static/img-noise.png" alt="" />
                        </Link>
                      </div>
                      <div className="flex-grow-1 pa2">
                        <div className="description">
                          <div className="flex flex-wrap mb2">
                            <div className="flex-grow-1 mr2">
                              <h4>Nike Air Max 270</h4>
                            </div>
                            <div>
                              <h6>$150</h6>
                            </div>
                          </div>
                          <p className="ma0" style={{fontSize: '16px'}}>
                            Men's Shoe
                          </p>
                          <div className="mv2">
                            <div className="dib mr3">
                              <p className="ma0" style={{fontSize: '16px'}}>
                                <span>Size</span>
                                <span>
                                  <select name="size" id="size">
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                  </select>
                                </span>
                              </p>
                            </div>
                            <div className="dib mr3">
                              <p className="ma0" style={{fontSize: '16px'}}>
                                <span>Quantity</span>
                                <span>
                                  <select name="size" id="size">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                  </select>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="actions">
                          <Link to="#" className="link-dark mr3 fw4" style={{color: 'var(--space-gray)', fontSize: '16px'}}>Move to Favourite</Link>
                          <Link to="#" className="link-dark fw4" style={{color: 'var(--space-gray)', fontSize: '16px'}}>Remove</Link>
                        </div>
                      </div>
                    </div>
                    <div className="mv3">
                      <h6>Shipping</h6>
                      <p style={{color: '#082244', fontSize: '16px', paddingBottom: '16px'}}>Arrives by <span>Wed,</span> <span>March 10, 2021</span></p>
                    </div>
                  </div>
                </div>
                {/* */}
                <div className="cart-or-bag mv4">
                  <h3 className="mb3">Favourites</h3>
                  <div className="cart-item ma0">
                    <div className="flex mb3">
                      <div className="mr2 mb3">
                        <Link to="#" className="link-mute">
                          <img src="/assets/images/static/img-noise.png" alt="" />
                        </Link>
                      </div>
                      <div className="flex-grow-1 pa2">
                        <div className="description">
                          <div className="flex mb2">
                            <div className="flex-grow-1 mr2">
                              <h4>Nike Air Max 270</h4>
                            </div>
                            <div>
                              <h6>$150</h6>
                            </div>
                          </div>
                          <p className="ma0" style={{fontSize: '16px'}}>
                            Men's Shoe
                          </p>
                          <div className="mv2">
                            <div className="dib mr3">
                              <p className="ma0" style={{fontSize: '16px'}}>
                                <span>Size</span>
                                <span>
                                  <select name="size" id="size">
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                  </select>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="actions">
                          <button className="btn btn-outline-dark btn-lg btn-pill">
                            Add to Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mv3">
                    <Link to="#" className="fw4 link-mute link-dark">View all Favourites</Link>
                  </div>
                </div>
              </div>
              <div className="col s12 m4 l4">
                <div className="ml4-m ml4-l">
                  <h3 className="mb3">Summary</h3>
                  <div className="flex items-center">
                    <div className="flex-grow-1">
                      <p style={{fontSize: '15px'}}>Subtotal</p>
                    </div>
                    <div className="ml2">
                      <h6>$150</h6>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-grow-1">
                      <p style={{fontSize: '15px'}}>Estimated Shipping &amp; Handling</p>
                    </div>
                    <div className="ml2">
                      <h6>$0.00</h6>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-grow-1">
                      <p style={{fontSize: '15px'}}>Estimated Tax</p>
                    </div>
                    <div className="ml2">
                      <h6>-</h6>
                    </div>
                  </div>
                  <div className="mv2" style={{borderBottom: '1px solid #e5e5e5'}} />
                  <div className="flex items-center pv2">
                    <div className="flex-grow-1">
                      <h6>Total</h6>
                    </div>
                    <div className="ml2">
                      <h6>$150</h6>
                    </div>
                  </div>
                  <div className="mv2" style={{borderBottom: '1px solid #e5e5e5'}} />
                  <div className="mv5">
                    <button className="btn btn-dark btn-lg btn-block btn-pill">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                <Footer/>
      </div>
        );
    }
}

export default Cart;

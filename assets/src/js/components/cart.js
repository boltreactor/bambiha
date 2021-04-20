import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Footer from "./Footers/estore-footer";
import {checkout, viewCart, getFavorite, addProductToCart, manageFavorite, changeQuantity} from "../actions/user";
import {connect} from "react-redux";

class Cart extends Component {

    componentDidMount() {
        this.props.viewCart();
        this.props.getFavorite();
    }

    handleCheckout = () => {
        this.props.history.push('/checkout')
    }
    addItemToCart = (e, quantity, product, addOrRemove) => {
        e.preventDefault();
        debugger
        this.props.addProductToCart(quantity, product, addOrRemove)
    }
    addFavorite = (e, product_key) => {
        e.preventDefault();
        this.props.manageFavorite(product_key, this.props)
    }
    selectQuantity = (e, item) => {
        e.preventDefault()
        item.quantity = e.target.value
        console.log(item)
        this.props.changeQuantity(item)
    }


    render() {
        // const Fav = this.props.favorites[0]
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
                                                <h5 className="bold">Free Shipping & 60-Day Free Returns</h5>
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

                                        {/*action call*/}
                                        {this.props.cart && this.props.cart.map((item, index) => {
                                            return <div key={index} className="flex mb3">
                                                <div className="mr2 mb3">
                                                    <Link to={`/product/${item.product_key}`} className="link-mute">
                                                        <img src={item.image ? item.image : "/static/show-1.jpeg"}
                                                             alt=""/>
                                                    </Link>
                                                </div>
                                                <div className="flex-grow-1 pa2">
                                                    <div className="description">
                                                        <div className="flex flex-wrap mb2">
                                                            <div className="flex-grow-1 mr2">
                                                                <Link to={`/product/${item.product_key}`}>
                                                                    <h4>{item.title}</h4></Link>
                                                            </div>
                                                            <div>
                                                                <h6>{item.price}</h6>
                                                            </div>
                                                        </div>
                                                        <p className="ma0" style={{fontSize: '16px'}}>
                                                            Men's Shoe
                                                        </p>
                                                        <div className="mv2">
                                                            {item.size && <div className="dib mr3">
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
                                                            </div>}
                                                            <div className="dib mr3">
                                                                <p className="ma0" style={{fontSize: '16px'}}>
                                                                    <span>Quantity</span>
                                                                    <span>
                                                                      <select name="size" id="size"
                                                                              onChange={(e) => this.selectQuantity(e, item)}
                                                                              value={item.quantity}>
                                                                          {numbers.map(quantity => <option
                                                                              key={quantity}
                                                                          >{quantity}</option>)}
                                                                          {/*<option value={1}>1</option>*/}
                                                                          {/*<option value={2}>2</option>*/}
                                                                          {/*<option value={3}>3</option>*/}
                                                                      </select>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="actions">
                                                        <button
                                                            className="btn btn-outline-dark btn-lg btn-pill mr2"
                                                            // style={{color: 'var(--space-gray)', fontSize: '14px'}}
                                                            onClick={(e) => this.addFavorite(e, item.product_key)}>Move
                                                            to Favourite
                                                        </button>
                                                        <button
                                                            className="btn btn-outline-dark btn-lg btn-pill mr2"
                                                            // style={{color: 'var(--space-gray)', fontSize: '14px'}}
                                                            onClick={(e) => this.addItemToCart(e, 0, item, "remove")}>Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                        <div className="mv3">
                                            <h6>Shipping</h6>
                                            <p style={{
                                                color: '#082244',
                                                fontSize: '16px',
                                                paddingBottom: '16px'
                                            }}>Arrives by <span>Wed,</span> <span>March 10, 2021</span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* */}
                                {this.props.favorites !== undefined && this.props.favorites.length > 0 &&
                                <div className="cart-or-bag mv4">
                                    <h3 className="mb3">Favourites</h3>
                                    <div className="cart-item ma0">
                                        <div className="flex mb3">
                                            <div className="mr2 mb3">
                                                <Link to="#" className="link-mute">
                                                    <img
                                                        src={this.props.favorites[0].image ? this.props.favorites[0].image : "/static/img-noise.png"}
                                                        alt=""/>
                                                </Link>
                                            </div>
                                            <div className="flex-grow-1 pa2">
                                                <div className="description">
                                                    <div className="flex mb2">
                                                        <div className="flex-grow-1 mr2">
                                                            <h4>{this.props.favorites[0].title}</h4>
                                                        </div>
                                                        <div>
                                                            <h6>{this.props.favorites[0].price}</h6>
                                                        </div>
                                                    </div>
                                                    <p className="ma0" style={{fontSize: '16px'}}>
                                                        Men's Shoe
                                                    </p>
                                                    {this.props.favorites[0].size && <div className="mv2">
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
                                                    </div>}
                                                </div>
                                                <div className="actions">
                                                    <button className="btn btn-outline-dark btn-lg btn-pill"
                                                            onClick={(e) => this.addItemToCart(e, 1, this.props.favorites[0], "add")}>
                                                        Add to Bag
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mv3">
                                        <Link to="/favorites" className="fw4 link-mute link-dark">View all
                                            Favourites</Link>
                                    </div>
                                </div>}

                            </div>
                            <div className="col s12 m4 l4">
                                <div className="ml4-m ml4-l">
                                    <h3 className="mb3">Summary</h3>
                                    <div className="flex items-center">

                                        <div className="flex-grow-1">
                                            <p style={{fontSize: '15px'}}>Subtotal</p>
                                        </div>
                                        <div className="ml2">
                                            <h6>PKR. {this.props.cart.reduce((accumulator, current) => accumulator + current.price, 0)}</h6>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex-grow-1">
                                            <p style={{fontSize: '15px'}}>Estimated Shipping & Handling</p>
                                        </div>
                                        <div className="ml2">
                                            <h6>PKR. 0.00</h6>
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
                                    <div className="mv2" style={{borderBottom: '1px solid #e5e5e5'}}/>
                                    <div className="flex items-center pv2">
                                        <div className="flex-grow-1">
                                            <h6>Total</h6>
                                        </div>
                                        <div className="ml2">
                                            <h6>PKR. {this.props.cart.reduce((accumulator, current) => accumulator + current.price, 0)}</h6>
                                        </div>
                                    </div>
                                    <div className="mv2" style={{borderBottom: '1px solid #e5e5e5'}}/>
                                    <div className="mv5">
                                        <button className="btn btn-dark btn-lg btn-block btn-pill"
                                                onClick={this.handleCheckout}>
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

const mapStateToProps = (state) => ({
    cart: state.user.cart,
    favorites: state.user.favorites
})

export default withRouter(connect(mapStateToProps, {
    viewCart,
    checkout,
    getFavorite,
    addProductToCart,
    manageFavorite,
    changeQuantity
})(Cart));

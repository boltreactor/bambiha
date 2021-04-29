import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import Footer from "./Footers/estore-footer";
import {getProduct} from "../actions/admin";
import {connect} from "react-redux";
import {addToCart, manageFavorite, getUserProducts, getFavorite} from "../actions/user";

class Product extends Component {
    state = {
        didFav: false,
        product_id:null
    }

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id)
        this.setState({product_id:this.props.match.params.id})
        this.props.loginStatus === true && this.props.getFavorite()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.product !== prevProps.product) {
            this.props.getUserProducts(this.props.product.category_key)
        }
        if (this.props.match.params.id !== prevProps.match.params.id) {

            this.props.getProduct(this.props.match.params.id)
        }
    }

    addItemToCart = (e) => {
        e.preventDefault();
        this.props.addToCart(1, this.props.match.params.id, this.props)
        // this.props.loginStatus === true ? this.props.addToCart(1, this.props.match.params.id, this.props) : this.props.history.push('/login')

    }

    addFavorite = (e) => {
        e.preventDefault();
        this.props.loginStatus === true ? this.props.manageFavorite(this.props.match.params.id, this.props) : this.props.history.push('/login')
    }
    checkFavorite = (product_key) => {

        let fav = "favorite_border";
        if (this.props.loginStatus === true) {
            for (let i = 0; i < this.props.favorites.length; i++) {
                if (this.props.favorites[i].product_key === product_key) {
                    fav = "favorite"
                }
            }
        }
        return fav
    }

    render() {

        const {product} = this.props;
        return (
            <div className="page">
                <div className="page__content">
                    {/* Banner */}
                    <section className="banner">
                        <div className="banner-wrapper gray tc my-page">
                            <h5 className="bold">Free Shipping &amp; 60-Day Free Returns</h5>
                            <div className="mt1">
                                <Link to="#" className="link-mute link-dark">
                                    <h5 className="bold">Join Now</h5>
                                </Link>
                            </div>
                        </div>
                    </section>
                    {/* Hero */}
                    <section className="container xl">
                        <div className="mv5"/>
                        <div className="row mb0">
                            <div className="col s12 m8 l8">
                                <div className="row mb0">
                                    <div className="col s12">
                                        <div className="show-sm mb3">
                                            <div className="mb2">
                                                <h6>Men's Shoe</h6>
                                            </div>
                                            <div className="flex">
                                                <div className="flex-grow-1 mr2">
                                                    <h4>{product.title}</h4>
                                                </div>
                                                <div>
                                                    <h6>{product.price}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {product.images !== undefined && product.images.length>0? product.images.map((img, index) => {
                                        return <div key={index} className="col s12 m6 l6 mb3">
                                            <Link to={`/product/detail/${this.props.match.params.id}`}>
                                                <div className="img-wrapper">
                                                    <img className="w-100 h-100" src={img} alt=""/>
                                                </div>
                                            </Link>
                                        </div>
                                    }):
                                    <div  className="col s12 m6 l6 mb3">
                                            <Link to={'#'}>
                                                <div className="img-wrapper">
                                                    <img className="w-100 h-100" src={"/static/show-1.jpeg"} alt=""/>
                                                </div>
                                            </Link>
                                        </div>}

                                </div>
                            </div>
                            <div className="col s12 m4 l4 mb3">
                                {/* */}
                                <div className="show-lg show-md mb3">
                                    <div className="mb2">
                                        <h6>{product.description}</h6>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-grow-1 mr2">
                                            <h4>{product.title}</h4>
                                        </div>
                                        <div>
                                            <h6>{product.price}</h6>
                                        </div>
                                    </div>
                                    <div className="mb2">
                                        {product.product_status === 0 &&
                                        <p style={{color: "red"}}>Product Not Available</p>}
                                    </div>
                                </div>
                                <div className="color-way db">
                                    <div className="mb3 ph0 ">
                                        <div className="color-way__image-wrapper mb3 hide-scrollbar">
                                            <div className="list">
                                                {product.images !== undefined && product.images.length>0? product.images.map((img, index) => {
                                                    return <div key={index}>
                                                        <Link to="#" className="link-mute dib relative">
                                                            <div className="relative">
                                                                <div className="mr2 mb1">
                                                                    <img src={img} className="color-images" alt=""/>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>}):
                                                    <div>
                                                        <Link to="#" className="link-mute dib relative">
                                                            <div className="relative">
                                                                <div className="mr2 mb1">
                                                                    <img src={"/static/show-1.jpeg"} className="color-images" alt=""/>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* */}
                                {product.size && <div>
                                    <div className="size-guide pt3">
                                        <div className="flex">
                                            <div className="flex-grow-1 mr2">
                                                <h6>Select Size</h6>
                                            </div>
                                            <div>
                                                <Link to="#" className="link-mute">
                                                    <h6>Size Guide</h6>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <form className="mv3">
                                        <div className="ph2">
                                            <div className="size-grid">
                                                <div className="relative">
                                                    <input id="product-size" name="size" type="radio" disabled
                                                           className="visually-hidden" defaultValue="3.5"/>
                                                    <label htmlFor="product-size">
                                                        3.5
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input id="product-size" name="size" type="radio" disabled
                                                           className="visually-hidden" defaultValue="3.5"/>
                                                    <label htmlFor="product-size">
                                                        3.5
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input id="product-size" name="size" type="radio" disabled
                                                           className="visually-hidden" defaultValue="3.5"/>
                                                    <label htmlFor="product-size">
                                                        3.5
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input id="product-size" name="size" type="radio"
                                                           className="visually-hidden" defaultValue="3.5"/>
                                                    <label htmlFor="product-size">
                                                        3.5
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input id="product-size" name="size" type="radio" disabled
                                                           className="visually-hidden" defaultValue="3.5"/>
                                                    <label htmlFor="product-size">
                                                        3.5
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input id="product-size" name="size" type="radio" disabled
                                                           className="visually-hidden" defaultValue="3.5"/>
                                                    <label htmlFor="product-size">
                                                        3.5
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input id="product-size" name="size" type="radio" disabled
                                                           className="visually-hidden" defaultValue="3.5"/>
                                                    <label htmlFor="product-size">
                                                        3.5
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input id="product-size" name="size" type="radio" disabled
                                                           className="visually-hidden" defaultValue="3.5"/>
                                                    <label htmlFor="product-size">
                                                        3.5
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input id="product-size" name="size" type="radio" disabled
                                                           className="visually-hidden" defaultValue="3.5"/>
                                                    <label htmlFor="product-size">
                                                        3.5
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>}
                                {/* */}
                                <div className="mv5">
                                    <div className="mb3">
                                        <Link to="/cart" className="link-mute">
                                            <button className="btn btn-dark btn-lg btn-block btn-pill" onClick={e => {
                                                this.addItemToCart(e)
                                            }}>
                                                Add to Bag
                                            </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-dark btn-lg btn-block btn-pill"
                                                onClick={e => {
                                                    this.addFavorite(e)
                                                }}>
                                            Favourite <i
                                            className="material-icons-outlined v-mid"
                                            style={{color: "#ff4136"}}>{this.checkFavorite(product.id)}</i>
                                        </button>
                                    </div>
                                </div>
                                {/* */}
                                <div className="mv4 mh4-m mh4-l">
                                    <p className="m">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="mt5 mb3">
                                    <h4>You Might Also Like</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {this.props.products && this.props.products.length > 0 && this.props.products.filter(product=>product.id!==this.state.product_id).slice(0, 3).map(product => {
                                return <div key={product.id} className="col s12 m12 l4 mb3">
                                    <Link to={`/product/${product.id}`} className="link-mute">
                                        <div className="img-wrapper">
                                            <img className="w-100 h-100"
                                                 src={product.images.length !== 0 ? product.images[0] : "/static/show-1.jpeg"}
                                                 alt=""/>
                                        </div>
                                    </Link>
                                    <div className="mv3">
                                        <div style={{float: "right"}}>{item.status === 0 &&
                                        <p style={{color: "red"}}>Product Not Available</p>}</div>
                                    </div>
                                </div>
                            })}

                        </div>
                        <div className="mv5"/>
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    product: state.admin.product,
    favorites: state.user.favorites,
    loginStatus: state.authentication.loginStatus,
    products: state.user.products
})

export default withRouter(connect(mapStateToProps, {
    getProduct,
    addToCart,
    manageFavorite,
    getFavorite,
    getUserProducts
})(Product));

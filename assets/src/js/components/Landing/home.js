import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from "react-router-dom";
import Footer from "../Footers/estore-footer";
import {getUser} from "../../actions/profile";


class Home extends Component {

    componentDidMount() {
        if (this.props.loginStatus) {
            this.props.getUser();
        }
    }

    render() {
        const product_key='ag5iYW1iaWhhLTMwNTEwN3IrCxIIQ2F0ZWdvcnkiCGNhdGVnb3J5DAsSCENhdGVnb3J5GICAgJjHoIIJDA'
        return (

            <div className="page">
                <div className="page__content">
                    {/* Banner */}
                    <section className="banner">
                        <div className="banner-wrapper gray tc my-page">
                            <h5 className="bold">Free Shipping & 60-Day Free Returns</h5>
                            <div className="mt1">
                                <Link to="/login" className="link-mute link-dark">
                                    <h5 className="bold">Join Now</h5>
                                </Link>
                            </div>
                        </div>
                    </section>
                    {/* New Release */}
                    {/* Hero */}
                    <section className="container xl">
                        <div className="row">
                            <div className="col s12 l12">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/b-8.jpeg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
                                        <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                                        <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: "100px"}}>
                                            SHOP
                                        </button>
                                    </figcaption>
                                    <Link to={`/category/${product_key}`} className="link-mute img-link"/>
                                </figure>
                            </div>
                            <div className="col s12 l6 pr0-l">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/b-1.jpeg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
                                        <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                                        <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                                            SHOP
                                        </button>
                                    </figcaption>
                                    <Link to="#" className="link-mute img-link"/>
                                </figure>
                            </div>
                            <div className="col s12 l6 pl0-l">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/b-10.jpeg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
                                        <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                                        <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                                            SHOP
                                        </button>
                                    </figcaption>
                                    <Link to="#" className="link-mute img-link"/>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="mt5 mb3">
                                    <h3>The Latest And Greatest</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/w-1.jpeg" alt=""/>
                                </div>
                                <figcaption>
                                    <div className="mv3">
                                        <h3>Air for Men</h3>
                                    </div>
                                    <div className="mb3">
                                        <Link to={`/category/${product_key}`}
                                              style={{
                                                  color: 'black',
                                                  fontFamily: '"Montserrat", sans-serif'
                                              }}>Shop</Link>
                                    </div>
                                </figcaption>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/m-4.jpeg" alt=""/>
                                </div>
                                <figcaption>
                                    <div className="mv3">
                                        <h3>Air for Men</h3>
                                    </div>
                                    <div className="mb3">
                                        <Link to="#"
                                              style={{
                                                  color: 'black',
                                                  fontFamily: '"Montserrat", sans-serif'
                                              }}>Shop</Link>
                                    </div>
                                </figcaption>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/n-1.jpeg" alt=""/>
                                </div>
                                <figcaption>
                                    <div className="mv3">
                                        <h3>Air for Men</h3>
                                    </div>
                                    <div className="mb3">
                                        <Link to="#"
                                              style={{
                                                  color: 'black',
                                                  fontFamily: '"Montserrat", sans-serif'
                                              }}>Shop</Link>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="mt5 mb3">
                                    <h3>Featured Styles</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 l6">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/b-4.jpeg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
                                        <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                                        <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                                            SHOP
                                        </button>
                                    </figcaption>
                                    <Link to="#" className="link-mute img-link"/>
                                </figure>
                            </div>
                            <div className="col s12 l6">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/b7.jpg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
                                        <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                                        <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                                            SHOP
                                        </button>
                                    </figcaption>
                                    <Link to="#" className="link-mute img-link"/>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="mt5 mb3">
                                    <h3>New Bambiha Arrivals</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/m-8.jpeg" alt=""/>
                                </div>
                                <figcaption>
                                    <div className="mv3">
                                        <h3>Air for Men</h3>
                                    </div>
                                    <div className="mb3">
                                        <Link to="#"
                                              style={{
                                                  color: 'black',
                                                  fontFamily: '"Montserrat", sans-serif'
                                              }}>Shop</Link>
                                    </div>
                                </figcaption>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/m-9.jpeg" alt=""/>
                                </div>
                                <figcaption>
                                    <div className="mv3">
                                        <h3>Air for Men</h3>
                                    </div>
                                    <div className="mb3">
                                        <Link to="#"
                                              style={{
                                                  color: 'black',
                                                  fontFamily: '"Montserrat", sans-serif'
                                              }}>Shop</Link>
                                    </div>
                                </figcaption>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/m-12.jpeg" alt=""/>
                                </div>
                                <figcaption>
                                    <div className="mv3">
                                        <h3>Air for Men</h3>
                                    </div>
                                    <div className="mb3">
                                        <Link to="#"
                                              style={{
                                                  color: 'black',
                                                  fontFamily: '"Montserrat", sans-serif'
                                              }}>Shop</Link>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="mt5 mb3">
                                    <h3>Trending Now</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 l6 pr0-l">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/m-g-3.jpeg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
                                        <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                                        <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                                            SHOP
                                        </button>
                                    </figcaption>
                                    <Link to="#" className="link-mute img-link"/>
                                </figure>
                            </div>
                            <div className="col s12 l6 pl0-l">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/w-g-1.jpeg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
                                        <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                                        <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                                            SHOP
                                        </button>
                                    </figcaption>
                                    <Link to="#" className="link-mute img-link"/>
                                </figure>
                            </div>
                        </div>
                        <div className="row hero-text">
                            <div className="col s12 tc">
                                <h1 className="bold mt5 tracked-tight">
                                    FIND THAT
                                    <br/>
                                    FLEECE FEELING
                                </h1>
                                <p className="l mt1">
                                    From getting cozy to getting after it, we've got the fleece for you.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="mt5 mb3">
                                    <h3>More To Explore</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/m-1.jpeg" alt=""/>
                                </div>
                                <figcaption>
                                    <div className="mv3">
                                        <h3>Air for Men</h3>
                                    </div>
                                    <div className="mb3">
                                        <Link to="#"
                                           style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</Link>
                                    </div>
                                </figcaption>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/m-2.jpeg" alt=""/>
                                </div>
                                <figcaption>
                                    <div className="mv3">
                                        <h3>Air for Men</h3>
                                    </div>
                                    <div className="mb3">
                                        <Link to="#"
                                           style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</Link>
                                    </div>
                                </figcaption>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/m-4.jpeg" alt=""/>
                                </div>
                                <figcaption>
                                    <div className="mv3">
                                        <h3>Air for Men</h3>
                                    </div>
                                    <div className="mb3">
                                        <Link to="#"
                                           style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</Link>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                        <div className="row hero-text">
                            <div className="col s12 tc">
                                <h1 className="bold mt5 tracked-tight">
                                    BAMBIHA
                                    <br/>
                                    Is For Everybody
                                </h1>
                            </div>
                        </div>
                        {!this.props.loginStatus && <div className="mv4 tc pb4">
                            <Link to='/signup'>
                                <button className="btn btn-dark btn-lg btn-pill">
                                    Join Us
                                </button>
                            </Link>
                            <Link to='/login'>
                                <button className="btn btn-dark btn-lg btn-pill">
                                    Sign In
                                </button>
                            </Link>
                        </div>}
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.authentication.loginStatus,
})

export default withRouter(connect(mapStateToProps, {getUser})((Home)));

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
        return (

            <div className="page">
                <div className="page__content">
                    {/* Banner */}
                    <section className="banner">
                        <div className="banner-wrapper gray tc my-page">
                            <h5 className="bold">Free Shipping & 60-Day Free Returns</h5>
                            <div className="mt1">
                                <Link to="#" className="link-mute link-dark">
                                    <h5 className="bold">Join Now</h5>
                                </Link>
                            </div>
                        </div>
                    </section>
                    {/* New Release */}
                    {/* Hero */}
                    <section className="container xl">
                        <div className="row">
                            <div className="col s12 l6 pr0-l">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/dumy-pics1.jpg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
                                    </figcaption>
                                    <Link to="#" className="link-mute img-link"/>
                                </figure>
                            </div>
                            <div className="col s12 l6 pl0-l">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/dumy-pics3.jpg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
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
                                    <img className="w-100 h-100" src="/static/dumy-pics4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/dumy-pics7.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/dumy-pics8.jpg" alt=""/>
                                </div>
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
                                        <img className="w-100 h-100" src="/static/dumy-pics6.jpg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
                                    </figcaption>
                                    <Link to="#" className="link-mute img-link"/>
                                </figure>
                            </div>
                            <div className="col s12 l6">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/dumy-pics8.jpg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
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
                                    <img className="w-100 h-100" src="/static/shorts.jpeg" alt=""/>
                                </div>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/kid.jpeg" alt=""/>
                                </div>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/t-shirt.jpeg" alt=""/>
                                </div>
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
                                        <img className="w-100 h-100" src="/static/dumy-pics1.jpg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
                                    </figcaption>
                                    <Link to="#" className="link-mute img-link"/>
                                </figure>
                            </div>
                            <div className="col s12 l6 pl0-l">
                                <figure className="relative ma0">
                                    <div className="img-wrapper l relative ma0 pa0 w-100">
                                        <img className="w-100 h-100" src="/static/dumy-pics2.jpg" alt=""/>
                                    </div>
                                    <figcaption className="img-caption left collapse">
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
                                    <img className="w-100 h-100" src="/static/jacket.jpeg" alt=""/>
                                </div>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/shorts.jpeg" alt=""/>
                                </div>
                            </div>
                            <div className="col s12 m12 l4 mb3">
                                <div className="img-wrapper">
                                    <img className="w-100 h-100" src="/static/show-2.jpeg" alt=""/>
                                </div>
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
                        <div className="mv4 tc pb4">
                            <button className="btn btn-dark btn-lg btn-pill">
                                Join Us
                            </button>
                            <Link to='/login'>
                                <button className="btn btn-dark btn-lg btn-pill">
                                    Sign In
                                </button>
                            </Link>
                        </div>
                    </section>
                </div>
              <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(null, {getUser})((Home)));

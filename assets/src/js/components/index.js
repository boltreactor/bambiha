import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import Footer from "./Footers/estore-footer";

class Index extends Component {
    render() {
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
          {/* New Release */}
          {/* Hero */}
          <section className="container xl">
            <div className="row">
              <div className="col s12 l6 pr0-l">
                <figure className="relative ma0">
                  <div className="img-wrapper l relative ma0 pa0 w-100">
                  </div>
                  <figcaption className="img-caption left collapse">
                  </figcaption>
                  <Link to="#" className="link-mute img-link" />
                </figure>
              </div>
              <div className="col s12 l6 pl0-l">
                <figure className="relative ma0">
                  <div className="img-wrapper l relative ma0 pa0 w-100">
                  </div>
                  <figcaption className="img-caption left collapse">
                  </figcaption>
                  <Link to="#" className="link-mute img-link" />
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
                </div>
              </div>
              <div className="col s12 m12 l4 mb3">
                <div className="img-wrapper">
                </div>
              </div>
              <div className="col s12 m12 l4 mb3">
                <div className="img-wrapper">
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
                  </div>
                  <figcaption className="img-caption left collapse">
                  </figcaption>
                  <Link to="#" className="link-mute img-link" />
                </figure>
              </div>
              <div className="col s12 l6">
                <figure className="relative ma0">
                  <div className="img-wrapper l relative ma0 pa0 w-100">
                  </div>
                  <figcaption className="img-caption left collapse">
                  </figcaption>
                  <Link to="#" className="link-mute img-link" />
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
                </div>
              </div>
              <div className="col s12 m12 l4 mb3">
                <div className="img-wrapper">
                </div>
              </div>
              <div className="col s12 m12 l4 mb3">
                <div className="img-wrapper">
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
                  </div>
                  <figcaption className="img-caption left collapse">
                  </figcaption>
                  <Link to="#" className="link-mute img-link" />
                </figure>
              </div>
              <div className="col s12 l6 pl0-l">
                <figure className="relative ma0">
                  <div className="img-wrapper l relative ma0 pa0 w-100">
                  </div>
                  <figcaption className="img-caption left collapse">
                  </figcaption>
                  <Link to="#" className="link-mute img-link" />
                </figure>
              </div>
            </div>
            <div className="row hero-text">
              <div className="col s12 tc">
                <h1 className="bold mt5 tracked-tight">
                  FIND THAT
                  <br />
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
                </div>
              </div>
              <div className="col s12 m12 l4 mb3">
                <div className="img-wrapper">
                </div>
              </div>
              <div className="col s12 m12 l4 mb3">
                <div className="img-wrapper">
                </div>
              </div>
            </div>
            <div className="row hero-text">
              <div className="col s12 tc">
                <h1 className="bold mt5 tracked-tight">
                  BAMBIHA
                  <br />
                  Is For Everybody
                </h1>
              </div>
            </div>
            <div className="mv4 tc pb4">
              <button className="btn btn-dark btn-lg btn-pill">
                Join Us
              </button>
              <button className="btn btn-dark btn-lg btn-pill">
                Sign In
              </button>
            </div>
          </section>
        </div>
               <Footer/>
      </div>
        );
    }
}

export default Index;

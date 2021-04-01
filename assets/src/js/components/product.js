import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import Footer from "./Footers/estore-footer";
import { getProduct} from "../actions/admin";
import {connect} from "react-redux";

class Product extends Component {


    componentDidMount() {
      this.props.getProduct(this.props.match.params.id)
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
            <div className="mv5" />
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


                  {product.images !== undefined && product.images.map((img, index)=> {
                  return <div key={index} className="col s12 m6 l6 mb3">
                    <Link to="/product/detail">
                      <div className="img-wrapper">
                        <img className="w-100 h-100" src={img} alt="" />
                      </div>
                    </Link>
                  </div>
                  })}



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
                </div>
                {/* */}
                <div className="color-way db">
                  <div className="mb3 ph0 ">
                    <div className="color-way__image-wrapper mb3 hide-scrollbar">
                      <div className="list">
                        <Link to="#" className="link-mute dib relative active">
                          <div className="relative">
                            <div className="mr2 mb1">
                              <img src="/static/show-1.jpeg" className="color-images" alt="" />
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="link-mute dib relative">
                          <div className="relative">
                            <div className="mr2 mb1">
                              <img src="/static/img-noise.png" className="color-images" alt="" />
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="link-mute dib relative">
                          <div className="relative">
                            <div className="mr2 mb1">
                              <img src="/static/img-noise.png" className="color-images" alt="" />
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="link-mute dib relative">
                          <div className="relative">
                            <div className="mr2 mb1">
                              <img src="/static/img-noise.png" className="color-images" alt="" />
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="link-mute dib relative">
                          <div className="relative">
                            <div className="mr2 mb1">
                              <img src="/static/img-noise.png" className="color-images" alt="" />
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="link-mute dib relative">
                          <div className="relative">
                            <div className="mr2 mb1">
                              <img src="/static/img-noise.png" className="color-images" alt="" />
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="link-mute dib relative">
                          <div className="relative">
                            <div className="mr2 mb1">
                              <img src="/static/img-noise.png" className="color-images" alt="" />
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="link-mute dib relative">
                          <div className="relative">
                            <div className="mr2 mb1">
                              <img src="/static/img-noise.png" className="color-images" alt="" />
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="link-mute dib relative">
                          <div className="relative">
                            <div className="mr2 mb1">
                              <img src="/static/img-noise.png" className="color-images" alt="" />
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="link-mute dib relative">
                          <div className="relative">
                            <div className="mr2 mb1">
                              <img src="/static/img-noise.png" className="color-images" alt="" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* */}
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
                <form action className="mv3">
                  <div className="ph2">
                    <div className="size-grid">
                      <div className="relative">
                        <input id="product-size" name="size" type="radio" disabled className="visually-hidden" defaultValue="3.5" />
                        <label htmlFor="product-size">
                          3.5
                        </label>
                      </div>
                      <div className="relative">
                        <input id="product-size" name="size" type="radio" disabled className="visually-hidden" defaultValue="3.5" />
                        <label htmlFor="product-size">
                          3.5
                        </label>
                      </div>
                      <div className="relative">
                        <input id="product-size" name="size" type="radio" disabled className="visually-hidden" defaultValue="3.5" />
                        <label htmlFor="product-size">
                          3.5
                        </label>
                      </div>
                      <div className="relative">
                        <input id="product-size" name="size" type="radio" className="visually-hidden" defaultValue="3.5" />
                        <label htmlFor="product-size">
                          3.5
                        </label>
                      </div>
                      <div className="relative">
                        <input id="product-size" name="size" type="radio" disabled className="visually-hidden" defaultValue="3.5" />
                        <label htmlFor="product-size">
                          3.5
                        </label>
                      </div>
                      <div className="relative">
                        <input id="product-size" name="size" type="radio" disabled className="visually-hidden" defaultValue="3.5" />
                        <label htmlFor="product-size">
                          3.5
                        </label>
                      </div>
                      <div className="relative">
                        <input id="product-size" name="size" type="radio" disabled className="visually-hidden" defaultValue="3.5" />
                        <label htmlFor="product-size">
                          3.5
                        </label>
                      </div>
                      <div className="relative">
                        <input id="product-size" name="size" type="radio" disabled className="visually-hidden" defaultValue="3.5" />
                        <label htmlFor="product-size">
                          3.5
                        </label>
                      </div>
                      <div className="relative">
                        <input id="product-size" name="size" type="radio" disabled className="visually-hidden" defaultValue="3.5" />
                        <label htmlFor="product-size">
                          3.5
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
                {/* */}
                <div className="mv5">
                  <div className="mb3">
                    <Link to="/cart" className="link-mute">
                      <button className="btn btn-dark btn-lg btn-block btn-pill">
                        Add to Bag
                      </button>
                    </Link>
                  </div>
                  <div className>
                    <button className="btn btn-outline-dark btn-lg btn-block btn-pill">
                      Favourite <i className="material-icons-outlined v-mid">favorite_border</i>
                    </button>
                  </div>
                </div>
                {/* */}
                <div className="mv4 mh4-m mh4-l">
                  <p className="m">
                    The Nike Air Max 270 is our first-ever intentional lifestyle Air Max, delivering energy with every springy step. Updated with a varsity color combo and modernized comfort, it nods to the original 1991 Air Max 180 with its exaggerated tongue top and heritage-inspired tongue logo design.
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
              <div className="col s12 m12 l4 mb3">
                <Link to="/product" className="link-mute">
                  <div className="img-wrapper">
                    <img className="w-100 h-100" src="/static/dumy-pics8.jpg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="col s12 m12 l4 mb3">
                <Link to="/product" className="link-mute">
                  <div className="img-wrapper">
                    <img className="w-100 h-100" src="/static/dumy-pics3.jpg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="col s12 m12 l4 mb3">
                <Link to="/product" className="link-mute">
                  <div className="img-wrapper">
                    <img className="w-100 h-100" src="/static/dumy-pics4.jpg" alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="mv5" />
          </section>
        </div>
              <Footer/>
      </div>
        );
    }
}

const mapStateToProps = (state) => ({
    product: state.admin.product
})

export default withRouter(connect(mapStateToProps, {getProduct})(Product));

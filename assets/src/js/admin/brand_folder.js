import React, {Component} from 'react';
import {Link} from "react-router-dom"
import Navigation from "./navigation";

class BrandFolder extends Component {
    render() {
        return (
           <div className="page">
        <div className="page__content">
          <div className="main-wrapper">
            <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
              <div className="container l mb7">
                <header className="mb4 db my-page">
                  <h1 className="bold">Personalise Home</h1>
                </header>
                <div className="content">
                  <section>
                    <div className="row">
                      <div className="col s12 l12">
                        <figure className="relative ma0">
                          {/* Action */}
                          <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                            <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                              <i className="material-icons">add_a_photo</i>
                            </button>
                          </div>
                          {/* Image */}
                          <div className="img-wrapper l relative ma0 pa0 w-100">
                            <img className="w-100 h-100" src="/static/b-8.jpeg" alt="" />
                          </div>
                          <figcaption className="img-caption left collapse">
                            <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                            <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                              SHOP
                            </button>
                          </figcaption>
                          {/* URL */}
                          <a href="#" className="link-mute img-link" />
                        </figure>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m6 l6">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 l6 pr0-l">
                        <figure className="relative ma0">
                          {/* Action */}
                          <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                            <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                              <i className="material-icons">add_a_photo</i>
                            </button>
                          </div>
                          {/* Image */}
                          <div className="img-wrapper l relative ma0 pa0 w-100">
                            <img className="w-100 h-100" src="/static/b-1.jpeg" alt="" />
                          </div>
                          <figcaption className="img-caption left collapse">
                            <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                            <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                              SHOP
                            </button>
                          </figcaption>
                          {/* URL */}
                          <a href="#" className="link-mute img-link" />
                        </figure>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m10 l8">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col s12 l6 pl0-l">
                        <figure className="relative ma0">
                          {/* Action */}
                          <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                            <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                              <i className="material-icons">add_a_photo</i>
                            </button>
                          </div>
                          {/* Image */}
                          <div className="img-wrapper l relative ma0 pa0 w-100">
                            <img className="w-100 h-100" src="/static/b-10.jpeg" alt="" />
                          </div>
                          <figcaption className="img-caption left collapse">
                            <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                            <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                              SHOP
                            </button>
                          </figcaption>
                          {/* URL */}
                          <a href="#" className="link-mute img-link" />
                        </figure>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m10 l8">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12">
                        <div className="mt5">
                          <h3>The Latest And Greatest</h3>
                        </div>
                      </div>
                    </div>
                    {/* Add detail */}
                    <div className="mb3">
                      <div>
                        <div className="row">
                          <div className="col s12 m6 l6">
                            <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                              <span className="mdc-notched-outline">
                                <span className="mdc-notched-outline__leading" />
                                <span className="mdc-notched-outline__trailing" />
                              </span>
                              <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l4 mb3 relative">
                        {/* Action */}
                        <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                          <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                            <i className="material-icons">add_a_photo</i>
                          </button>
                        </div>
                        {/* Image */}
                        <div className="img-wrapper">
                          <img className="w-100 h-100" src="/static/w-1.jpeg" alt="" />
                        </div>
                        <figcaption>
                          <div className="mv3">
                            <h3>Air for Men</h3>
                          </div>
                          {/* URL */}
                          <div className="mb3">
                            <a href="#" style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</a>
                          </div>
                        </figcaption>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m10 l8">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col s12 m12 l4 mb3 relative">
                        {/* Action */}
                        <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                          <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                            <i className="material-icons">add_a_photo</i>
                          </button>
                        </div>
                        {/* Image */}
                        <div className="img-wrapper">
                          <img className="w-100 h-100" src="/static/m-4.jpeg" alt="" />
                        </div>
                        <figcaption>
                          <div className="mv3">
                            <h3>Air for Men</h3>
                          </div>
                          {/* URL */}
                          <div className="mb3">
                            <a href="#" style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</a>
                          </div>
                        </figcaption>
                      </div>
                      <div className="col s12 m12 l4 mb3 relative">
                        {/* Action */}
                        <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                          <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                            <i className="material-icons">add_a_photo</i>
                          </button>
                        </div>
                        {/* Image */}
                        <div className="img-wrapper">
                          <img className="w-100 h-100" src="/static/n-1.jpeg" alt="" />
                        </div>
                        <figcaption>
                          <div className="mv3">
                            <h3>Air for Men</h3>
                          </div>
                          {/* URL */}
                          <div className="mb3">
                            <a href="#" style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</a>
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
                          {/* Action */}
                          <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                            <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                              <i className="material-icons">add_a_photo</i>
                            </button>
                          </div>
                          {/* Image */}
                          <div className="img-wrapper l relative ma0 pa0 w-100">
                            <img className="w-100 h-100" src="/static/b-4.jpeg" alt="" />
                          </div>
                          <figcaption className="img-caption left collapse">
                            <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                            <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                              SHOP
                            </button>
                          </figcaption>
                          {/* URL */}
                          <a href="#" className="link-mute img-link" />
                        </figure>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m6 l6">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col s12 l6">
                        <figure className="relative ma0">
                          {/* Action */}
                          <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                            <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                              <i className="material-icons">add_a_photo</i>
                            </button>
                          </div>
                          {/* Image */}
                          <div className="img-wrapper l relative ma0 pa0 w-100">
                            <img className="w-100 h-100" src="/static/b-11.jpeg" alt="" />
                          </div>
                          <figcaption className="img-caption left collapse">
                            <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                            <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                              SHOP
                            </button>
                          </figcaption>
                          {/* URL */}
                          <a href="#" className="link-mute img-link" />
                        </figure>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m6 l6">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
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
                      <div className="col s12 m12 l4 mb3 relative">
                        {/* Action */}
                        <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                          <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                            <i className="material-icons">add_a_photo</i>
                          </button>
                        </div>
                        {/* Image */}
                        <div className="img-wrapper">
                          <img className="w-100 h-100" src="/static/shorts.jpeg" alt="" />
                        </div>
                        <figcaption>
                          <div className="mv3">
                            <h3>Air for Men</h3>
                          </div>
                          {/* URL */}
                          <div className="mb3">
                            <a href="#" style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</a>
                          </div>
                        </figcaption>
                      </div>
                      <div className="col s12 m12 l4 mb3 relative">
                        {/* Action */}
                        <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                          <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                            <i className="material-icons">add_a_photo</i>
                          </button>
                        </div>
                        {/* Image */}
                        <div className="img-wrapper">
                          <img className="w-100 h-100" src="/static/kid.jpeg" alt="" />
                        </div>
                        <figcaption>
                          <div className="mv3">
                            <h3>Air for Men</h3>
                          </div>
                          {/* URL */}
                          <div className="mb3">
                            <a href="#" style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</a>
                          </div>
                        </figcaption>
                      </div>
                      <div className="col s12 m12 l4 mb3 relative">
                        {/* Action */}
                        <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                          <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                            <i className="material-icons">add_a_photo</i>
                          </button>
                        </div>
                        {/* Image */}
                        <div className="img-wrapper">
                          <img className="w-100 h-100" src="/static/t-shirt.jpeg" alt="" />
                        </div>
                        <figcaption>
                          <div className="mv3">
                            <h3>Air for Men</h3>
                          </div>
                          {/* URL */}
                          <div className="mb3">
                            <a href="#" style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</a>
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
                          {/* Action */}
                          <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                            <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                              <i className="material-icons">add_a_photo</i>
                            </button>
                          </div>
                          {/* Image */}
                          <div className="img-wrapper l relative ma0 pa0 w-100">
                            <img className="w-100 h-100" src="/static/dumy-pics1.jpg" alt="" />
                          </div>
                          <figcaption className="img-caption left collapse">
                            <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                            <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                              SHOP
                            </button>
                          </figcaption>
                          {/* URL */}
                          <a href="#" className="link-mute img-link" />
                        </figure>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m6 l6">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col s12 l6 pl0-l">
                        <figure className="relative ma0">
                          {/* Action */}
                          <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                            <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                              <i className="material-icons">add_a_photo</i>
                            </button>
                          </div>
                          {/* Image */}
                          <div className="img-wrapper l relative ma0 pa0 w-100">
                            <img className="w-100 h-100" src="/static/dumy-pics2.jpg" alt="" />
                          </div>
                          <figcaption className="img-caption left collapse">
                            <h1 className="bold white mb3">BE THE BOLD SELF</h1>
                            <button className="btn btn-dark btn-lg btn-pill mb3" style={{width: '100px'}}>
                              SHOP
                            </button>
                          </figcaption>
                          {/* URL */}
                          <a href="#" className="link-mute img-link" />
                        </figure>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m6 l6">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
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
                      <div className="col s12 m12 l4 mb3 relative">
                        {/* Action */}
                        <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                          <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                            <i className="material-icons">add_a_photo</i>
                          </button>
                        </div>
                        {/* Image */}
                        <div className="img-wrapper">
                          <img className="w-100 h-100" src="/static/jacket.jpeg" alt="" />
                        </div>
                        <figcaption>
                          <div className="mv3">
                            <h3>Air for Men</h3>
                          </div>
                          {/* URL */}
                          <div className="mb3">
                            <a href="#" style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</a>
                          </div>
                        </figcaption>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m6 l6">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col s12 m12 l4 mb3 relative">
                        {/* Action */}
                        <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                          <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                            <i className="material-icons">add_a_photo</i>
                          </button>
                        </div>
                        {/* Image */}
                        <div className="img-wrapper">
                          <img className="w-100 h-100" src="/static/shorts.jpeg" alt="" />
                        </div>
                        <figcaption>
                          <div className="mv3">
                            <h3>Air for Men</h3>
                          </div>
                          {/* URL */}
                          <div className="mb3">
                            <a href="#" style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</a>
                          </div>
                        </figcaption>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m6 l6">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col s12 m12 l4 mb3 relative">
                        {/* Action */}
                        <div className="edit" style={{position: 'absolute', top: '24px', right: '24px', zIndex: 3}}>
                          <button className="btn btn-icon btn-dark" style={{borderRadius: '50%', backgroundColor: '#343a408c', borderColor: 'transparent', lineHeight: '36px'}}>
                            <i className="material-icons">add_a_photo</i>
                          </button>
                        </div>
                        {/* Image */}
                        <div className="img-wrapper">
                          <img className="w-100 h-100" src="/static/show-2.jpeg" alt="" />
                        </div>
                        <figcaption>
                          <div className="mv3">
                            <h3>Air for Men</h3>
                          </div>
                          {/* URL */}
                          <div className="mb3">
                            <a href="#" style={{color: 'black', fontFamily: '"Montserrat", sans-serif'}}>Shop</a>
                          </div>
                        </figcaption>
                        {/* Add detail */}
                        <div className="mv3">
                          <div>
                            <div className="row">
                              <div className="col s12 m6 l6">
                                <label className="label-text bold">Tagline e.g. New Arrivals <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                                  {/*
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                ! Required
                              </span>
                              <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                                Passwords do not match
                              </span>
                              */}
                                </label>
                                <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                                  <span className="mdc-notched-outline">
                                    <span className="mdc-notched-outline__leading" />
                                    <span className="mdc-notched-outline__trailing" />
                                  </span>
                                  <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter Tagline e.g. Be the bold self" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mv2">
                            <label className="label-text bold">Select Category <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                            </label>
                            <div>
                              <span>
                                <select className="select-css" name="size" id="size">
                                  <option value="cat-1">Home</option>
                                  <option value="cat-1">Men</option>
                                  <option value="cat-2">Women</option>
                                  <option value="cat-3">Men</option>
                                  <option value="cat-4">Men</option>
                                </select>
                              </span>
                            </div>
                          </div>
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
                    <div style={{position: 'fixed', bottom: '48px', right: '24px', zIndex: 4}}>
                      <button className="btn btn-primary btn-lg btn-pill">
                        Update
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
        );
    }
}

export default BrandFolder;
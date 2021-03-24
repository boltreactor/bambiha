import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import StoreDrawer from "../reusable-components/Drawers/Static/store-drawer";

class Store extends Component {
    render() {
        return (
               <div className="page">
        <div className="page__content">
          <div className="main-wrapper">
            <StoreDrawer/>
            <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
              <div className="container l">
                <div className="row mt6">
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/show-1.jpeg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/show.jpeg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/show-2.jpeg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/shorts.jpeg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/t-shirt.jpeg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/kid.jpeg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/kid.jpeg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/dumy-pics1.jpg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/dumy-pics2.jpg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/dumy-pics4.jpg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/dumy-pics5.jpg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                        <img className="w-100 h-100" src="/static/dumy-pics8.jpg" alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <div className="mv5" style={{borderBottom: '1px solid #dbe3eb'}} />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <div className="mb3">
                      <h4>Related Categories</h4>
                    </div>
                    <div className="mb3">
                      <div className="flex flex-wrap">
                        <div className="ma2 montserrat"><Link className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute" to="#0">Best Selling Products</Link></div>
                        <div className="ma2 montserrat"><Link className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute" to="#0">Best Shoes</Link></div>
                        <div className="ma2 montserrat"><Link className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute" to="#0">Best Training &amp; Gym</Link></div>
                        <div className="ma2 montserrat"><Link className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute" to="#0">New Men's Shoes</Link></div>
                        <div className="ma2 montserrat"><Link className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute" to="#0">New Sports Shoes</Link></div>
                        <div className="ma2 montserrat"><Link className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute" to="#0">Best Women's Products</Link></div>
                        <div className="ma2 montserrat"><Link className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute" to="#0">Best Selling Accessories</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
        );
    }
}

export default Store;
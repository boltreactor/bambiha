import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class Store extends Component {
    render() {
        return (
             <div className="page">
        <div className="page__content">
          <div className="main-wrapper">
            {/* */}
            <aside className="side-menu-panel hide-scrollbar">
              <div className="ph3">
                <h4 className="mv3 pt5">New Release (123)</h4>
                <ul className="store-categories">
                  <Link to="#" className="link-mute">
                    <li>Shoes</li>
                  </Link>
                  <Link to="#" className="link-mute">
                    <li>Sports Bags</li>
                  </Link>
                  <Link to="#" className="link-mute">
                    <li>Tracksuits</li>
                  </Link>
                  <Link to="#" className="link-mute">
                    <li>Socks</li>
                  </Link>
                  <Link to="#" className="link-mute">
                    <li>Base layer</li>
                  </Link>
                  <Link to="#" className="link-mute">
                    <li>Pants</li>
                  </Link>
                  <Link to="#" className="link-mute">
                    <li>Tights</li>
                  </Link>
                  <Link to="#" className="link-mute">
                    <li>Jumpsuits</li>
                  </Link>
                  <Link to="#" className="link-mute">
                    <li>Surf &amp; Swimwear</li>
                  </Link>
                  <Link to="#" className="link-mute">
                    <li>Accessories &amp; Equipment</li>
                  </Link>
                </ul>
              </div>
            </aside>
            {/* */}
            <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
              <div className="container l">
                <div className="row mt6">
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m6 l4 mb3">
                    <Link to="/product" className="link-mute">
                      <div className="img-wrapper s">
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
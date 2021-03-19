import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';
import {addProfile, getUser, setUserInfo} from "../../actions/profile";
import {addCoverPicture, addProfilePicture} from "../../actions/authentication";
import SideHeader from "./sideHeader";
import DashboardDrawer from "../../reusable-components/Drawers/Static/dashboard-drawer";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
  }


  doImageSubmit = (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("profile_image", e.target.files[0], e.target.files[0].name);
    fd.append("image_type", 'profile');

    this.props.addProfilePicture(fd, this.props);
  };
  doCoverImageSubmit = (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("cover_image", e.target.files[0], e.target.files[0].name);
    fd.append("image_type", 'cover');
    this.props.addCoverPicture(fd, this.props)
  }

  render() {
    return (
         <div className="page">
        <div className="page__content">
          {/* */}
          <div className="main-wrapper">
            {/* */}
<DashboardDrawer/>
            <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
              <div className="container l">
                {/* */}
                <header className="mb4 db flex items-center flex-wrap">
                  <div className="mb4 mb0-m mb0-l my-page">
                    <h1 className="bold">My Orders</h1>
                  </div>
                  <div className="flex-grow-1 ml3 tr">
                    {/*
                <button class="btn btn-primary btn-lg">
                  Continue Shopping
                </button>
                */}
                  </div>
                </header>
                {/* */}
                <div className="tab-wrapper">
                  {/* */}
                  <header className="tab-header">
                    <Link href="#" className="tab-item link-mute" aria-selected="true">
                      Orders
                    </Link>
                    <Link href="#" className="tab-item link-mute" aria-selected="false">
                      Help &amp; Support
                    </Link>
                  </header>
                  {/* */}
                  <div className="tab-content">
                    <div className="mb4">
                      <h3 className="bold">Orders</h3>
                    </div>
                    {/* Orders list */}
                    <div className="cart-or-bag mv4">
                      <div className="cart-item ma0">
                        <div className="flex mb3">
                          <div className="mr2 mb3">
                            <Link href="#" className="link-mute">
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
                              {/*
                          <div class="mv2">
                            <div class="dib mr3">
                              <p class="ma0" style="font-size: 16px">
                                <span>Size</span>
                                <span>
                              <select name="size" id="size">
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                              </select>
                            </span>
                              </p>
                            </div>
                            <div class="dib mr3">
                              <p class="ma0" style="font-size: 16px">
                                <span>Quantity</span>
                                <span>
                              <select name="size" id="size">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </span>
                              </p>
                            </div>
                          </div>
                          */}
                            </div>
                            <div className="actions">
                              <Link href="#" className="link-dark mr3 fw4" style={{color: 'var(--space-gray)', fontSize: '16px'}}>Move to Favourite</Link>
                              <Link href="#" className="link-dark fw4" style={{color: 'var(--space-gray)', fontSize: '16px'}}>Remove</Link>
                            </div>
                          </div>
                        </div>
                        <div className="mv3">
                          <h6>Shipping</h6>
                          <p style={{color: '#082244', fontSize: '16px', paddingBottom: '16px'}}>Arrives by <span>Wed,</span> <span>March 10, 2021</span></p>
                        </div>
                      </div>
                    </div>
                    {/* Call to action - My orders */}
                    <div className="tab-no-data">
                      <div className="tc">
                        <header className="mt3 my-page">
                          <h3 className="bold">My orders</h3>
                        </header>
                        <p>
                          You don't have any orders yet
                        </p>
                        <div className="mv3">
                          <button className="btn btn-primary btn-lg">
                            <i className="material-icons-outlined">shopping_cart</i> Continue Shopping
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Call to action - Favourites */}
                    <div className="tab-no-data">
                      <div className="tc">
                        <header className="mt3 my-page">
                          <h3 className="bold">My favourites</h3>
                        </header>
                        <p>
                          Items added to your Favorites will be saved here.
                        </p>
                        <div className="mv3">
                          <button className="btn btn-primary btn-lg">
                            <i className="material-icons-outlined">shopping_cart</i> Continue Shopping
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/* No data placeholder */}
            <main className="main hide" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
              <div className="container l mb7">
                {/* */}
                <header className="mb4 db">
                  <h1 className="bold">My Products</h1>
                </header>
                {/* */}
                <div className="content">
                  {/* */}
                  <div className="row">
                    <div className="col s12 m6">
                      <div className="shadow border rounded-sm db mb5">
                        <header className="pa3 flex items-center border-bottom">
                          <div className="flex-grow-1">
                            <h2 className="bold">Contact Hub</h2>
                          </div>
                          <div className="widget-label rounded-xs fw7">
                            FREE
                          </div>
                        </header>
                        <div className="content tc">
                          <div className="pa3">
                            <div className="mv3">
                              <img src="/assets/images/static/trial-contact-hub.png" alt="" />
                            </div>
                            <div className="mv3">
                              <h3 className="bold">
                                Stay connected to your customer base using our cloud-based Contact Hub
                              </h3>
                            </div>
                            <div className="blue-cta mv3">
                              <a href="tel:00923165953458">
                                TALK TO SALES
                              </a>
                            </div>
                            <div className="mv3">
                              <div className="caption" style={{fontSize: '.75rem'}}>(+92)316-5953-458</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m6">
                      <div className="shadow border rounded-sm db mb5">
                        <header className="pa3 flex items-center border-bottom">
                          <div className="flex-grow-1">
                            <h2 className="bold">Payments</h2>
                          </div>
                          <div className="widget-label rounded-xs fw7">
                            FREE
                          </div>
                        </header>
                        <div className="content tc">
                          <div className="pa3">
                            <div className="mv3">
                              <img src="/assets/images/static/trial-payments.png" alt="" />
                            </div>
                            <div className="mv3">
                              <h3 className="bold">
                                Allow your customers to pay you instantly online, on mobile, or through text messaging
                              </h3>
                            </div>
                            <div className="blue-cta mv3">
                              <a href="tel:00923165953458">
                                TALK TO SALES
                              </a>
                            </div>
                            <div className="mv3">
                              <div className="caption" style={{fontSize: '.75rem'}}>(+92)316-5953-458</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* */}
                  <div className="row">
                    <div className="col s12">
                      <h1 className="bold pb4">Learn More about BAMBIHA</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 m4">
                      <Link href="https://www.boltreactor.com/booking" target="_blank" className="link-mute">
                        <div className="shadow-0 rounded-sm db mb5 pa3">
                          <div className="flex">
                            <div className="mh3">
                              <img src="/assets/images/static/calendar-check-1%201.svg" alt="" style={{width: '64px'}} />
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                New Release
                              </h4>
                              <p>
                                Shop all our new arrivals #bringthefuturetolight
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col s12 m4">
                      <a href="https://www.boltreactor.com/sites" target="_blank" className="link-mute">
                        <div className="shadow-0 rounded-sm db mb5 pa3">
                          <div className="flex">
                            <div className="mh3">
                              <img src="/assets/images/static/pc-monitor@2x.svg" alt="" style={{width: '64px'}} />
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Men
                              </h4>
                              <p>
                                Convert more customers using a powerful website platform.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col s12 m4">
                      <a href="https://www.boltreactor.com/reviews" target="_blank" className="link-mute">
                        <div className="shadow-0 rounded-sm db mb5 pa3">
                          <div className="flex">
                            <div className="mh3">
                              <img src="/assets/images/static/cup-1-1.svg" alt="" style={{width: '64px'}} />
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Women
                              </h4>
                              <p>
                                Take control of your digital reputation &amp; online reviews.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col s12 m4">
                      <a href="https://www.boltreactor.com/messenger" target="_blank" className="link-mute">
                        <div className="shadow-0 rounded-sm db mb5 pa3">
                          <div className="flex">
                            <div className="mh3">
                              <img src="/assets/images/static/bubble-rounded-2-1.svg" alt="" style={{width: '64px'}} />
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Kids
                              </h4>
                              <p>
                                Easily connect with your customer base through business messaging.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col s12 m4">
                      <a href="https://www.boltreactor.com/placement" target="_blank" className="link-mute">
                        <div className="shadow-0 rounded-sm db mb5 pa3">
                          <div className="flex">
                            <div className="mh3">
                              <img src="/assets/images/static/placement.svg" alt="" style={{width: '64px'}} />
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Custom
                              </h4>
                              <p>
                                Show us your own unique designs with #bambihabyyou
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
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

const mapsStateToProps = state => ({
  user: state.user.user,
  show: state.user.show,
  msg: state.user.msg
});

export default withRouter(connect(mapsStateToProps, {
  setUserInfo,
  addProfilePicture,
  addCoverPicture,
  getUser,
  addProfile,
})(Dashboard));

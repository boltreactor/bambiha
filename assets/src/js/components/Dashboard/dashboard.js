import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Link, NavLink, withRouter} from 'react-router-dom';
import {addProfile, getUser, setUserInfo} from "../../actions/profile";
import {addProfilePicture, addCoverPicture} from "../../actions/authentication";
import MessageSnackbar from "../../reusable-components/messageSnackbar";
import SideHeader from "./sideHeader";

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
           <div className="page my-page">
        <div className="page__content">

          <div className="main-wrapper">

            <SideHeader activeClass="home" />

            <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>

              <div className="container l mb7">

                <header className="mb4 db">
                  <h1 className="bold">My Products</h1>
                </header>

                <div className="content">

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
                              <img src="/static/trial-contact-hub.png" alt="" />
                            </div>
                            <div className="mv3">
                              <h3 className="bold">
                                Stay connected to your customer base using our cloud-based Contact Hub
                              </h3>
                            </div>
                            <div className="blue-cta mv3">
                              <Link to="tel:00923165953458">
                                TALK TO SALES
                              </Link>
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
                              <img src="/static/trial-payments.png" alt="" />
                            </div>
                            <div className="mv3">
                              <h3 className="bold">
                                Allow your customers to pay you instantly online, on mobile, or through text messaging
                              </h3>
                            </div>
                            <div className="blue-cta mv3">
                              <Link to="tel:00923165953458">
                                TALK TO SALES
                              </Link>
                            </div>
                            <div className="mv3">
                              <div className="caption" style={{fontSize: '.75rem'}}>(+92)316-5953-458</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <h1 className="bold pb4">Learn More about Products</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 m4">
                      <a href="https://www.boltreactor.com/booking" target="_blank" className="link-mute">
                        <div className="shadow-0 rounded-sm db mb5 pa3">
                          <div className="flex">
                            <div className="mh3">
                              <img src="/static/calendar-check-1 1.svg" alt="" style={{width: '64px'}} />
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Booking
                              </h4>
                              <p>
                                Provide a modern and easy way for customers to book your services.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col s12 m4">
                      <a href="https://www.boltreactor.com/sites" target="_blank" className="link-mute">
                        <div className="shadow-0 rounded-sm db mb5 pa3">
                          <div className="flex">
                            <div className="mh3">
                              <img src="/static/pc-monitor@2x.svg" alt="" style={{width: '64px'}} />
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Sites
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
                              <img src="/static/cup-1-1.svg" alt="" style={{width: '64px'}} />
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Reviews
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
                              <img src="/static/bubble-rounded-2-1.svg" alt="" style={{width: '64px'}} />
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Messenger
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
                              <img src="/static/placement.svg" alt="" style={{width: '64px'}} />
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Placement
                              </h4>
                              <p>
                                Automatically control where &amp; how your business appears online.
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
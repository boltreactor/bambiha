import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';
import {addProfile, getUser, setUserInfo} from "../../actions/profile";
import {addCoverPicture, addProfilePicture} from "../../actions/authentication";
import SideHeader from "./sideHeader";
import DashboardDrawer from "../../reusable-components/Drawers/Static/dashboard-drawer";
import SmartFooter from "../Footers/estore-smart-footer";

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
          {/* */}
          <div className="main-wrapper">
            {/* */}
           <DashboardDrawer/>
            {/* No data placeholder */}
            <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
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
                            <h2 className="bold">Weekly Purchase Stats</h2>
                          </div>
                          {/*
                      <div class="widget-label rounded-xs fw7">
                        FREE
                      </div>
                      */}
                        </header>
                        <div className="content tc">
                          <div className="pa3">
                            <div className="mv3">
                              <img style={{borderRadius: '8px'}} src="/static/sales.png" alt="" />
                            </div>
                            <div className="mv3">
                              <h3 className="bold">
                                Stay connected to your daily and weekly purchases using our sales analytics.
                              </h3>
                            </div>
                            {/*
                        <div class="blue-cta mv3">
                          <a href="tel:00923165953458">
                            TALK TO SALES
                          </a>
                        </div>
                        <div class="mv3">
                          <div class="caption" style="font-size: .75rem">(+92)316-5953-458</div>
                        </div>
                        */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m6">
                      <div className="shadow border rounded-sm db mb5">
                        <header className="pa3 flex items-center border-bottom">
                          <div className="flex-grow-1">
                            <h2 className="bold">Notifications</h2>
                          </div>
                          {/*
                      <div class="widget-label rounded-xs fw7">
                        FREE
                      </div>
                      */}
                        </header>
                        <div className="content tc">
                          <div className="pa3">
                            <div className="mv3">
                              <img src="/static/notifications.png" alt="" />
                            </div>
                            <div className="mv3">
                              <h3 className="bold">
                                All your purchase, delivery and disputes Notifications will be shown here.
                              </h3>
                            </div>
                            {/*
                        <div class="blue-cta mv3">
                          <a href="tel:00923165953458">
                            TALK TO SALES
                          </a>
                        </div>
                        <div class="mv3">
                          <div class="caption" style="font-size: .75rem">(+92)316-5953-458</div>
                        </div>
                        */}
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
                      <a href="https://www.boltreactor.com/booking" target="_blank" className="link-mute">
                        <div className="shadow-0 rounded-sm db mb5 pa3">
                          <div className="flex">
                            <div className="mh3">
                              <i className="material-icons-outlined" style={{color: '#0258ff', fontSize: '36px'}}>accessibility_new</i>
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
                      </a>
                    </div>
                    <div className="col s12 m4">
                      <a href="https://www.boltreactor.com/sites" target="_blank" className="link-mute">
                        <div className="shadow-0 rounded-sm db mb5 pa3">
                          <div className="flex">
                            <div className="mh3">
                              <i className="material-icons-outlined" style={{color: '#0258ff', fontSize: '36px'}}>person</i>
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Men
                              </h4>
                              <p>
                                Explore all our men arrivals and collection
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
                              <i className="material-icons-outlined" style={{color: '#0258ff', fontSize: '36px'}}>face</i>
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Women
                              </h4>
                              <p>
                                New styles in tonal colors, perfect for adding spring energy to your style
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
                              <i className="material-icons-outlined" style={{color: '#0258ff', fontSize: '36px'}}>child_care</i>
                            </div>
                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                              <h4 className="bold mb3">
                                Kids
                              </h4>
                              <p>
                                Here’s your one-stop resource for kid-focused everything you need.
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
                              <i className="material-icons-outlined" style={{color: '#0258ff', fontSize: '36px'}}>tune</i>
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
           <SmartFooter/>
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

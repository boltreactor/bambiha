import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import FooterLaunch from "../Footers/footer-launch";
import {Link, withRouter} from "react-router-dom";
import {getUser} from "../../actions/profile";


class Home extends Component {

  componentDidMount() {
    if (this.props.loginStatus) {
      this.props.getUser();
    }
  }

  render() {
    return (
      <Fragment>
        <main className="page">
          <div className="page__content">
            <section id="hero">
              <div className="container" style={{paddingTop: '96px', paddingBottom: '96px'}}>
                <div className="row">
                  {/*<div className="col s12">*/}
                  {/*  <h1 className="hero-text text-center">*/}
                  {/*    Get to know KompassEra*/}
                  {/*  </h1>*/}
                  {/*  <h2 style={{textAlign: 'center', maxWidth: '620px', marginRight: 'auto', marginLeft: 'auto'}}>*/}
                  {/*    Welcome to the KompassEra community. Wherever you are, we have a connection for you.*/}
                  {/*  </h2>*/}
                  {/*  <div className="text-center">*/}
                  {/*    <div style={{paddingTop: '24px', paddingBottom: '24px'}}>*/}
                  {/*      <Link to="/search" className="link--mute">*/}
                  {/*        <button className="mdc-button mdc-button--large mdc-button--unelevated" onClick={() => this.props.history.push('/search')}><span className="mdc-button__ripple"/>*/}
                  {/*          Try It Now*/}
                  {/*        </button>*/}
                  {/*      </Link>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>
            </section>
            {/*<section id="media-coverage" className="text-center">*/}
            {/*  <div className="container">*/}
            {/*    <img src="/static/yc_y.svg" alt="" />*/}
            {/*    <span className="h2" style={{color: '#c8c8c8', fontWeight: 600, verticalAlign: 'middle', fontSize: '18px'}}>Startup School</span>*/}
            {/*  </div>*/}
            {/*</section>*/}
            {/*<section id="search-factors" style={{backgroundColor: '#fff', paddingTop: '8rem', paddingBottom: '8rem'}}>*/}
            {/*  <div className="container container--large">*/}
            {/*    <h2 className="text-center" style={{fontWeight: 600, color: '#585858', paddingBottom: '84px'}}>*/}
            {/*      Search by factors that matter*/}
            {/*    </h2>*/}
            {/*    <div className="row">*/}
            {/*      <div className="col s12 m3 text-center" style={{paddingBottom: '16px'}}>*/}
            {/*        <div className="text-center" style={{paddingBottom: '16px'}}>*/}
            {/*          <i className="material-icons-outlined" style={{color: '#13ab67', fontSize: '48px'}}>*/}
            {/*            location_on*/}
            {/*          </i>*/}
            {/*        </div>*/}
            {/*        <h3 className="text-center" style={{fontWeight: 600, color: '#585858', paddingBottom: '16px'}}>*/}
            {/*          Location*/}
            {/*        </h3>*/}
            {/*        <div className="text-center" style={{paddingBottom: '16px'}}>*/}
            {/*          <h2 style={{textAlign: 'center', color: 'rgba(88,88,88,.7)', fontSize: '17px', lineHeight: '26px'}}>*/}
            {/*            Search By Location And Choose Where You Want To Search for teaching.*/}
            {/*          </h2>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div className="col s12 m3 text-center" style={{paddingBottom: '16px'}}>*/}
            {/*        <div className="text-center" style={{paddingBottom: '16px'}}>*/}
            {/*          <i className="material-icons-outlined" style={{color: '#13ab67', fontSize: '48px'}}>*/}
            {/*            wc*/}
            {/*          </i>*/}
            {/*        </div>*/}
            {/*        <h3 className="text-center" style={{fontWeight: 600, color: '#585858', paddingBottom: '16px'}}>*/}
            {/*          Gender*/}
            {/*        </h3>*/}
            {/*        <h2 style={{textAlign: 'center', color: 'rgba(88,88,88,.7)', fontSize: '17px', lineHeight: '26px'}}>*/}
            {/*          Whether You Are Looking For Male Or Female We Connect You.*/}
            {/*        </h2>*/}
            {/*      </div>*/}

            {/*      <div className="col s12 m3 text-center" style={{paddingBottom: '16px'}}>*/}
            {/*        <div className="text-center" style={{paddingBottom: '16px'}}>*/}
            {/*          <i className="material-icons-outlined" style={{color: '#13ab67', fontSize: '48px'}}>*/}
            {/*            insert_invitation*/}
            {/*          </i>*/}
            {/*        </div>*/}
            {/*        <h3 className="text-center" style={{fontWeight: 600, color: '#585858', paddingBottom: '16px'}}>*/}
            {/*          Date*/}
            {/*        </h3>*/}
            {/*        <h2 style={{textAlign: 'center', color: 'rgba(88,88,88,.7)', fontSize: '17px', lineHeight: '26px'}}>*/}
            {/*          Filter Down To Your Perfect Fit With More Search Filters — Like Date.*/}
            {/*        </h2>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}
          </div>
        </main>
        {/*<FooterLaunch/>*/}
      </Fragment>
    );
  }
}

export default withRouter(connect(null, {getUser})((Home)));

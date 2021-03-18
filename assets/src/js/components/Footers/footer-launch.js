import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';


class FooterLaunch extends Component {
    render() {
        return (
            <footer style={{backgroundColor: '#6a6a6a', borderTop: '1px solid #6a6a6a'}}>
                <div className="container">
                    <div style={{paddingTop: '72px', paddingBottom: '24px'}}>
                        <h1 style={{fontWeight: 600, color: '#fff'}}>KompassEra</h1>
                    </div>
                    <div style={{
                        fontSize: '17px',
                        fontWeight: 500,
                        color: '#c8c8c8',
                        lineHeight: '36px',
                        maxWidth: '400px'
                    }}>
                        KompassEra is the fastest, easiest, and most safest way to connect.
                    </div>
                    <div className="social-media-footer" style={{paddingTop: '24px', paddingBottom: '16px'}}>
                        <div className="display-flex flex--wrap" style={{alignItems: 'center'}}>
                            <div className="menu-item">
                                <Link to="#">
                                    <svg alt="alt"  xmlns="http://www.w3.org/2000/svg" width="25px"
                                         height="25px" viewBox="0 0 24 24" fill="#00">
                                        <path
                                            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="#">
                                    <svg id="social-facebook" viewBox="0 0 18 18" width="25px" height="25px">
                                        <path
                                            d="M15.7,1.5H2.3c-0.5,0-0.8,0.4-0.8,0.8v13.3c0,0.5,0.4,0.8,0.8,0.8h7.2v-5.8h-2V8.4h2V6.8c0-1.9,1.2-3,2.9-3 c0.8,0,1.5,0.1,1.7,0.1v2l-1.2,0c-0.9,0-1.1,0.4-1.1,1.1v1.4h2.2l-0.3,2.3h-1.9v5.8h3.8c0.5,0,0.8-0.4,0.8-0.8V2.3 C16.5,1.9,16.1,1.5,15.7,1.5z"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="#">
                                    <svg id="social-twitter" viewBox="0 0 18 18" width="25px" height="25px">
                                        <path
                                            d="M16.5,4.3c-0.6,0.2-1.1,0.4-1.8,0.5c0.6-0.4,1.1-1,1.4-1.7c-0.6,0.4-1.3,0.6-2,0.8c-0.6-0.6-1.4-1-2.2-1 c-1.7,0-3.1,1.4-3.1,3.1c0,0.2,0,0.5,0.1,0.7C6.3,6.5,4.1,5.3,2.5,3.4C2.3,3.9,2.1,4.4,2.1,5c0,1.1,0.5,2,1.4,2.6 c-0.5,0-1-0.2-1.4-0.4c0,0,0,0,0,0c0,1.5,1.1,2.8,2.5,3.1c-0.3,0.1-0.5,0.1-0.8,0.1c-0.2,0-0.4,0-0.6-0.1c0.4,1.2,1.5,2.1,2.9,2.2 c-1.1,0.8-2.4,1.3-3.8,1.3c-0.2,0-0.5,0-0.7,0c1.4,0.9,3,1.4,4.7,1.4c5.7,0,8.8-4.7,8.8-8.9c0-0.1,0-0.3,0-0.4 C15.6,5.5,16.1,4.9,16.5,4.3"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="#">
                                    <svg id="social-mail" viewBox="0 0 18 18" width="25px" height="25px">
                                        <path
                                            d="M9,8.2L3,4.5h12L9,8.2z M15,13.5H3V6l6,3.8L15,6V13.5z M15,3H3C2.2,3,1.5,3.7,1.5,4.5l0,9C1.5,14.3,2.2,15,3,15 h12c0.8,0,1.5-0.7,1.5-1.5v-9C16.5,3.7,15.8,3,15,3z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingTop: '24px', paddingBottom: '24px', fontSize: '17px', fontWeight: 600}}>
                        <Link to="#" style={{color: '#c8c8c8', paddingRight: '24px'}}>Privacy Policy</Link> <Link to="#"
                                                                                                                  style={{color: '#c8c8c8'}}>Terms
                        of Use</Link>
                    </div>
                    <div style={{
                        paddingBottom: '96px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#c8c8c8',
                        lineHeight: '36px'
                    }}>
                        © All rights reserved to Bolt Reactor | KompassEra
                    </div>
                </div>
            </footer>
        );
    }
}

export default withRouter(FooterLaunch);
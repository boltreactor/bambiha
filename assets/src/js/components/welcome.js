import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import WelcomeHeader from "./Headers/welcome-header";


class Welcome extends Component {
    render() {
        return (
            <div>
                <WelcomeHeader/>
                <main className="page">
                    <div className="page__content">
                        <div className="container">
                            <div id="alerts"/>
                            <div id="global-status-container">
                                <div id="global-status"/>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <div className="welcome" style={{textAlign: 'center'}}>
                                        <img src="/static/welcome.jpg" alt=""/>
                                        <h1>Thank you for joining Bambiha</h1>
                                        <p>Please spend two minutes to answer the following survey. This will help
                                            parents and community managers on our platform find your listing.</p>
                                        <Link className="link--mute" to="/settings">
                                            <button className="mdc-button mdc-button--large mdc-button--unelevated">
                                                <span className="mdc-button__ripple"/>
                                                Get started
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default withRouter((Welcome));
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class SmartFooter extends Component {
    render() {
        return (
            <footer className="main-footer">
        <div className="flex relative ph3-m ph3-l ph2 pv2 footer-container">
          <div className="flex-grow-1">
            <span className="hide-sm">Powered by Bolt Reactor</span>
            <span className="separator hide-sm">|</span>
            <span><Link to="#">Terms of Service</Link></span>
            <span className="separator">|</span>
            <span><Link to="#">Privacy Policy</Link></span>
          </div>
          <div>
            <span><Link to="#">FAQ</Link></span>
            <span className="separator">|</span>
            <span><Link to="#">Feedback</Link></span>
          </div>
        </div>
      </footer>
        );
    }
}

export default SmartFooter;
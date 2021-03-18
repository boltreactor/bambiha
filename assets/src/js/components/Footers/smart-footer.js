import React, {Component} from 'react';

class SmartFooter extends Component {
    render() {
        return (
            <footer className="main-footer">
        <div className="flex relative ph3-m ph3-l ph2 pv2 footer-container">
          <div className="flex-grow-1">
            <span className="hide-sm">Powered by Bolt Reactor</span>
            <span className="separator hide-sm">|</span>
            <span><a href="#">Terms of Service</a></span>
            <span className="separator">|</span>
            <span><a href="#">Privacy Policy</a></span>
          </div>
          <div>
            <span><a href="#">FAQ</a></span>
            <span className="separator">|</span>
            <span><a href="#">Feedback</a></span>
          </div>
        </div>
      </footer>
        );
    }
}

export default SmartFooter;
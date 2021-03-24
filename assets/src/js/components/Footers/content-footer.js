import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class ContentFooter extends Component {
    render() {
        return (

            <div className="content__footer">
                <div className="display-flex align-items--center">
                    <div className="flex__grow-1 mdc-typography--body2" style={{textAlign: 'center'}}>
                        Only you can see your settings.
                        {/* You might also want to review your settings for Maps, Search, or whichever services you use most. */}
                        We keeps your data private, safe, and secure.
                        <Link to="#">
                            Learn more
                        </Link>
                    </div>
                    <div style={{marginLeft: '16px'}}>
                        <i className="material-icons-outlined"
                           style={{color: 'var(--mdc-theme-primary)', fontSize: '36px'}}>security</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentFooter;
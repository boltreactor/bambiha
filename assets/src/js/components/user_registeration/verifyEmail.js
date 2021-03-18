import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {verifyEmail} from '../../actions/authentication';

class VerifyEmail extends Component {
  componentDidMount() {
    this.props.verifyEmail(this.props.match.params.uid, this.props.match.params.token);
  }

  render() {
    const {verification} = this.props;
    return (
        <Fragment>
          <div className="main d-flex flex-column">

            <div className="container flex-grow-1">

              <div className="canvas-layout">

                <div className="canvas-layout__content canvas-layout__content--default">

                  <div className="canvas-content">
                    <div className='row'>
                      <div className="col s12">
                        <div className="text-title" style={{marginBottom: '8px'}}>Verifying Email</div>
                        {verification?
                        <div className="text-standard" style={{marginBottom: '8px'}}>This link is has been used for successful verification</div>:
                        <div className="text-standard" style={{marginBottom: '8px'}}>This link has been expired</div>}
                        <div>
                          {verification ?
                              <Link to="/login" style={{lineHeight: '36px'}}>
                                Login
                              </Link> :
                              <Link to='/resend/verify-email' style={{lineHeight: '36px'}}>
                                Try again
                              </Link>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
    )
  }
}

const mapStateToProps = state => ({
verification: state.authentication.verification
});

export default withRouter(connect(mapStateToProps, {verifyEmail})(VerifyEmail));
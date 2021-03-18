import React, {Fragment} from 'react';
import Form from "../../reusable-components/form";
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';

class CheckEmail extends Form {
  render() {
    if(this.props.loginStatus){
      return <Redirect to='/'/>
    }
    return (
        <Fragment>
          <div className="main d-flex flex-column">

            <div className="container flex-grow-1">

              <div className="canvas-layout">

                <div className="canvas-layout__content canvas-layout__content--default">

                  <div className="canvas-content">
                    check your email for verification
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  loginStatus: state.authentication.loginStatus
});

export default withRouter(connect(mapStateToProps)(CheckEmail));
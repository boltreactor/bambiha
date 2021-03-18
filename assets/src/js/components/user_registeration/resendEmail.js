import React, {Fragment} from 'react';
import TextField from "../reusable-components/outlined-textfield";
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import {resendEmail} from "../../actions/authentication";
import Form from "../reusable-components/form";
import Joi from 'joi-browser';

class ResendEmail extends Form {
  state={
    data:{email:""},
    errors:{}
  };
   schema = {
    email: Joi.string().required().email().error(errors => {
        return errors.map(error => {
          switch (error.type) {
            case "string.email":
              return { message: "Enter a valid email" };
            case "any.empty":
              return { message: "Email is required" };
          }
        })})
   };
  doSubmit=(event)=>{
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    this.props.resendEmail(email);
  };
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
                    Your link has been expired, try again please.
                    <form method="post" onSubmit={this.handleSubmit}>
                      {/* */}
                      <div className="row">
                        <div className="col s12">
                          <div className="row" style={{marginBottom: 0}}>
                            <TextField divClassName="input-field input-field--mt col s12" name="email" label="Email" type="email" onChange={this.handleChange} error={this.state.errors.email||this.props.error}/>
                          </div>
                          <div className="d-flex" style={{marginTop: '32px'}}>
                            <div className="col s3">
                              <button className="button" disabled={this.validateUser()} style={{minWidth: '86px'}}>Next</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
  error:state.authentication.error,
  loginStatus: state.authentication.loginStatus
});

export default withRouter(connect(mapStateToProps, {resendEmail})(ResendEmail));

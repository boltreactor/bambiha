import React, {Component} from 'react';
import {createLinkedInLogin} from '../../actions/authentication'
import {LinkedIn} from 'react-linkedin-login-oauth2';
import {connect} from "react-redux";

class LinkedInPage extends Component {
  state = {
    code: '',
    errorMessage: '',
  };


  handleSuccess =  (data) => {
    console.log(data)
    this.setState({
      code: data.code,
      errorMessage: '',
    });
     this.props.createLinkedInLogin('77gr3ejlwri2v8', 'Tr8BHf3bXnWR1m7K', data.code, 'http://localhost:8000/linkedin')
     this.props.createLinkedInLogin({
      'client_id': '77gr3ejlwri2v8',
      'code': data.code,
    },this.props)
    console.log(response)


  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }

  render() {
    const {code, errorMessage} = this.state;
    return (

      <div>
        <LinkedIn
          clientId="77gr3ejlwri2v8"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          scope="r_emailaddress,r_liteprofile"
          redirectUri="http://localhost:8000/linkedin"
        >
          <img src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="Log in with Linked In" style={{maxWidth: '180px'}}/>
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {createLinkedInLogin})(LinkedInPage);

import React, { Component } from 'react';
import LoginForm from '../components/login/LoginForm';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import logo from '../img/PelorusLogo.png';

class LoginContainer extends Component {
  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.context.router.push('/helm')
    }
  }
  render() {
    return (
      <div className="row animated fadeInDown">
        <div className="col-md-4 col-md-offset-4" style={{backgroundColor: '#fff'}}>
          <div className="text-center">
            <img src={logo} alt="Logo" />
          </div>
          <LoginForm />
          <Link to="/reset-password">Forgot Password?</Link>
        </div>
      </div>
    )
  }
}

LoginContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(LoginContainer);

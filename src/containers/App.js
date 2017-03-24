import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import TopNav from '../components/common/TopNav';
import Footer from '../components/common/Footer';


import { logout } from '../actions/authActions';

class App extends Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div id="wrapper">
        <div id="page-wrapper" className="gray-bg">
          {isAuthenticated && <TopNav authenticated={isAuthenticated} logout={this.logout.bind(this)}/>}
            <div className="wrapper wrapper-content">
              {this.props.children}
            </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {logout})(App);

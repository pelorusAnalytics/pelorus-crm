import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../img/LogoSmall.png';

const styles = {
  brand: {
    width: 150,
    position: 'fixed',
    left: '45%',
    top: -10,
    padding: 0,
    margin: 0
  }
}

class TopNav extends Component {
  render() {
    const userLinks = (
      <ul className="nav navbar-top-links navbar-right">
          {/*
          <li className="dropdown">
            <a href="#" className="dropdown-toggle count-info">
              <i className="fa fa-bell"><span className="label label-primary">1</span></i>
            </a>
          </li>
          */}
          <li>
            <a href="#" onClick={this.props.logout}>
              <i className="fa fa-sign-out"></i> Log out
            </a>
          </li>
      </ul>
    )

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/login">
            <i className="fa fa-sign-in"></i> Sign in
          </Link>
        </li>
      </ul>
    )

    const headerLogo = (
      <Link className='text-center' style={styles.brand} to="/helm">
        <img src={logo} alt="presentation" />
      </Link>
    )
    return (
      <div className="row border-bottom white-bg">
        <nav className="navbar navbar-fixed-top border-bottom" role="navigation">
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/helm">Home</Link></li>
            </ul>
            {headerLogo}
            {this.props.authenticated ? userLinks : guestLinks}
          </div>
        </nav>
      </div>
    )
  }
}

/*

*/

export default TopNav;

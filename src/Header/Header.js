import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default class Header extends Component {
  render() {
    var navbar = this.props.hasNavbar ? <Navbar /> : null;
    var pageTitle = this.props.pageTitle ? <h1 className='page-title'>{this.props.pageTitle}</h1> : null;

    return (
      <div className="app__topbar">
        <div className='bound'>
          <Link to={'/'}><img src={logo} className="topbar__logo" alt="logo" /></Link>
          {pageTitle}
          {navbar}
        </div>
      </div>
    );
  }
}

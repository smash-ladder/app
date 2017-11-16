import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default class Header extends Component {
  render() {
    var navbar;

    if (this.props.hasNavbar) {
      navbar = <Navbar />
    }

    return (
      <div className="app__topbar">
        <Link to={'/'}><img src={logo} className="topbar__logo" alt="logo" /></Link>
        {navbar}
      </div>
    );
  }
}

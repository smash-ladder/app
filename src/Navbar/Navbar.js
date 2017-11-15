import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="app__topbar">
        <Link to={'/'}><img src={logo} className="topbar__logo" alt="logo" /></Link>
        <div className='tab-bar'>
          <div className='tab-item'>
            <NavLink to={'/matches'} activeClassName='tab-item--active'>Matches</NavLink>
          </div>
          <div className='tab-item'>
            <NavLink to={'/ladder'} activeClassName='tab-item--active'>Ladder</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

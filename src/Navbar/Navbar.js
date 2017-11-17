import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className='bound'>
        <div className='tab-bar'>
          <div className='tab-item'>
            <NavLink to={'/ladder'} activeClassName='tab-item--active'>Ladder</NavLink>
          </div>
          <div className='tab-item'>
            <NavLink to={'/matches'} activeClassName='tab-item--active'>Matches</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

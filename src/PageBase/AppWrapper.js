import React, { Component } from 'react';

export default class AppWrapper extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className="app__body">
          {component}
        </div>
      </div>
    );
  }
}

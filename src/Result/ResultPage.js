import React, { Component } from 'react';
import Header from '../Header/Header';

export default class ResultPage extends Component {
  render() {
    return (
      <div className='app'>
        <Header pageTitle='Submit Match Results' />
        <div className="app__body">
          <div className='matches-page'>
          </div>
        </div>
      </div>
    );
  }
}

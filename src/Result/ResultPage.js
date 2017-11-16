import React, { Component } from 'react';
import Header from '../Header/Header';

export default class ResultPage extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <div className="app__body">
          <div className='matches-page'>
            <h1>Submit Match Results</h1>
          </div>
        </div>
      </div>
    );
  }
}

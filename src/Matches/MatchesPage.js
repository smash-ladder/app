import React, { Component } from 'react';
import MyMatchesList from './MyMatchesList';
import Header from '../Header/Header';

export default class MatchesPage extends Component {
  render() {
    return (
      <div className='app'>
        <Header hasNavbar={true} />
        <div className="app__body">
          <div className="bound">
            <MyMatchesList />
          </div>
        </div>
      </div>
    );
  }
}

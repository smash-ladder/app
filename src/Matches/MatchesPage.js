import React, { Component } from 'react';
import MyMatchesList from './MyMatchesList';
import Navbar from '../Navbar/Navbar';
import ChallengeableList from '../Challenge/ChallengeableList';

export default class MatchesPage extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className="app__body">
          <div className='matches-page'>
            <MyMatchesList />
            <ChallengeableList />
          </div>
        </div>
      </div>
    );
  }
}

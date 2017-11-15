import React, { Component } from 'react';
import MyMatchesList from './MyMatchesList';
import ChallengeableList from '../Challenge/ChallengeableList';

export default class MatchesPage extends Component {
  render() {
    return (
      <div className='matches-page'>
        <MyMatchesList />
        <ChallengeableList />
      </div>
    );
  }
}

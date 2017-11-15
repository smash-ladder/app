import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Ladder from './Ladder';
import MatchesPage from './MatchesPage';

const ladderData = [
  {
    character: 'kirby',
    name: 'Brendan'
  }, {
    character: 'falcon',
    name: 'Evert'
  }, {
    character: 'ness',
    name: 'Phil'
  }, {
    character: 'jigglypuff',
    name: 'Dan'
  }, {
    character: 'link',
    name: 'Minh Hai'
  }, {
    character: 'pikachu',
    name: 'PQ'
  }, {
    character: 'yoshi',
    name: 'Mihok'
  }, {
    character: 'fox',
    name: 'Ryan'
  }, {
    character: 'mario',
    name: 'Chris'
  }, {
    character: 'donkeykong',
    name: 'Cody'
  }, {
    character: 'samus',
    name: 'Nick'
  }, {
    character: 'luigi',
    name: 'Wyatt'
  }
];


class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="topbar">
          <img src={logo} className="topbar__logo" alt="logo" />
        </div>
        <div className='tab-bar'>
          <div className='tab-item'>Matches</div>
          <div className='tab-item tab-item--active'>Ladder</div>
        </div>
        <div className="app__body">
          <MatchesPage />
          <Ladder data={ladderData} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './Matches.css';
import MatchesRow from './MatchesRow.js';

const data = [
  {
    ranking: 1,
    character: 'pikachu',
    name: 'Minh Hai'
  },
  {
    ranking: 2,
    character: 'kirby',
    name: 'Brendan'
  },
  {
    ranking: 3,
    character: 'ness',
    name: 'Phil'
  }
];

export default class MyMatchesList extends Component {
  render() {
    const items = data.map((item, index) => {
      return (
        <MatchesRow player={item} key={index.toString()} ></MatchesRow>
      );
    });

    return (
      <div>
        <ul className='ladder'>
          {items}
        </ul>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Matches.css';
import MatchesRow from './MatchesRow.js';

const data = [
  {
    ranking: 1,
    character: 'pikachu',
    name: 'minhhai'
  },
  {
    ranking: 2,
    character: 'kirby',
    name: 'brendan'
  },
  {
    ranking: 3,
    character: 'captain falcon',
    name: 'evert'
  }
];

export default class MyMatchesList extends Component {
  render() {
    const items = data.map((item, index) => {
      return (
        <MatchesRow player={item} listIndex={index} ></MatchesRow>
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

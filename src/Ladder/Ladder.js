import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

const data = [
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

export default class Ladder extends Component {
  render() {
    const items = data.map((item, index) => {
      const image = require(`../images/${item.character}.png`);
      return (
        <li className='ladder-player' key={index.toString()}>
          <div className='ladder-player__rank'>{index+1}</div>
          <img src={image} className='ladder-player__image'/>
          <div className='ladder-player__name'>{item.name}</div>
        </li>
      );
    });

    return (
      <div className='app'>
        <Navbar />
        <div className="app__body">
          <ul className='ladder'>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

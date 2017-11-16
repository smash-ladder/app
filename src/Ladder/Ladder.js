import React, { Component } from 'react';
import Header from '../Header/Header';
import api from '../Api';

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
  constructor(props) {
    super(props);
    this.state = {
      rankings: []
    };
  }

  async componentDidMount() {
    const rankings = [];

    const items = await api.follow('ranking').followAll('item');
    console.log(items);

    await Promise.all(items.map(async (item) => {
      console.log(item);
      const ranking = await item.get();
      console.log(ranking);
      let player = await item.follow('player');
      player = await player.get();
      console.log(player);
      rankings.push({ rank: ranking.rank, name: player.userName, character: 'kirby' });
    }));

    console.log(rankings);

    this.setState({ rankings });
  }

  render() {
    if (!this.state.rankings.length) {
      return <div></div>;
    }

    const items = this.state.rankings.map((item, index) => {
      const image = require(`../images/${item.character}.png`);
      return (
        <li className='ladder-player' key={index.toString()}>
          <div className='ladder-player__rank'>{item.rank}</div>
          <img src={image} className='ladder-player__image'/>
          <div className='ladder-player__name'>{item.name}</div>
        </li>
      );
    });

    return (
      <div className='app'>
        <Header hasNavbar={true} />
        <div className="app__body">
          <ul className='ladder'>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

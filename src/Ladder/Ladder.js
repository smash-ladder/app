import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import api from '../Api';

const characters = ['kirby', 'falcon', 'ness', 'jigglypuff', 'link', 'pikachu', 'yoshi', 'fox', 'mario', 'donkeykong', 'samus', 'luigi'];

export default class Ladder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankings: []
    };
  }

  async componentDidMount() {
    const items = await api.follow('ranking').followAll('item');
    const rankings = [];

    await Promise.all(items.map(async (item) => {
      const ranking = await item.get();
      let player = await item.follow('player');
      player = await player.get();
      rankings.push({
        rank: ranking.rank,
        name: player.userName,
        character: characters[Math.floor(Math.random()*12)]
      });
    }));

    this.setState({ rankings });
  }

  render() {
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

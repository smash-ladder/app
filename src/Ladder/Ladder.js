import React, { Component } from 'react';
import Header from '../Header/Header';
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
    const ladders = await api.follow('ladderCollection').followAll('item');
    const ladder64 = ladders[0];
    const rankingResources = await ladder64.follow('ranking').followAll('item');
    const rankings = [];

    await Promise.all(rankingResources.map(async (resource) => {
      const ranking = await resource.get();
      let player = await resource.follow('player');
      player = await player.get();
      rankings.push({
        rank: ranking.rank,
        name: player.userName,
        character: characters[Math.floor(Math.random()*12)] // todo: replace with character from api
      });
    }));

    rankings.sort(function(a, b) {
      return a.rank - b.rank;
    });

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

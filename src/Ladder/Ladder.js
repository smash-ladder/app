import React, { Component } from 'react';
import Header from '../Header/Header';
import api from '../Api';

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
    let rankingResources = await ladder64.follow('ranking');
    await rankingResources.refresh();
    rankingResources = await rankingResources.followAll('item');
    const rankings = [];

    await Promise.all(rankingResources.map(async (resource) => {
      const ranking = await resource.refresh();
      let character = await resource.follow('favoriteCharacter');
      character = await character.get();
      let characterNameKey = character.name.toLowerCase();
      if (characterNameKey === 'captain falcon') {
        characterNameKey = 'falcon';
      }
      if (characterNameKey === 'donkey kong') {
        characterNameKey = 'donkey-kong';
      }
      let player = await resource.follow('player');
      player = await player.get();
      rankings.push({
        rank: ranking.rank,
        name: player.userName,
        character: characterNameKey,
        wins: ranking.wins,
        losses: ranking.losses
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
      const isCurrent = item.name === window.localStorage.getItem('userName');
      return (
        <li className='ladder-player' key={index.toString()}>
          <div>
            <div className='ladder-player__rank'>{item.rank}</div>
            <img src={image} className='ladder-player__image' alt=''/>
            <div className={'ladder-player__name' + (isCurrent ? ' ladder-player__name--current' : '')}>{item.name}</div>
          </div>
          <div className='ladder__win-loss'><span className='wins'>W{item.wins}</span>&nbsp;/&nbsp;<span className='losses'>L{item.losses}</span></div>
        </li>
      );
    });

    return (
      <div className='app'>
        <Header hasNavbar={true} />
        <div className="app__body">
          <div className="bound">
            <ul className='ladder'>
              {items}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Matches.css';
import MatchesRow from './MatchesRow.js';
import api from '../Api.js';

export default class MyMatchesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankings: []
    };
  }

  async componentDidMount() {
    const userName = window.localStorage.getItem('userName');
    let matches = await api.getResource(`/ladders/ssbu-2021/rankings/${userName}/allowed-challenges`);
    await matches.refresh();
    matches = await matches.followAll('item');

    const rankings = [];

    await Promise.all(matches.map(async (match) => {
      const ranking = await match.get();
      let player = await match.follow('player');
      player = await player.get();
      let character = await match.follow('favoriteCharacter');
      character = await character.get();

      let characterNameKey = character.name.toLowerCase();
      if (characterNameKey === 'captain falcon') {
        characterNameKey = 'falcon';
      }
      if (characterNameKey === 'donkey kong') {
        characterNameKey = 'donkey-kong';
      }

      rankings.push({
        rank: ranking.rank,
        name: player.name,
        character: characterNameKey
      });
    }));

    this.setState({ rankings });
  }

  render() {
    const items = this.state.rankings.map((item, index) => {
      return (
        <MatchesRow player={item} key={index} ></MatchesRow>
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

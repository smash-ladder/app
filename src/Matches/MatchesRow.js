import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import './Matches.css';
import api from '../Api';

class MatchesRow extends React.Component {

  sendChallenge = async () => {
    const player = window.localStorage.getItem('userName');
    const opponent = this.props.player.name;
    const body = {
      "_links": {
        "to" : { "href": `/players/${opponent}` },
        "from" : { "href": `/players/${player}` }
      }
    };

    const challengeRes = await api.getResource('ladders/ssb64-1v1/challenges');
    await challengeRes.fetch({
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  }

  render() {
    const image = require(`../images/${this.props.player.character}.png`);
    return(
      <li className='ladder-player match-player'>
        <img src={image} className='ladder-player__image'/>
        <div className='match-player__name'>
          {this.props.player.name}<br/>
          <small>Rank: {this.props.player.rank}</small>
        </div>
        <button onClick={this.sendChallenge}>
          Challenge
        </button>
        <Link to={{
            pathname: '/result',
            state: { opponent: this.props.player.name }
          }}
          className='add-result-button'>
          <button >
            Add Result
          </button>
        </Link>
      </li>
    );
  }
}

export default MatchesRow;

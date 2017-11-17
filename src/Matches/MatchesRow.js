import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import './Matches.css';

class MatchesRow extends React.Component {
  render() {
    const image = require(`../images/${this.props.player.character}.png`);
    return(
      <li className='ladder-player match-player'>
        <img src={image} className='ladder-player__image'/>
        <div className='match-player__name'>
          {this.props.player.name}<br/>
          <small>Rank: {this.props.player.rank}</small>
        </div>
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

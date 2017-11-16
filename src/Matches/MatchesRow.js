import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import './Matches.css';

class MatchesRow extends React.Component {
  render() {
    const image = require(`../images/${this.props.player.character}.png`);
    return(
      <li className='ladder-player match-player' key={this.props.key}>
        <img src={image} className='ladder-player__image'/>
        <div className='match-player__name'>{this.props.player.name}<br/>Rank: {this.props.player.ranking}</div>
        <button className='add-result-button'><Link to={'/result'}>Add Result</Link></button>
      </li>
    );
  }
}

export default MatchesRow;

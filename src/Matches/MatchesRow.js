import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import './Matches.css';

class MatchesRow extends React.Component {
  render() {
    return(
      <li className='ladder-player match-player' key={this.props.key}>
        <img src={this.props.image} className='ladder-player__image'/>
        <div className='match-player__name'>{this.props.player.name}<br/>Rank: {this.props.player.ranking}</div>
        <button className='add-result-button'>
          <Link to={{
            pathname: '/result',
            state: { opponent: this.props.player.name }
          }}>Add Result</Link>
        </button>
      </li>
    );
  }
}

export default MatchesRow;

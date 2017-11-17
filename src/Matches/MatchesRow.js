import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import './Matches.css';
import api from '../Api';

class MatchesRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      challengeSent: false
    };
  }

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

    this.setState({
      challengeSent: true
    })
  }

  render() {
    const image = require(`../images/${this.props.player.character}.png`);

    let challengeButton;
    let sentAlert;

    if (this.state.challengeSent) {
      sentAlert = <div className='alert-sent'>Sent</div>
    } else {
      challengeButton = (<button className='challenge-button' onClick={this.sendChallenge}>
        Challenge
      </button>);
    }

    return(
      <li className='ladder-player match-player'>
        <img src={image} className='ladder-player__image'/>
        <div className='match-player__name'>
          {this.props.player.name}<br/>
          <small>Rank: {this.props.player.rank}</small>
        </div>
        {sentAlert}
        <div className='match-buttons'>
          {challengeButton}
          <Link to={{
              pathname: '/result',
              state: { opponent: this.props.player.name }
            }}
            className='add-result-button'>
            <button >
              Add&nbsp;Result
            </button>
          </Link>
        </div>
      </li>
    );
  }
}

export default MatchesRow;

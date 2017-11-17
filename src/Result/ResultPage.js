import React, { Component } from 'react';
import Header from '../Header/Header';
import './ResultPage.css';
import ResultPlayerInfoPage from './ResultPlayerInfoPage.js';
import CharacterSelect from '../CharacterSelect/CharacterSelect.js';
import { Redirect } from 'react-router-dom';
import api from '../Api';
import NumberLivesLeft from './NumberLivesLeft.js';

export default class ResultPage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      livesLeft: 1,
      opponent: {
        name: null,
        character: null
      },
      player: {
        name: window.localStorage.getItem('userName'),
        character: null
      }
    };
    this.submitMatch = this.submitMatch.bind(this);
    this.submitWin = this.submitWin.bind(this);
    this.submitLoss = this.submitLoss.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updatePlayerChar = this.updatePlayerChar.bind(this);
  }

  setNumberLivesLeft(nbLives) {
    this.setState({livesLeft: nbLives});
  }

  async componentDidMount() {
    const userName = window.localStorage.getItem('userName');
    const currentPlayer = await api.getResource(`players/${userName}`).get();
    console.log(currentPlayer);

    const userInfoFromLadder = await api.getResource(`/ladders/ssb64-1v1/rankings/${userName}`);
    let userCharacter = await userInfoFromLadder.follow('favoriteCharacter');
    userCharacter = await userCharacter.get();
    const userCharacterNameKey = userCharacter.name.toLowerCase();

    const additionalInfoPlayer = Object.assign({}, this.state.player);
    additionalInfoPlayer.character = userCharacterNameKey;
    this.setState({ player: additionalInfoPlayer });

    const opponentUserName = this.props.location.state.opponent;
    console.log(opponentUserName);
    const opponent = await api.getResource(`players/${opponentUserName}`).get();

    const opponentInfoFromLadder = await api.getResource(`/ladders/ssb64-1v1/rankings/${opponentUserName}`);
    let opponentCharacter = await opponentInfoFromLadder.follow('favoriteCharacter');
    opponentCharacter = await opponentCharacter.get();
    const opponentCharacterNameKey = opponentCharacter.name.toLowerCase();

    this.setState({
      opponent: {
        name: opponentUserName,
        character: opponentCharacterNameKey
      }
    });
  }

  async submitMatch (winner, winnerCharacter, loser, loserCharacter) {
    let body = {
      "_links": {
        "winner" : { "href": `/players/${winner}` },
        "loser" : { "href": `/players/${loser}` },
        "winnerCharacter" : { "href": `/games/ssb64/characters/${winnerCharacter}` },
        "loserCharacter" : { "href": `/games/ssb64/characters/${loserCharacter}` },
        "stage" : { "href": '/games/ssb64/stages/dream-land' }
      },
      "livesLeft": this.state.livesLeft
    };

    console.log(body);

    const matchesResource = await api.getResource('ladders/ssb64-1v1/matches');
    console.log(matchesResource);
    await matchesResource.fetch({
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    this.setState({submit: true})
  }

  async submitWin() {
    console.log('asdf');
    await this.submitMatch(this.state.player.name, this.state.player.character, this.state.opponent.name, this.state.opponent.character);
  }

  async submitLoss() {
    await this.submitMatch(this.state.opponent.name, this.state.opponent.character, this.state.player.name, this.state.player.character);
  }

  onChange(player) {
    console.log('change');
    console.log(player);
    this.setState({
      change: true,
      changePlayer: player
    })
  }

  updatePlayerChar(player, newChar) {
    console.log('update to', newChar, player);
    const playerKey = this.state.changePlayer;

    if (player.name === window.localStorage.getItem('userName')) {
      const additionalInfoPlayer = Object.assign({}, this.state.player);
      additionalInfoPlayer.character = newChar;
      this.setState({ player: additionalInfoPlayer });
    } else {
      const additionalInfoPlayer = Object.assign({}, this.state.opponent);
      additionalInfoPlayer.character = newChar;
      this.setState({ opponent: additionalInfoPlayer });
    }
    this.setState({
      change: false
    })
    console.log(this.state);
  }

  render() {
    if (this.state.submit) {
      return (<Redirect to='/ladder'/>);
    }

    var nbLiveLeft = [];

    for (var i = 1; i <= 5; i++) {
      var is_selected = this.state.livesLeft == i;
      nbLiveLeft.push(<NumberLivesLeft value={i} key={i} clickAction={this.setNumberLivesLeft.bind(this, i)} isSelected={is_selected}></NumberLivesLeft>);
    };

    let page;
    if (this.state.change) {
      return (<CharacterSelect player={this.state.changePlayer} onSelection={this.updatePlayerChar}/>)
    }

    return (
      <div className='app'>
        <Header pageTitle='Submit Match Results' />
        <div className="app__body">
          <div className="bound">
            <div className='result-page'>
              <h2>Who won?</h2>

              <div className='versus-wrapper'>
                <ResultPlayerInfoPage player={this.state.player} onChange={this.onChange} />
                <span className='versus'>vs</span>
                <ResultPlayerInfoPage player={this.state.opponent} onChange={this.onChange} />
              </div>

              <div>
                <h3>Winner&#39;s Lives Left</h3>
                <div className='number-lives-wrapper'>
                  {nbLiveLeft}
                </div>
              </div>

              <div className='winner-button-wrapper'>
                <button className='winning-button user-winning-button' onClick={this.submitWin}>I Won</button>
                <button className='winning-button' onClick={this.submitLoss}>{this.state.opponent.name} Won</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );

  }
}

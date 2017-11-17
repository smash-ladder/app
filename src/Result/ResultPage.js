import React, { Component } from 'react';
import Header from '../Header/Header';
import './ResultPage.css';
import ResultPlayerInfoPage from './ResultPlayerInfoPage.js';
import api from '../Api';

export default class ResultPage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      opponent: {
        name: null,
        character: null
      },
      player: {
        name: window.localStorage.getItem('userName'),
        character: null
      }
    };
  }

  async componentDidMount() {
    const userName = window.localStorage.getItem('userName');
    const currentPlayer = await api.getResource(`players/${userName}`).get();
    console.log(currentPlayer);

    const opponentUserName = this.props.location.state.opponent;
    console.log(opponentUserName);
    const opponent = await api.getResource(`players/${opponentUserName}`).get();
    this.setState({
      opponent: {
        name: opponentUserName,
      }
    });
  }

  render() {
    return (
      <div className='app'>
        <Header pageTitle='Submit Match Results' />
        <div className="app__body">
          <div className='result-page'>
            <h2>Who won?</h2>

            <div className='versus-wrapper'>
              <ResultPlayerInfoPage player={this.state.player} ></ResultPlayerInfoPage>
              <span className='versus'>vs</span>
              <ResultPlayerInfoPage player={this.state.opponent} ></ResultPlayerInfoPage>
            </div>

            <div>
              <h3>Winner&#39;s Lives Left</h3>
              <div className='number-lives-wrapper'>
                <span className='number-lives'>1</span>
                <span className='number-lives'>2</span>
                <span className='number-lives'>3</span>
                <span className='number-lives'>4</span>
                <span className='number-lives'>5</span>
              </div>
            </div>

            <div className='winner-button-wrapper'>
              <button className='winning-button user-winning-button'>I Won</button>
              <button className='winning-button'>{this.state.opponent.name} Won</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

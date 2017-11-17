import React, { Component } from 'react';
import Header from '../Header/Header';
import './ResultPage.css';
import ResultPlayerInfoPage from './ResultPlayerInfoPage.js';
import NumberLivesLeft from './NumberLivesLeft.js';

const currentUser = {
  ranking: 1,
  character: 'pikachu',
  name: 'Minh Hai'
};

const opponent = {
  ranking: 2,
  character: 'ness',
  name: 'Phil'
};

export default class ResultPage extends Component {

  constructor(props) {
    super(props);
    this.state = {livesLeft: 1};
  }

  setNumberLivesLeft(nbLives) {
    this.setState({livesLeft: nbLives});
  }

  render() {
    var nbLiveLeft = [];

    for (var i = 1; i <= 5; i++) {
      var is_selected = this.state.livesLeft == i;
      nbLiveLeft.push(<NumberLivesLeft value={i} clickAction={this.setNumberLivesLeft.bind(this, i)} isSelected={is_selected}></NumberLivesLeft>);
    };

    return (
      <div className='app'>
        <Header pageTitle='Submit Match Results' />
        <div className="app__body">
          <div className='result-page'>
            <h2>Who won?</h2>

            <div className='versus-wrapper'>
              <ResultPlayerInfoPage player={currentUser} ></ResultPlayerInfoPage>
              <span className='versus'>vs</span>
              <ResultPlayerInfoPage player={opponent} ></ResultPlayerInfoPage>
            </div>

            <div>
              <h3>Winner&#39;s Lives Left</h3>
              <div className='number-lives-wrapper'>
                {nbLiveLeft}
              </div>
            </div>

            <div className='winner-button-wrapper'>
              <button className='winning-button user-winning-button'>I Won</button>
              <button className='winning-button'>{opponent.name} Won</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

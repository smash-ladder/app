import React, { Component } from 'react';
import Header from '../Header/Header';
import './ResultPage.css';
import ResultPlayerInfoPage from './ResultPlayerInfoPage.js';

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
  render() {
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
                <span className='number-lives'>1</span>
                <span className='number-lives'>2</span>
                <span className='number-lives'>3</span>
                <span className='number-lives'>4</span>
                <span className='number-lives'>5</span>
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

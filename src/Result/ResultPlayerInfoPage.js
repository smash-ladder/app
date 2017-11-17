import React, { Component } from 'react';
import './ResultPage.css';

export default class ResultPlayerInfoPage extends Component {
  render() {
    const image = require(`../images/${this.props.player.character}.png`);
    return (
      <div className='player-info'>
        <img src={image} className='match-player__image'/>
        <span className='player-name'>{this.props.player.name}</span>
        <button className='change-characters-button'>Change Character</button>
      </div>
    );
  }
}

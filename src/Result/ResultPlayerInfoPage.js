import React, { Component } from 'react';
import './ResultPage.css';

export default class ResultPlayerInfoPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      change: false
    };
    this.changeCharacter = this.changeCharacter.bind(this);
  }

  changeCharacter() {
    console.log(this.props.player);
    this.props.onChange(this.props.player);
  }

  render() {
    const character = this.props.player.character ? this.props.player.character : 'unknown';
    const image = require(`../images/${character}.png`);

    return (
      <div className='player-info'>
        <img src={image} className='match-player__image' alt=''/>
        <span className='player-name'>{this.props.player.name}</span>
        <button className='change-characters-button' onClick={this.changeCharacter}>Change Character</button>
      </div>
    );
  }
}

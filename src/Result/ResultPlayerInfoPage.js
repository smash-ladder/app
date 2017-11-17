import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CharacterSelect from '../CharacterSelect/CharacterSelect';
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
    const image = this.props.player.character ? require(`../images/${this.props.player.character}.png`) : null;

    return (
      <div className='player-info'>
        <img src={image} className='match-player__image'/>
        <span className='player-name'>{this.props.player.name}</span>
        <button className='change-characters-button' onClick={this.changeCharacter}>Change Character</button>
      </div>
    );
  }
}

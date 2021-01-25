import React, { Component } from 'react';
import './CharacterSelect.css';

const characters = [
  { key: 'falcon', name: 'Captain Falcon' },
  { key: 'donkey-kong', name: 'Donkey Kong' },
  { key: 'fox', name: 'Fox' },
  { key: 'jigglypuff', name: 'Jigglypuff' },
  { key: 'kirby', name: 'Kirby' },
  { key: 'link', name: 'Link' },
  { key: 'luigi', name: 'Luigi' },
  { key: 'mario', name: 'Mario' },
  { key: 'ness', name: 'Ness' },
  { key: 'pikachu', name: 'Pikachu' },
  { key: 'samus', name: 'Samus' },
  { key: 'yoshi', name: 'Yoshi' }
];

export default class CharacterSelect extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: `${this.props.userName} Played As`
    };
  }

  handleClick = (charKey) => {
    console.log(charKey);
    this.props.onSelection(this.props.player, charKey);
  }

  render() {
    const items = characters.map((char, index) => {
      const image = require(`../images/ssbu/${char.key}.png`);
      return (
        <div className='char-select__item' key={index.toString()} onClick={(e) => this.handleClick(char.key)}>
          <img src={image} className='char-select__image' alt=''/>
          <h3>{char.name}</h3>
        </div>
      );
    });

    return (
      <div className="app__body">
        <div className="bound">
          <h3>Played As</h3>
          <div className='char-select'>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

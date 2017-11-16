import React, { Component } from 'react';
import Header from '../Header/Header';
import './CharacterSelect.css';

const characters = [
  { key: 'falcon', name: 'Captain Falcon' },
  { key: 'donkeykong', name: 'Donkey Kong' },
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
    this.state = {
      title: `${this.props.userName} Played As`
    };
  }

  handleClick = (charKey) => {
    console.log(charKey);
  }

  render() {
    const items = characters.map((char, index) => {
      const image = require(`../images/${char.key}.png`);
      return (
        <div className='char-select__item' key={index.toString()} onClick={(e) => this.handleClick(char.key)}>
          <img src={image} className='char-select__image'/>
          <h3>{char.name}</h3>
        </div>
      );
    });

    return (
      <div className='app'>
        <Header hasNavbar={false} pageTitle={this.state.title}/>
        <div className="app__body">
          <div className='char-select'>
            {items}
          </div>
        </div>
      </div>
    );
  }
}
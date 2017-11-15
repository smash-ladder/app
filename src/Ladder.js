import React, { Component } from 'react';

export default class Ladder extends Component {
  render() {
    const items = this.props.data.map((item, index) => {
      const image = require(`./${item.character}.png`);
      return (
        <li className='ladder-player' key={index.toString()}>
          <div className='ladder-player__rank'>{index+1}</div>
          <img src={image} className='ladder-player__image'/>
          <div className='ladder-player__name'>{item.name}</div>
        </li>
      );
    });

    return (
      <ul className='ladder'>
        {items}
      </ul>
    );
  }
}

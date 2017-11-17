import React, { Component } from 'react';
import './ResultPage.css';

export default class NumberLivesLeft extends Component {
  render() {
    const className = this.props.isSelected ? 'number-lives number-lives-selected' : 'number-lives';

    return (
      <span onClick={this.props.clickAction} className={className}>{this.props.value}</span>
    );
  }
}

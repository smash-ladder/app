import React, { Component } from 'react';
import charactersImage from '../images/character-models.png';
import logo from '../images/logo.png';
import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className='login-page'>
        <img src={logo} className='login-page__logo' />
        <img src={charactersImage} />
        <form className='login-form'>
          <input type='text' placeholder="Enter your Yelp Username" />
          <button type='submit'>Log In</button>
        </form>
      </div>
    );
  }
}

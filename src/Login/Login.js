import React, { Component } from 'react';
import charactersImage from '../images/character-models.png';
import logo from '../images/logo.png';
import './Login.css';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      hasUser: false
    };
  }

  async onSubmit(e) {
    e.preventDefault();
    const username = this.refs.usernameInput.value;
    try {
      window.localStorage.setItem('userName', username);
      this.setState({ hasUser: true });
    } catch(error) {
      throw error;
    }
  }

  componentDidMount() {
    this.refs.usernameInput.focus();
  }

  render() {
    const { hasUser } = this.state;

    if (hasUser) {
      return <Redirect to='/ladder' />;
    }

    return (
      <div className='login-page bound'>
        <img src={logo} className='login-page__logo' alt=''/>
        <img src={charactersImage} alt=''/>
        <form onSubmit={this.onSubmit} className='login-form' ref='loginForm'>
          <input type='text' placeholder="Enter your Yelp Username" ref='usernameInput' required='true'/>
          <button type='submit'>Continue</button>
        </form>
      </div>
    );
  }
}

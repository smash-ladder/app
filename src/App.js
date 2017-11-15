import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import Ladder from './Ladder/Ladder';
import Login from './Login/Login';
import MatchesPage from './Matches/MatchesPage';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      /*<Login />*/
      <Router>
        <div className='app'>
          <div className="app__topbar">
            <img src={logo} className="topbar__logo" alt="logo" />
            <div className='tab-bar'>
              <div className='tab-item'>
                <NavLink to={'/matches'} activeClassName='tab-item--active'>Matches</NavLink>
              </div>
              <div className='tab-item'>
                <NavLink to={'/'} activeClassName='tab-item--active'>Ladder</NavLink>
              </div>
            </div>
          </div>
          <div className="app__body">
            <Switch>
              <Route path='/matches' component={MatchesPage} />
              <Route path='/' component={Ladder} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

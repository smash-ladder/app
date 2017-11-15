import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import Ladder from './Ladder/Ladder';
import MatchesPage from './Matches/MatchesPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <div className="topbar">
            <img src={logo} className="topbar__logo" alt="logo" />
          </div>
          <div className='tab-bar'>
            <div className='tab-item'>
              <Link to={'/matches'}>Matches</Link>
            </div>
            <div className='tab-item tab-item--active'>
              <Link to={'/'}>Ladder</Link>
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

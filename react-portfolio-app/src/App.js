import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,}
  from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={AboutMe}> </Route>
        </Switch>
      </Router>
    )
}

export default App;

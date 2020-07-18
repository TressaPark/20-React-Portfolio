import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={AboutMe} />
      <Route exact path='/portfolio' component={Portfolio} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

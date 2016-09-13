'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const app = document.getElementById('app');

import App from './App';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={SignIn}></IndexRoute>
      <Route path="signin" component={SignIn}></Route>
      <Route path="register" component={Register}></Route>
    </Route>
  </Router>
, app);

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const app = document.getElementById('app');

import Layout from './pages/Layout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="auth" component={Auth}></Route>
      <Route path="dashboard" component={Dashboard}></Route>
    </Route>
  </Router>
, app);

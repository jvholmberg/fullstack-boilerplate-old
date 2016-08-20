'use strict';

import React from 'react';
import { Link } from 'react-router';

import s from './Navbar.sass';

export default class Navbar extends React.Component {

  constructor() {
    super();
  }
  render() {
    return (
      <nav className={s.root}>
        <ul>
          <li>
            <Link to=''>Home</Link>
          </li>
          <li>
            <Link to='auth'>Auth</Link>
          </li>
          <li>
            <Link to='dashboard'>Dashboard</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

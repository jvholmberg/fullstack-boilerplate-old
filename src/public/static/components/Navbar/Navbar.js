'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {

  constructor() {
    super();
  }
  render() {
    return (
      <nav>
        <Link to=''>Home</Link>
        <Link to='dashboard'>Dashboard</Link>
      </nav>
    );
  }
}

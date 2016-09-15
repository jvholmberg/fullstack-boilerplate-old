'use strict';

import React from 'react';

import Navbar from './components/Navbar/';

require('./styles/ThemeDefault.sass');

class App extends React.Component {

  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar/>
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}
module.exports = App;

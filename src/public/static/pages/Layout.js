'use strict';

import React from 'react';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import Home from './Home';
import Dashboard from './Dashboard';

// Create Application
export default class Layout extends React.Component {

  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header/>
        <Navbar/>
        <main>
          { this.props.children }
        </main>
        <Footer/>
      </div>
    );
  }
}

'use strict';

import React from 'react';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import s from './StyleReset.sass';

// Create Application
export default class Layout extends React.Component {

  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <Navbar/>
        <Header/>
        <main>
          { this.props.children }
        </main>
        <Footer/>
      </div>
    );
  }
}

'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

require('./Navbar.sass');

let s = {
  root: 'navbar_root',
  list: 'navbar_list',
  item: 'navbar_item',
  link: 'navbar_link',
  activeLink: 'navbar_link_active'
};

export default class Navbar extends React.Component {

  constructor() {
    super();
  }
  render() {

    return (
      <nav className={s.root}>
        <ul className={s.list}>
          <li className={s.item}><IndexLink to='' className={s.link} activeClassName={s.activeLink +' ' + s.link}>Home</IndexLink></li>
          <li className={s.item}><Link to='signin' className={s.link} activeClassName={s.activeLink +' ' + s.link}>Sign In</Link></li>
          <li className={s.item}><Link to='register' className={s.link} activeClassName={s.activeLink +' ' + s.link}>Register</Link></li>
        </ul>
      </nav>
    );
  }
}

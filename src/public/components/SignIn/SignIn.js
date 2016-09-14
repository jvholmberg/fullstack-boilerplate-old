'use strict';

import React from 'react';

// require('./SignIn.sass');

let s = {
  root: 'signin_root',
  label: 'signin_label',
  input: 'signin_input',
  button: 'signin_button btn btn_primary'
};

export default class SignIn extends React.Component {

  constructor() {
    super();
  }
  _formSubmit(e) {
    console.log('lol');
  }
  render() {
    return (
      <div className={s.root}>
        <label className={s.label}>
          Username
          <input className={s.input} type='text' name='username' />
        </label>
        <label className={s.label}>
          Password
          <input className={s.input} type='password' name='password' />
        </label>
        <button className={s.button}
          onClick={this._formSubmit}>Sign In</button>
      </div>
    );
  }
}

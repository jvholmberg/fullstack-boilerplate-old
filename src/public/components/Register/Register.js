'use strict';

import React from 'react';
import xhr from '../../restHelper';
import constants from '../../constants';

// require('./Register.sass');

let s = {
  root: 'register_root',
  label: 'register_label',
  input: 'register_input',
  button: 'register_button btn btn_primary'
};

export default class Register extends React.Component {

  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
    this._formSubmit = this._formSubmit.bind(this);

    this.state = {
      username: props.username || '',
      password: props.password || '',
      password2: props.password2 || ''
    };
  }
  _formSubmit(e) {
    let formData = JSON.stringify(this.state);
    xhr('/api/user/register').post(formData)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  _onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div className={s.root}>
        <label className={s.label}>
          Username
          <input className={s.input} onChange={this._onChange} type='text' name='username' />
        </label>
        <label className={s.label}>
          Password
          <input className={s.input} onChange={this._onChange} type='password' name='password' />
        </label>
        <label className={s.label}>
          Confirm Password
          <input className={s.input} onChange={this._onChange} type='password' name='password2' />
        </label>
        <button className={s.button}
          onClick={this._formSubmit}>Sign In</button>
      </div>
    );
  }
}

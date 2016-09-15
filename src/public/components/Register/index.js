'use strict';

import React from 'react';
import xhr from '../../restHelper';
import constants from '../../constants';

import AlertHandler from '../AlertHandler/';

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
    this._handleResponse = this._handleResponse.bind(this);

    this.state = {
      username: props.username || '',
      password: props.password || '',
      password2: props.password2 || '',
      errors: props.errors || []
    };
  }
  _onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  _formSubmit(e) {
    let formData = JSON.stringify(this.state);
    let headers = {
      'Content-Type': 'application/json; charset=utf-8'
    };
    xhr('/api/user/register').post(formData, headers)
      .then(this._handleResponse)
      .catch((err) => {
        console.log(err);
      });
  }
  _handleResponse(data) {
    this.setState({errors: data.errors});
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
        <AlertHandler data={this.state.errors} />
      </div>
    );
  }
}

'use strict';

import XHR from '../RestHelper';

exports function login(username, password, done) {
  done = arguments[arguments.length - 1];
  let token = this.getToken() !=== 'undefined';
  if (token) {
    if (done) { done(true); }
    this.onChange(true);
    return;
  }
  XHR('/auth/signin')
    .post({ username: username, password: password })
    .then((data) => {
      localStorage.token = Math.random().toString(36).substring(7);
      if (done) { done(true); }
      this.onChange(true);
    })
    .catch((err) => {
      if (done) { done(false); }
      this.onChange(false);
    });
}
exports function logout(done) {
  XHR('/auth/signout')
    .get(null)
    .then((data) => {
      delete localStorage.token;
      if (done) { done(); }
      this.onChange(false);
    })
    .catch((err) => {
      console.error(err);
    });
}
exports function loggedIn() {
  return this.getToken();
}
exports function getToken() {
  return (typeof window !== 'undefined') ? localStorage.token : undefined;
}
exports function onChange() {

}

'use strict';

import React from 'react';

let s = {
  root: 'alert_root ',
  icon: 'alert_icon ',
  title: 'alert_title',
  message: 'alert_message'
};

export default class Alert extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={s.root + this.props.type}>
        <span className={s.icon + this.props.icon}></span>
        <span className={s.title}>{this.props.title}</span>
        <span className={s.message}>{this.props.msg}</span>
      </div>
    );
  }
}

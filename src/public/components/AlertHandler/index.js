'use strict';

import React from 'react';
import Alert from './Alert/';

let s = {
  root: 'alerthandler_root'
};

export default class AlertHandler extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={s.root}>
        {this.props.data.map(function(a) {
          return <Alert key={a.msg} type={a.type} icon={a.icon} title={a.title} msg={a.msg} />
        })}
      </div>
    );
  }
}

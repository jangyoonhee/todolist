import React, { Component } from 'react';
import Checkbox from './checkbox/index'
import Input from './Input/index'

class todoItem extends Component {
  render() {
    const { id, text } = this.props;

    return (
      <div id={id}>
        <Checkbox/><Input>{text}</Input>
      </div>
    );
  }
}

export default todoItem;
import React, { Component } from 'react';
import Checkbox from './checkbox/index'
import Input from './input/index'


class todoItem extends Component {
  render() {
    const { id, text , checked} = this.props;

    return (
      <div id={id}>
        <Checkbox className={`todo-text ${checked && 'checked'}`}/><Input>{text}</Input>
      </div>
    );
  }
}

export default todoItem;
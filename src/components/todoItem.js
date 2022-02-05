import React, { Component } from 'react';
import '../css/todoItem.css';

class todoItem extends Component {
  render() {
    const { id, text , checked, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => {
        onToggle(id);
      }}>
      <div className="remove" onClick={(e) => {
        e.stopPropagation();
        onRemove(id)}
      }>&times;</div>
      <div id={id}>
        <p>{text}</p>
      </div>
      {
        checked && (<div className="check-mark">✓</div>)
      }
      </div>
    );
  }
}

export default todoItem;
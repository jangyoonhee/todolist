import React, { Component } from 'react';
import TodoItem from './todoItem';

class todoList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      ({id, text, checked}) =>(
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
        ></TodoItem>
      )
    );

    return (
       <div>
         {todoList}
       </div>
    );
  }
}

export default todoList;
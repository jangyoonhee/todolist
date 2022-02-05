import React, { Component } from 'react';
import TodoItem from './todoItem';

class todoList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      ({id, text, checked}) =>(
        <TodoItem
          key={id}
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove} 
        ></TodoItem>
      )
    );

    return (
       <div className="todoList" >
         {todoList}
       </div>
    );
  }
}

export default todoList;
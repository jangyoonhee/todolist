import React, { Component } from 'react';
import TodoItem from './todoItem';

class todoList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      ({_id, title, isDone}) =>(
        <TodoItem
          key={_id}
          id={_id}
          text={title}
          checked={isDone}
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
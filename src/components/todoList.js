import React, { Component } from 'react';
import TodoItem from './todoItem';

class todoList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
        <div>
            <TodoItem id={1} text={"목록1"}/>
            <TodoItem id={2} text={"목록2"}/>
            <TodoItem id={3} text={"목록3"}/>        
        </div>
    );
  }
}

export default todoList;
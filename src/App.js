import React, { Component } from 'react';
import Card from "./components/card";
import Form from "./components/form";
import TodoList from "./components/todoList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemID : 0,
      input: '',
      todos: [
      ],
      message: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e // input 의 다음 바뀔 값
    });
  }

  handleAddClick = (e) => {
    this.setState({
      input: e // input 의 다음 바뀔 값
    });

    const {itemID, input, todos } = this.state;
    this.setState({
      itemID : itemID+1,
      todos: todos.concat({
        id : itemID,
        text: input,
        checked: false
      })
    });
  }

  handleAddEvent = () => {
    const {itemID, input, todos } = this.state;
    this.setState({
      itemID : itemID+1,
      todos: todos.concat({
        id : itemID,
        text: input,
        checked: false
      })
    });
  }

  handleToggle = (itemID) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === itemID);
    const selected = todos[index]; 
    const nextTodos = [...todos];

    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (itemID) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === itemID);
    const nextTodos = [...todos];

    nextTodos.splice(index,1);
   
    this.setState({
      todos: nextTodos
    });
  }

  render() {
    const {itemID, todos } = this.state;
    const {
      handleChange,
      handleAddEvent,
      handleAddClick,
      handleToggle,
      handleRemove
    } = this;

    return (
      <Card form={(
        <Form 
          itemID = {itemID}
          onChange={handleChange}
          onAddEvent={handleAddEvent}
          onAddClick={handleAddClick} 
        />
      )} todoList={(
        <TodoList 
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      )}>
      </Card>
    )
  }
}

export default App;
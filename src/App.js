import React, { Component } from 'react';
import Card from "./components/card";
import Form from "./components/form";
import TodoList from "./components/todoList";

class App extends Component {

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      const { input, todos } = this.state;
      this.setState({
        input: '', 
        todos: todos.concat({
          id: this.id++,
          text: input,
          checked: false
        })
      });
    }
  }

  render () {
    const { input, todos } = this.state;
    const { 
       handleKeyPress
       ,handleToggle
       ,handleRemove
    } = this;

    return (
      <div>
        <Card form={(
          <Form
            value ={input}
            onKeyPress={handleKeyPress}
          />
          )}>
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        </Card>
      </div>
    );
  }
}

export default App;

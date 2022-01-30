import React, { Component } from 'react';
import Card from "./components/card";
import Form from "./components/form";
import TodoList from "./components/todoList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 3,
      input: '',
      todos: [
      ],
      message: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }
  
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.state.id++,
        text: input,
        checked: false
      })
    });
  }
  // handleKeyPress = (e) => {
  //   // 눌려진 키가 Enter 면 handleCreate 호출
  //   this.setState({message: e.key})
  //   console.log(e, e.key);
  //   if(e.key === 'Enter') {
  //     this.handleCreate();
  //   }
  // }

  onAddEvent = (message) => {
    console.log(message);
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.state.id++,
        text: input,
        checked: false
      })
    });
  }

  handleToggle = () => {
    console.log();
  }

  handleRemove = () => {
    console.log();
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      // handleKeyPress,
      onAddEvent,
      handleToggle,
      handleRemove
    } = this;

    return (
      <Card form={(
        <Form 
          value={input}
          // onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          onAddEvent={onAddEvent}
        />
      )} todos={(
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
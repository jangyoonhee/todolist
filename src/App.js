import React, { Component } from 'react';
import Card from "./components/card";
import Form from "./components/form";
import TodoList from "./components/todoList";

class App extends Component {

  id = 3 
  state = {
    input: '',
    todos: [
    ],
    message: '',
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
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    this.setState({message: e.key})
    console.log(e, e.key);
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }


  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <Card form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoList todos={todos}/>
        {this.message}
      </Card>
    );
  }
}

export default App;
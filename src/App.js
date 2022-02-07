import React, { Component } from 'react';
import Card from "./components/card";
import Form from "./components/form";
import TodoList from "./components/todoList";
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemID : 0,
      input: '',
      todos: [
      ],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    axios.get('https://haja-api.webchemist.net/v1/todo')
    .then((response) => {
      let data = response.data; //[{"_id":"6200d477f6fc95b7c3696d53","content":"원열이에게 소고기 사줘주기","title":"섭이형 할일","priority":"P2","isDone":true,"deleted":false,"date":"2022-02-07T08:12:39.980Z","createdAt":"2022-02-07T08:12:39.981Z","updatedAt":"2022-02-07T11:49:35.986Z"},{"_id":"62010652312cb7faa8352f7a","content":"형이 했다!!! 너희 뭐하냐!","title":"형이 했다!!! 너희 뭐하냐!","isDone":false,"date":"2022-02-07T11:45:22.446Z","createdAt":"2022-02-07T11:45:22.446Z","updatedAt":"2022-02-07T11:45:22.446Z"},{"_id":"620107ee312cb7faa8352fa6","content":"섭이 강림!!","title":"섭이 강림!!","isDone":false,"date":"2022-02-07T11:52:14.795Z","createdAt":"2022-02-07T11:52:14.796Z","updatedAt":"2022-02-07T11:52:14.796Z"}      
      this.setState({todos: data});
    }).catch((err) => {
      alert("error:" + err.message);
    });
  }

  handleChange(value) {
    this.setState({
      input: value // input 의 다음 바뀔 값
    });
  }

  handleAddEvent() {
    axios.post('https://haja-api.webchemist.net/v1/todo', {
      "isDone": false,
      "title": this.state.input,
      "content": this.state.input,
      "date": new Date()
    })
    .then((response) => {
      alert('저장되었습니다.');
      this.loadData();
    })
    .catch((error) => {
      alert('실패하였습니다.');
    });
  }

  handleToggle(itemID) {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo._id === itemID);
    const selected = todos[index]; 
    const nextTodos = [...todos];

    nextTodos[index] = { 
      ...selected, 
      isDone: !selected.isDone
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove(itemID) {
//   const { todos } = this.state;
//   const index = todos.findIndex(todo => todo._id === itemID);
//   const nextTodos = [...todos];
//
//   nextTodos.splice(index,1);
   
//    this.setState({
//      todos: nextTodos
//    });
    axios.delete('https://haja-api.webchemist.net/v1/todo/' + itemID)
    .then((response) => {
      alert('삭제되었습니다.');
      this.loadData();
    })
    .catch((error) => {
      alert('실패하였습니다.');
    });
  }


  render() {
    const {itemID, todos} = this.state;

    return (
      <Card form={(
        <Form 
          itemID = {itemID}
          onChange={() => this.handleChange()}
          onAddEvent={() => this.handleAddEvent()}
          value={this.state.input}
        />
      )} todoList={(
        <TodoList 
          todos={todos}
          onToggle={() => this.handleToggle()}
          onRemove={() => this.handleRemove()}
        />
      )}>
      </Card>
    )
  }
}

export default App;
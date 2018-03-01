import React, { Component } from 'react';
// import logo from '../logo.svg';
// import './App.css';

import TodoListController from './TodoList/todoListController';
import AddTodoController from './AddTodo/addTodoController';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListController/>
        <AddTodoController/>
      </div>
    );
  }
}

export default App;

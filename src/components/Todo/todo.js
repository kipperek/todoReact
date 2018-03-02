import React, { Component } from 'react';

import TodoListController from './TodoList/todoListController';
import AddTodoController from './AddTodo/addTodoController';


class Todo extends Component {
  render() {
    return (
      <div>
        <TodoListController/>
        <AddTodoController/>
      </div>
    );
  }
}

export default Todo;

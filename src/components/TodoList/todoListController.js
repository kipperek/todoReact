import React, { Component } from 'react';
import TodoList from './todoList';
import { connect } from 'react-redux';
import './todoList.css';
import store from '../../store';
import * as todoActions from '../../services/actions/todo';

class TodoListController extends Component {

  constructor(){
    super();
    this.editTodo = this.editTodo.bind(this);
    this.markTodo = this.markTodo.bind(this);
  }

  editTodo (item) {
    console.log(item);
  }

  markTodo (item) {
    store.dispatch({
      type: todoActions.MARK_TODO,
      itemId: item.id
    });
  }

  render() {
    return (
      <TodoList items={this.props.items} editTodo={this.editTodo} markTodo={this.markTodo}/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    items: store.todoState.todoList
  };
};

// export default TodoListController;
export default connect(mapStateToProps)(TodoListController);

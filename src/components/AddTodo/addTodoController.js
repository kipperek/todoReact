import React, { Component } from 'react';
import AddTodo from './addTodo';
import store from '../../store';
import * as todoActions from '../../services/actions/todo';

class AddTodoController extends Component {

  constructor(){
    super();
    this.state = { newTodo: [] };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo (e) {
    e.preventDefault();
    if(!this.state.newTodo) return;
    store.dispatch({
      type: todoActions.ADD_TODO,
      item: this.state.newTodo
    });

    this.setState({newTodo: ''});
    this.inputElement.focus();
  }

  handleChange (e) {
    this.setState({newTodo: e.target.value })
  }

  render() {
    return (
      <AddTodo add={this.addTodo} handleChange={this.handleChange} newtodo={this.state.newTodo} inputRef={el => this.inputElement = el}/>
    );
  }
}

export default AddTodoController;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import * as todoActions from '../../services/actions/todo';
import EditTodo from './editTodo';
import { browserHistory } from 'react-router';
// import './todoList.css';


class EditTodoController extends Component {

  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);

    this.state = { todo: '' };
  }

  componentDidMount() {
    try{
      let id = parseInt(this.props.routeParams.todoId, 10);
      if(isNaN(id)) throw 'Invalid parameter';

      let todo = this.props.todoList.find((item) => item.id === id);
      if(todo === null || todo === undefined) throw '404';

      this.setState({ todo: todo.stringRepresent, todoObj: todo });
    }catch(e){
      console.log(e)
    }
  }

  editTodo(e) {
    e.preventDefault();

    store.dispatch({
      type: todoActions.EDIT_TODO,
      itemString: this.state.todo,
      itemId: this.state.todoObj.id
    });

    browserHistory.push('/');
  }

  cancelEdit(e) {
    e.preventDefault();
    browserHistory.push('/');
  }

  handleChange (e) {
    this.setState({ todo: e.target.value });
  }

  render() {
    return (
      <EditTodo editTodo={this.editTodo} handleChange={this.handleChange} todo={this.state.todo} cancelEdit={this.cancelEdit}/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    todoList: store.todoState.todoList
  };
};

export default connect(mapStateToProps)(EditTodoController);

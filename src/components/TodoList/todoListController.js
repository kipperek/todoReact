import React, { Component } from 'react';
import TodoList from './todoList';
import { connect } from 'react-redux';


class TodoListController extends Component {

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (item) {
    console.log(item);
  }

  render() {
    return (
      <TodoList items={this.props.items} handleClick={this.handleClick}/>
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

import React, { Component } from 'react';
import TodoList from './todoList';
import { connect } from 'react-redux';
import './todoList.css';
import store from '../../../store';
import * as todoActions from '../../../services/actions/todo';
import { browserHistory } from 'react-router';

class TodoListController extends Component {

  constructor(){
    super();
    this.editTodo = this.editTodo.bind(this);
    this.markTodo = this.markTodo.bind(this);
    this.state = { items: [] };
  }

  editTodo (item) {
    browserHistory.push('/edit/'+item.id);
  }

  markTodo (item) {
    store.dispatch({
      type: todoActions.MARK_TODO,
      itemId: item.id
    });
  }

  updateItems (state){
    this.setState({ items: state.items.sort( (a,b) => {
        if ( a.stringRepresent.toLowerCase() < b.stringRepresent.toLowerCase() )
          return -1;
        if ( a.stringRepresent.toLowerCase() > b.stringRepresent.toLowerCase() )
          return 1;

        return 0;
      })
    });
  }

  componentDidMount() {
    this.updateItems(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateItems(nextProps);
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} editTodo={this.editTodo} markTodo={this.markTodo}/>
        <TodoList showDone={true} items={this.state.items} editTodo={this.editTodo} markTodo={this.markTodo}/>
      </div>
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

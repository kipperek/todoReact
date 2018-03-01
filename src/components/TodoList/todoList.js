import React, { Component } from 'react';

class TodoList extends Component {
  iterate(){
    return this.props.items.map((item) =>
    <div className={"flex-container todo-item " + (item.done && 'full')} key={item.id} >
      <div className="flex-no-shrink" onClick={ () => this.props.markTodo(item) }>
        <div className="todo-circle">
          {item.done && '✔'}
        </div>
      </div>
      <div className="flex-big" onClick={ () => this.props.editTodo(item) }>{item.stringRepresent}</div>
    </div>);
  }

  render() {
    return (
      <div>
        {this.iterate()}
      </div>

    );
  }
}

export default TodoList;

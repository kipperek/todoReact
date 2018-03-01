import React, { Component } from 'react';

class TodoList extends Component {
  renderItem(item) {
    if(this.props.showDone && !item.done) return null;
    if(!this.props.showDone && item.done) return null;

    return <div className={"flex-container todo-item " + (item.done && 'full')} key={item.id} >
      <div className="flex-no-shrink" onClick={ () => this.props.markTodo(item) }>
        <div className="todo-circle">
          {item.done && '✔'}
        </div>
      </div>
      <div className="flex-big" onClick={ () => this.props.editTodo(item) }>{item.stringRepresent}</div>
    </div>
  }


  render() {
    return (
      <div>
        { this.props.items.map((item) => this.renderItem(item)) }
      </div>

    );
  }
}

export default TodoList;

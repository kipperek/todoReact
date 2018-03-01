import React, { Component } from 'react';

class TodoList extends Component {
  iterate(){
    return this.props.items.map((item) => <div key={item} onClick={ () => this.props.handleClick(item) }>{item}</div>);
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

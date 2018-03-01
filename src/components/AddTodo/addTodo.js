import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.newtodo} onChange={this.props.handleChange}/>
        <button onClick={this.props.add}>Dodej</button>
      </div>

    );
  }
}

export default AddTodo;

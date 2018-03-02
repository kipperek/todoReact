import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.add}>
          <input type="text" value={this.props.newtodo} onChange={this.props.handleChange} ref={this.props.inputRef}/>
          <input value="Dodej" type="submit" />
        </form>
      </div>

    );
  }
}

export default AddTodo;

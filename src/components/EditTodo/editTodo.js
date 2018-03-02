import React, { Component } from 'react';

class EditTodo extends Component {
  render() {
    return (
      <div>
        <div>Edytujemy</div>
        <form onSubmit={this.props.editTodo}>
          <input type="text" value={this.props.todo} onChange={this.props.handleChange} ref={this.props.inputRef}/>
          <input value="Editej" type="submit" />
          <button onClick={this.props.cancelEdit}>Anulej</button>
        </form>
      </div>

    );
  }
}

export default EditTodo;

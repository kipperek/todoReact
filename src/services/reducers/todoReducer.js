import * as todoActions from '../actions/todo';

const initialState = {
  todoList: [],
  todo: null
}

const todoReducer = function(state = initialState, action) {
  switch(action.type) {

    case todoActions.ADD_TODO:
      return Object.assign({}, state, { todoList: [action.item, ...state.todoList] });

    default: break;
  }
  return state;

}

export default todoReducer;

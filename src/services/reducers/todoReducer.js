import * as todoActions from '../actions/todo';

const initialState = {
  todoList: [],
  lastId: 0
}

const todoReducer = function(state = initialState, action) {
  switch(action.type) {

    case todoActions.ADD_TODO:
      return Object.assign({}, state, { todoList: [{ stringRepresent: action.item, id: state.lastId+1 } , ...state.todoList], lastId: state.lastId+1 });

    case todoActions.MARK_TODO:
        let markList = state.todoList.map((item) => {
        if(item.id === action.itemId){
          item.done = !item.done;
        }
        return item;
      });

      return Object.assign({}, state, { todoList: markList });

    case todoActions.EDIT_TODO:
      let editList = state.todoList.map((item) => {
      if(item.id === action.itemId){
        item.stringRepresent = action.itemString;
      }
      return item;
    });

    return Object.assign({}, state, { todoList: editList });

    default: break;
  }
  return state;

}

export default todoReducer;

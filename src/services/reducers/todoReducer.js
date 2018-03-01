import * as todoActions from '../actions/todo';

const initialState = {
  todoList: [],
  todo: null,
  lastId: 0
}

const todoReducer = function(state = initialState, action) {
  switch(action.type) {

    case todoActions.ADD_TODO:
      return Object.assign({}, state, { todoList: [{ stringRepresent: action.item, id: state.lastId+1 } , ...state.todoList], lastId: state.lastId+1 });

    case todoActions.MARK_TODO:
      let newList = state.todoList.map((item) => {
        if(item.id === action.itemId){
          item.done = !item.done;
        }
        return item;
      }).sort((item) => {
        return item.done ? 1 :0;
      });

      return Object.assign({}, state, { todoList: newList });
    default: break;
  }
  return state;

}

export default todoReducer;

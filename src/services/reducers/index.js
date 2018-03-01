import { combineReducers } from 'redux';

// Reducers
import todoReducer from './todoReducer';

var reducers = combineReducers({
    todoState: todoReducer
});

export default reducers;

import { todoReducer } from './todo_reducer';
import { combineReducers } from 'redux';
import { errorReducer } from './error_reducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  errors: errorReducer
})


export default rootReducer
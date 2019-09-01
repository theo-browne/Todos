import { todoReducer } from './todo_reducer';
import { combineReducers } from 'redux';
import { errorReducer } from './error_reducer';
import { stepReducer } from './step_reducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  errors: errorReducer,
  steps: stepReducer
})


export default rootReducer
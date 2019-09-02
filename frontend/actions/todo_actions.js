export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";


import * as TodoApiUtil from '../util/todo_api_utils';
import {receiveErrors, clearErrors} from '../actions/error_actions'


export const receiveTodos = (data) => ({
  type: RECEIVE_TODOS,
  data
})


// Thunk Action to fetch all todos
export const fetchTodos = () => dispatch => { 
  return TodoApiUtil.fetchTodos()
  .then( todos => dispatch(receiveTodos(todos)) )  
}




export const receiveTodo = (data) => ({
  type: RECEIVE_TODO,
  data
})

// Thunk Action to create
export const createTodo = (todo) => dispatch => {
  return TodoApiUtil.createTodo(todo)
  .then(todo =>dispatch(receiveTodo(todo)),
         err => dispatch(receiveErrors(err.responseJSON)))
}

export const removeTodo = (data) => ({
  type: REMOVE_TODO,
  data
})

export const deleteTodo = (todo) => dispatch => {
  return TodoApiUtil.deleteTodo(todo)
  .then(todo =>dispatch(removeTodo(todo)) )
}

export const updateTodo = (todo) => dispatch => {
  return TodoApiUtil.updateTodo(todo)
  .then(todo =>dispatch(receiveTodo(todo)))
}


// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos;
// window.fetchTodos = fetchTodos;
// window.createTodo = createTodo;

// window.fetchSteps = fetchSteps
// window.receiveSteps = receiveSteps

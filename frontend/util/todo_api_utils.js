import {receiveTodos, receiveTodo, removeTodo} from '../actions/todo_actions';


export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });

}


export const createTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: {
      todo
    }
  });
}

export const deleteTodo = (todo) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/todos/${todo.id}`,
  });
}

export const updateTodo = (todo) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/todos/${todo.id}`,
    data: {
      todo
    }
  })
}
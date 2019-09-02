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
    url: `/api/todos/${todo.id}`,
    data: {
      todo
    }
  })
}

export const fetchSteps = (todo)  => {
  return $.ajax({
    method: 'GET',
    url :`/api/todos/${todo.id}/steps`
  })
}

export const createStep = (todo, step) => {
  
  return $.ajax({
    method: 'POST',
    url: `/api/todos/${todo.id}/steps`,
    data: {
      step: step
    }
  });
}


export const updateStep = (step) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/steps/${step.id}`,
    data: {
      step
    }
  })
}

export const deleteStep = (step) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/steps/${step.id}`,
  });
}

// $.ajax({
//   method: 'GET',
//   url: `/api/todos/${todo.id}/steps`
// }).then(steps => dispatch(receiveSteps(steps)))
// window.receiveSteps = receiveSteps
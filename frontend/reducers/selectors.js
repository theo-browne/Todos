
export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let todos = keys.map(todo => (
    state.todos[todo]
  ))
  return todos
}


export const allSteps = (state, todo) => {
  
  let keys = Object.keys(state.steps);
  let steps = [];
  keys.forEach(key => {
    if (state.steps[key].todo_id === todo.id) {
      steps.push(state.steps[key])
    }
  })
  
  return steps
}



// export default allTodos

window.allTodos = allTodos

export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let todos = keys.map(todo => (
    state.todos[todo]
  ))
  return todos
}


export const allSteps = (state) => {
  let keys = Object.keys(state.todos);
  let steps = keys.map(step => (
    state.steps[step]
  ))
  debugger
  return steps
}



// export default allTodos

window.allTodos = allTodos
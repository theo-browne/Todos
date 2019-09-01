
export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let todos = keys.map(todo => (
    state.todos[todo]
  ))
  return todos
}


export const allSteps = (state, todo) => {
  let keys = Object.keys(state.steps)
  let steps = [];
  for (let i = 0; i < keys.length; i++) {
    if (state.steps[keys[i]].todo_id === todo.id) {
      steps.push(state.steps[keys[i]])
    }
  }
  return steps
}


// export default allTodos

window.allTodos = allTodos
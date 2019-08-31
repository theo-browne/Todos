
const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let todos = keys.map(todo => (
    state.todos[todo]
  ))
  return todos
}

export default allTodos

window.allTodos = allTodos
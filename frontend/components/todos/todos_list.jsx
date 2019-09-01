import React from 'react'
import TodoListItem from './todo_list_item';
import TodoForm from'./todo_form'

class List extends React.Component {
  constructor(props){
    super(props)
  }


  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {

    return (
      <div className="todo-container">
        <div className="todos">
        <h1>Todo List</h1>
        <ul>
       
          {
              
            this.props.todos.map(todo => (
              <div className="todo-list">
              <TodoListItem key={todo.id} receiveSteps={this.props.receiveSteps} fetchSteps={this.props.fetchSteps} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} todo={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo} />
              </div>))
         
              }
        </ul>
        <TodoForm clearErrors={this.props.clearErrors} createTodo={this.props.createTodo} errors={this.props.errors} />

        </div>
      </div>
    )}
  }

export default List
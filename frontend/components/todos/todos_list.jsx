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
        <h1>Todo List</h1>
        <div className="todo-list">
          {
            this.props.todos.map(todo => (<TodoListItem key={todo.id} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} todo={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo} />))
          }
        </div>
        <TodoForm clearErrors={this.props.clearErrors} createTodo={this.props.createTodo} errors={this.props.errors} />

        {/* {this.props.errors.map( error =>  (
          <p> {error} </p>
        )
        )} */}
      </div>
    )}
  }

export default List
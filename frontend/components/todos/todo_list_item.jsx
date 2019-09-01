import React from 'react';
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.todo.title,
      body: this.props.todo.body,
      id: this.props.todo.id,
      done: this.props.todo.done
    
    }
    

    // this.isDone()
    this.toggleDone = this.toggleDone.bind(this)
  }

  // isDone() {
  //   if (this.props.todo.done) {
  //     e.target.parentNode.classList.add("done")
  //   }
  // }

  toggleDone(e) {
    
    let newTodo = {
      id: this.state.id,
      done: !this.state.done,
      title: this.state.title,
      body: this.state.body
    }
    this.props.updateTodo(newTodo)
    if (this.state.done === false) {
      
      this.setState({ done: true });
      // e.target.parentNode.classList.add("done")
      // e.target.innerText = "Not Done"
    } else {
      
      this.setState({ done: false });
      // e.target.parentNode.classList.remove("done");
      // e.target.innerText = "Done"
    }
    
  }



  render() {
    let done = "";
    let text = "Done"
    if (this.state.done === true) {
      done = "done";
      text = "Not Done"
    }
    return (
      <div className="todo">
        <button onClick={() => this.props.deleteTodo(this.props.todo)} class="delete">X</button>
      <ul className={done}>
        <li>{this.props.todo.title}</li>
        <li>{this.props.todo.body}</li>
        <button onClick={this.toggleDone}>{text}</button>
      </ul>
      </div>
    )
  }
}

export default TodoListItem
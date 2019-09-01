import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: "",
      title: "",
      id: this.uniqueId(),
      done: false
    }
    // this.handleBody = this.handleBody.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.handleTitle = this.handleTitle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.uniqueId = this.uniqueId.bind(this)
  }

  // handleBody(e) {
  //   this.setState({ body: e.target.value })
  // }
  // handleTitle(e) {
  //   this.setState({ title: e.target.value })
  // }

  handleChange(e) {
    let target;

    if (e.target.id === "body-input") {
      target = "body"
    } else if (e.target.id === "title-input") {
      target = "title"
    }
    this.setState({ [target]: e.target.value})
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state).then(
      () => this.setState({ title: '', body: '' })
         ).then(() => this.props.clearErrors());
    // this.setState ({
    //   body: "",
    //   title: "",
    //   id: this.uniqueId(),
    // })
  }

  uniqueId() {
    return new Date().getTime();
  }

  render() {
   

    return (
      <div className="todo-form">
    <form onSubmit={this.handleSubmit} className="new-todo">
      <label>Title</label>
      <br/>
        <input onChange={this.update('title')} id="title-input" type="text" value={this.state.title}/>
      <br/>
        <label>Body</label>
        <br />
        <input onChange={this.update('body')} id="body-input" type="text" value={this.state.body} />
        <br/>
      <input type="submit" value="New Todo"/>
    </form>
        {this.props.errors.map(error => (
          <p> {error} </p>
        )
        )}
      </div>
    )}
}

export default TodoForm 
import React from 'react'

export default class StepForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      todo_id: this.props.todo["todo"].id,
      done: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    
    this.setState({ title: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createStep(this.props.todo["todo"], this.state).then(
      () => this.setState({ title: '', body: '' })
    )
  }

  render(){
    return(
      <form >
        <label> New Task
        <input type="text" onChange={this.handleChange} value={this.state.title}/>
        </label>
        <input type="submit" onClick={this.handleSubmit}/>
      </form>
    )
  }
}
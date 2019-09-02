import React from 'react'

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.step.title,
      todo_id: this.props.step.todo_id,
      id: this.props.step.id,
      done: this.props.step.done,
    }
  }

  toggleDone(e) {
    let newStep = {
      id: this.state.id,
      done: !this.state.done,
      title: this.state.title,
      body: this.state.body,
      detail: false
    }

  }

  render() {
    return(
      <div className="step">
        <p>{this.props.step.title}</p>
        <button onClick={() => this.props.deleteStep(this.props.step)}>Delete Step</button>
      </div>
    )
  }
}
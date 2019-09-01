import React from 'react';


export default class TodoDetailView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: []
    }
    this.getSteps()
    // this.props.fetchSteps(this.props.todo)
    // console.log(this.props.steps)
  }

  // componentDidMount() {
  //   this.props.fetchSteps(this.props.todo);
  // }

  getSteps() {
    let steps = []
    for (let i = 0; i < this.props.steps.length; i++) {
      if (this.props.steps[i].id === this.props.todo) {
        steps.push(this.props.steps[i])
      }
      
    }
    this.setState({steps})
  }
  // componentWillMount() {
  //   this.getSteps()
  // }

  

  render() {

    // this.props.fetchSteps(this.props.todo)
    // console.log(this.props.steps)
    // console.log(this.props.todo)
    // console.log(this.props.fetchSteps(this.props.todo))
    return(
      <div className="step-list">
        <ul>
        {
          this.state.steps.map(step => <li>{step.title}</li>)
        }
        </ul>
      </div>
    )
  }
}
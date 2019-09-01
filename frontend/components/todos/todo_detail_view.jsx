import React from 'react';


export default class TodoDetailView extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   steps: []
    // }
    // this.props.fetchSteps(this.props.todo)
    // console.log(this.props.steps)
  }

  // componentDidMount() {
  //   this.props.fetchSteps(this.props.todo);
  // }

  

  

  render() {

    // this.props.fetchSteps(this.props.todo)
    console.log(this.props.steps)
    // console.log(this.props.todo)
    // console.log(this.props.fetchSteps(this.props.todo))
    return(
      <div className="step-list">
        <ul>
        {
          this.props.steps.map(step => <li>{step.title}</li>)
        }
        </ul>
      </div>
    )
  }
}
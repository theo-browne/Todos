import  React from "react";
import StepForm from "./step_list_form";
import StepListItem from './step_list_item'

export default class StepList extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="steps">
      <ul >
          <title>Tasks</title>
        Tasks
        <li>
          {
              this.props.steps.map(step => <StepListItem updateStep={this.props.updateStep} deleteStep={this.props.deleteStep} step={step} />)
          }
        </li>
      </ul>
        <StepForm todo={this.props.todo}  recieveStep={this.props.recieveStep} createStep={this.props.createStep} />
      </div>
    )
  }
} 
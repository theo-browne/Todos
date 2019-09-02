import { connect } from 'react-redux';
import StepList from './step_list';
import { allSteps } from '../../reducers/selectors'
import { receiveSteps, createStep, deleteStep, removeStep, updateStep } from '../../actions/step_actions'


const mapStateToProps = (state, todo) => {
  
  return ({
    steps: allSteps(state, todo["todo"]),
    todo
  })
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchSteps: todo => dispatch(fetchSteps(todo)),
    receiveSteps: steps => dispatch(receiveSteps(steps)),
    createStep: (todo, step) => dispatch(createStep(todo, step)),
    receiveStep: step => dispatch(receiveStep(step)),
    removeStep: step => dispatch(removeStep(step)),
    deleteStep: step => dispatch(deleteStep(step)),
    updateStep: step => dispatch(updateStep(step))
    // removeTodo: todo => dispatch(removeTodo(todo))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StepList)

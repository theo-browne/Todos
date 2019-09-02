import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { allSteps } from '../../reducers/selectors'
import { receiveSteps, fetchSteps} from '../../actions/step_actions'


const mapStateToProps = (state) => {
  return ({
    steps: Object.values(state.steps)
  })
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSteps: todo => dispatch(fetchSteps(todo)),
    receiveSteps: steps => dispatch(receiveSteps(steps)),
    removeTodo: todo => dispatch(removeTodo(todo))
  }
}


export default connect(null , mapDispatchToProps)(TodoDetailView)

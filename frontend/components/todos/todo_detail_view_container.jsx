import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { allSteps } from '../../reducers/selectors'
import { receiveSteps, fetchSteps} from '../../actions/todo_actions'


const mapStateToProps = (state) => {
  return ({
    steps: Object.values(state.steps)
  })
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSteps: todo => dispatch(fetchSteps(todo)),
    receiveSteps: steps => dispatch(receiveSteps(steps))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailView)

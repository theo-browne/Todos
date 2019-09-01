import { RECEIVE_STEPS } from '../actions/todo_actions';


export const stepReducer = (state = {}, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_STEPS:
      // newState = {}
      action.data.forEach(step => {
        newState[step.id] = step
      });
      return newState
    default:
      return state
  }
}
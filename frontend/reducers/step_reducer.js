import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';


export const stepReducer = (state = {}, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_STEPS:
      // newState = {}
      action.data.forEach(step => {
        newState[step.id] = step
      });
    case RECEIVE_STEP:
      newState[action.data.id] = action.data;
      return newState
      case REMOVE_STEP:
       delete newState[action.data.id]
       return newState 
    default:
      return state
  }
}
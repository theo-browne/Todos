export const RECEIVE_STEPS = "RECEIVE_STEPS"
export const RECEIVE_STEP = "RECEIVE_STEP"
export const REMOVE_STEP = "REMOVE_STEP"
import * as TodoApiUtil from '../util/todo_api_utils';


export const receiveSteps = (data) => (
  {
    type: RECEIVE_STEPS,
    data

  }
)
export const receiveStep = (data) => (
  {
    type: RECEIVE_STEP,
    data

  }
)
export const removeStep = (data) => (
  {
    type: REMOVE_STEP,
    data

  }
)

export const updateStep = step => dispatch => {
  return TodoApiUtil.updateStep(step)
    .then(step => dispatch(receiveStep(step)))
}

export const deleteStep = step => dispatch => {
  return TodoApiUtil.deleteStep(step)
        .then(step => dispatch(removeStep(step)))
}


export const fetchSteps = (todo) => dispatch => {
  return TodoApiUtil.fetchSteps(todo)
    .then(steps => dispatch(receiveSteps(steps)))
}

export const createStep = (todo , step) => dispatch => {
  return TodoApiUtil.createStep(todo, step)
          .then(step => dispatch(receiveStep(step)))
}

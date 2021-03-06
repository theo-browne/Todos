import { connect } from 'react-redux';
import List from './todos_list';
import { receiveTodo, fetchTodos, createTodo, deleteTodo, updateTodo,  receiveTodos, RECEIVE_TODOS, RECEIVE_TODO, removeTodo } from '../../actions/todo_actions'
import { fetchSteps, receiveSteps} from '../../actions/step_actions'
import {allTodos} from '../../reducers/selectors'
import { clearErrors } from '../../actions/error_actions';


const mapStateToProps = (state) => { 
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};


const mapDispatchToProps = dispatch => {
  return {
    receiveTodo: todo =>  dispatch(receiveTodo(todo)), 
    removeTodo: todo =>  dispatch(removeTodo(todo)), 
    fetchTodos: todos => dispatch(fetchTodos(todos)),
    createTodo: todo => dispatch(createTodo(todo)),
    clearErrors: () => dispatch(clearErrors()),
    deleteTodo: todo => dispatch(deleteTodo(todo)),
    updateTodo: todo => dispatch(updateTodo(todo)),
    fetchSteps: todo => dispatch(fetchSteps(todo)),
    receiveSteps: steps => dispatch(receiveSteps(steps))

}}


export default connect(mapStateToProps, mapDispatchToProps)(List)

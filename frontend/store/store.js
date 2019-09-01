import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/root_reducer';
import Thunk from '../middleware/thunk'



const configureStore = (preloadedState = {}) => (
   createStore(
      rootReducer, 
      preloadedState, 
      applyMiddleware(Thunk))
)

export default configureStore
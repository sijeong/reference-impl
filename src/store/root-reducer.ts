import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import hospitalReducer from '../features/hospitals/reducer';
import todosReducer from '../features/todos/reducer';


const rootReducer = combineReducers({
  router: routerReducer,
  todos: todosReducer,
  hospitals: hospitalReducer
});

export default rootReducer;

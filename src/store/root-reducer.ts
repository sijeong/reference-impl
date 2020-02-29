import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";
import todosReducer, { todos } from "../features/todos/reducer";

const rootReducer = combineReducers({
  router: routerReducer,
  todos: todosReducer
});

export default rootReducer;

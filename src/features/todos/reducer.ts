import { combineReducers } from 'redux';
import { Todo } from 'TodoModels';
import { createReducer } from 'typesafe-actions';
import { addTodo, loadTodosAsync, removeTodo, todoActionTypes } from './actions';

// export type actionTypes = ActionType<
//   typeof import("../../store/root-actions").default
// >;

export const isLoadingTodos = createReducer<boolean, todoActionTypes>(
  false as boolean
)
  .handleAction([loadTodosAsync.request], (state, action) => true)
  .handleAction(
    [loadTodosAsync.success, loadTodosAsync.failure],
    (state, action) => false
  );

export const todos = createReducer<Todo[], todoActionTypes>([] as Todo[])
  .handleAction(loadTodosAsync.success, (state, action) => action.payload)
  .handleAction(addTodo, (state, action) => [...state, action.payload])
  .handleAction(removeTodo, (state, action) =>
    state.filter(i => i.id !== action.payload)
  );

const todosReducer = combineReducers({
  isLoadingTodos,
  todos
});

export default todosReducer;
export type TodosState = ReturnType<typeof todosReducer>;

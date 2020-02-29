import { combineReducers } from "redux";
import { Todo } from "TodoModels";
import { createReducer, ActionType } from "typesafe-actions";
import { addTodo, loadTodosAsync, removeTodo } from "./actions";

export type actionTypes = ActionType<
  typeof import("../../store/root-actions").default
>;

export const isLoadingTodos = createReducer<boolean, actionTypes>(
  false as boolean
)
  .handleAction([loadTodosAsync.request], (state, action) => true)
  .handleAction(
    [loadTodosAsync.success, loadTodosAsync.failure],
    (state, action) => false
  );

export const todos = createReducer<Todo[], actionTypes>([] as Todo[])
  .handleAction(loadTodosAsync.success, (state, action) => action.payload)
  .handleAction(addTodo, (state, action) => [...state, action.payload])
  .handleAction(removeTodo, (state, action) =>
    state.filter(i => i.id == action.payload)
  );

const todosReducer = combineReducers({
  isLoadingTodos,
  todos
});

export default todosReducer;
export type TodosState = ReturnType<typeof todosReducer>;

import { Todo } from 'TodoModels';
import cuid from 'cuid';
import { createAction, createAsyncAction, ActionType } from 'typesafe-actions';

export const addTodo = createAction('ADD_TODO', (title: string) => ({
  id: cuid(),
  title
}))<Todo>();

export const removeTodo = createAction('REMOVE_TODO')<string>();

export const loadTodosAsync = createAsyncAction(
  'LOAD_TODOS_REQUEST',
  'LOAD_TODOS_SUCCESS',
  'LOAD_TODOS_FAILURE'
)<undefined, Todo[], string>();

export const saveTodosAsync = createAsyncAction(
  'SAVE_TODOS_REQUEST',
  'SAVE_TODOS_SUCCESS',
  'SAVE_TODOS_FAILURE'
)<undefined, undefined, string>();

export type todoActionTypes =
  | ActionType<typeof loadTodosAsync>
  | ActionType<typeof saveTodosAsync>
  | ActionType<typeof addTodo>
  | ActionType<typeof removeTodo>;
// export type saveActionTypes = ActionType<typeof saveTodosAsync>;

import { Epic, StateObservable } from "redux-observable";
import { Observable, from, of } from "rxjs";
import { filter, switchMap, mergeMap, catchError, map } from "rxjs/operators";

import { loadTodosAsync, saveTodosAsync } from "./actions";
import { getTodos } from "./selectors";
import { Services, RootAction, RootState } from "services";
import { isActionOf, ActionType, Action } from "typesafe-actions";
import { loadSnapshot } from "../../services/todos-api-client";
export type loadActionTypes = ActionType<typeof loadTodosAsync>;
export type saveActionTypes = ActionType<typeof saveTodosAsync>;
export const loadTodosEpic: Epic<
  loadActionTypes,
  loadActionTypes,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadTodosAsync.request)),
    switchMap(() =>
      from(api.todos.loadSnapshot()).pipe(
        map(loadTodosAsync.success),
        catchError((message: string) => of(loadTodosAsync.failure(message)))
      )
    )
  );

export const saveTodoEpic: Epic<
  saveActionTypes,
  saveActionTypes,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(saveTodosAsync.request)),
    switchMap(() =>
      from(api.todos.saveSnapshot(getTodos(state$.value.todos))).pipe(
        map(saveTodosAsync.success),
        catchError((message: string) => of(saveTodosAsync.failure(message)))
      )
    )
  );

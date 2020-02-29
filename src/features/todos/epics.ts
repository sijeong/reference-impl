import { Epic, StateObservable } from "redux-observable";
import { Observable, from, of } from "rxjs";
import { filter, switchMap, mergeMap, catchError, map } from "rxjs/operators";

import { loadTodosAsync } from "./actions";
import {} from "./selectors";
import { Services, RootAction, RootState } from "services";
import { isActionOf, ActionType, Action } from "typesafe-actions";
import { loadSnapshot } from "../../services/todos-api-client";
export type actionTypes = ActionType<typeof loadTodosAsync>;

// export const loadTodosEpic: Epic<
//   actionTypes,
//   actionTypes,
//   RootState,
//   Services
// > = (action$, state$, { api }) =>
//   action$.pipe(
//     filter(isActionOf(loadTodosAsync.request)),
//     mergeMap(() =>
//       from(api.todos.loadSnapshot()).pipe(
//         map(loadTodosAsync.success),
//         catchError((message: string) => of(loadTodosAsync.failure(message)))
//       )
//     )
//   );

export const loadTodosEpic: Epic<actionTypes, actionTypes, RootState, Services> = (
  action$,
  state$,
  { api }
) =>
  action$.pipe(
    filter(isActionOf(loadTodosAsync.request)),
    switchMap(() =>
      from(api.todos.loadSnapshot()).pipe(
        map(loadTodosAsync.success),
        catchError((message: string) => of(loadTodosAsync.failure(message)))
      )
    )
  );

// export const saveTodoEpic: Epic<> = (action$, state$, ) => {};

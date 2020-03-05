import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, delay, filter, map, switchMap } from 'rxjs/operators';
import { RootState, Services } from 'services';
import { isActionOf } from 'typesafe-actions';
import { hospitalActionType, loadHospitalsAsync } from './actions';


export const loadHospitalsEpic: Epic<
  hospitalActionType,
  hospitalActionType,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalsAsync.request)),
    switchMap(() =>
      from(api.hospitals.loadHospitals()).pipe(
        delay(3000),
        map(loadHospitalsAsync.success),
        catchError((message: string) => of(loadHospitalsAsync.failure(message)))
      )
    )
  );

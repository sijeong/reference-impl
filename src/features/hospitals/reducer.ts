import { hospitalActionType, loadHospitalsAsync } from './actions';
import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { Hospital } from 'HospitalModels';

export const isLoadingHospitals = createReducer<boolean, hospitalActionType>(
  false as boolean
)
  .handleAction([loadHospitalsAsync.request], (state, action) => true)
  .handleAction(
    [loadHospitalsAsync.success, loadHospitalsAsync.failure],
    (state, action) => false
  );

export const hospitals = createReducer<Hospital[], hospitalActionType>(
  [] as Hospital[]
).handleAction(loadHospitalsAsync.success, (state, action) => action.payload);

const hospitalReducer = combineReducers({
  isLoadingHospitals,
  hospitals
});

export default hospitalReducer;
export type HospitalState = ReturnType<typeof hospitalReducer>;

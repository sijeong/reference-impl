import { createAsyncAction, ActionType } from 'typesafe-actions';
import { Hospital } from 'HospitalModels';

export const loadHospitalsAsync = createAsyncAction(
  'LOAD_HOSPITALS_REQUEST',
  'LOAD_HOSPITALS_SUCCESS',
  'LOAD_HOSPITALS_FAILURE'
)<undefined, Hospital[], string>();

export type hospitalActionType = ActionType<typeof loadHospitalsAsync>;

import { combineEpics } from "redux-observable";
import {loadTodosEpic, saveTodoEpic} from "../features/todos/epics";
import {loadHospitalsEpic} from '../features/hospitals/epics'

export default combineEpics(loadTodosEpic, saveTodoEpic, loadHospitalsEpic);

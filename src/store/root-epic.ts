import { combineEpics } from "redux-observable";
import {loadTodosEpic, saveTodoEpic} from "../features/todos/epics";

export default combineEpics(loadTodosEpic, saveTodoEpic);

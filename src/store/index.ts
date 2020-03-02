// import { composeEnhancers } from "./utils";
// import { Services } from './../services/type.d';
import { RootAction, RootState, Services } from "services";
import { createEpicMiddleware } from "redux-observable";
import services from "../services";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import rootEpic from "./root-epic";

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services
});

const middlewares = [epicMiddleware];

// const enhancer = composeEnhancers(applyMiddleware(...middlewares))
const enhancer = applyMiddleware(...middlewares);
const initialState = {};

const store = createStore(rootReducer, initialState, enhancer);

epicMiddleware.run(rootEpic);

export default store;

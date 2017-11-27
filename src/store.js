import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import timeline from "./reducers/timeline";

// Prepare Redux Middlewares
const middlewares = [];
middlewares.push(logger);

// Create the Redux store using reducers and middlewares
const reducers = {
  timeline
};

export default createStore(
  combineReducers(reducers),
  applyMiddleware(...middlewares)
);

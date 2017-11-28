import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import orgs from "./reducers/orgs";
import settings from "./reducers/settings";
import timeline from "./reducers/timeline";

// Prepare Redux Middlewares
const middlewares = [];
middlewares.push(logger);
middlewares.push(thunk);

// Create the Redux store using reducers and middlewares
const reducers = {
  orgs,
  settings,
  timeline
};

export default createStore(
  combineReducers(reducers),
  applyMiddleware(...middlewares)
);

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import orgsReducer from "./reducers/orgs";
import settingsReducer from "./reducers/settings";
import timelineReducer from "./reducers/timeline";

export default configureStore({
  reducer: {
    orgs: orgsReducer,
    settings: settingsReducer,
    timeline: timelineReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import orgsReducer from "./reducers/orgs";
import settingsReducer from "./reducers/settings";
import timelineReducer from "./reducers/timeline";

const store = configureStore({
  reducer: {
    orgs: orgsReducer,
    settings: settingsReducer,
    timeline: timelineReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

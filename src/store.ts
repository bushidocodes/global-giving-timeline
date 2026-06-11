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
  middleware: (getDefaultMiddleware) => {
    const base = getDefaultMiddleware();
    return import.meta.env.DEV ? base.concat(logger) : base;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

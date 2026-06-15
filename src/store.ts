import { configureStore } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import orgsReducer from "./reducers/orgs";
import settingsReducer from "./reducers/settings";
import timelineReducer from "./reducers/timeline";

/* eslint-disable no-console */
const devLogger: Middleware = (api) => (next) => (action) => {
  if (typeof action === "object" && action !== null && "type" in action) {
    console.group((action as { type: string }).type);
  }
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", api.getState());
  console.groupEnd();
  return result;
};
/* eslint-enable no-console */

const store = configureStore({
  reducer: {
    orgs: orgsReducer,
    settings: settingsReducer,
    timeline: timelineReducer
  },
  middleware: (getDefaultMiddleware) => {
    const base = getDefaultMiddleware();
    return import.meta.env.DEV ? base.concat(devLogger) : base;
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

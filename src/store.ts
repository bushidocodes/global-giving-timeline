import type { Middleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import orgsReducer from "./reducers/orgs";
import settingsReducer from "./reducers/settings";
import timelineReducer from "./reducers/timeline";

const devLogger: Middleware = (api) => (next) => (action) => {
  if (typeof action === "object" && action !== null && "type" in action) {
    // biome-ignore lint/suspicious/noConsole: intentional Redux dev logger
    console.group((action as { type: string }).type);
  }
  // biome-ignore lint/suspicious/noConsole: intentional Redux dev logger
  console.log("dispatching", action);
  const result = next(action);
  // biome-ignore lint/suspicious/noConsole: intentional Redux dev logger
  console.log("next state", api.getState());
  // biome-ignore lint/suspicious/noConsole: intentional Redux dev logger
  console.groupEnd();
  return result;
};

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

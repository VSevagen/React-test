import { combineReducers, configureStore } from "@reduxjs/toolkit";

import employees from "./employees";
import global from "./global";

const reducer = combineReducers({
  global,
  employees,
});
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
    }),
});
export default store;

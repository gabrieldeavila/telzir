import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./../reducers/index";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });

export type AppState = ReturnType<typeof rootReducer>;

export default store;

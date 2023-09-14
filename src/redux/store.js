import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore({ reducer: rootReducers, devTools: composeWithDevTools() })
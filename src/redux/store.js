import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default configureStore({
    reducer: rootReducers,
    devTools: composeWithDevTools(
        applyMiddleware(thunk)
    ),
});

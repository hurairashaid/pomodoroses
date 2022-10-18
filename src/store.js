import { createStore, applyMiddleware, compose } from "redux";
import changePathReducer from "./reducers/index";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    changePathReducer,
    composeEnhancers(applyMiddleware())
);

export default store;

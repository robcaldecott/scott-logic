import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import users from "./users";
import details from "./details";
import posts from "./posts";
import albums from "./albums";
import todos from "./todos";

// Support Redux DevTools Chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initStore = initialState =>
  createStore(
    combineReducers({ users, details, posts, albums, todos }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

export default initStore;

import { combineReducers, createStore, applyMiddleware } from "redux";
import { countReducer } from "./countReducer";
import { imageReducer } from "./imageReducer";
import { usersReducer } from "./usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
// import { rootWatcher } from "./saga";
import { imageWatcher } from "./saga/imageSaga";

const saga = createSagaMiddleware();
const rootReducer = combineReducers({
  countReducer,
  imageReducer,
  usersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga, thunk))
);
saga.run(imageWatcher);

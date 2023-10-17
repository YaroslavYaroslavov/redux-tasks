import { all } from "redux-saga/effects";
import { imageWatcher } from "./imageSaga";
export function* rootWatcher() {
  yield all(imageWatcher);
}

import { put, takeEvery, call } from "redux-saga/effects";
import { setCat, FETCH_CAT, setDog, FETCH_DOG } from "../imageReducer";
const fetchCat = () => fetch("https://api.thecatapi.com/v1/images/search");
const fetchDog = () => fetch("https://random.dog/woof");

function* fetchCatWorker() {
  const data = yield call(fetchCat);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setCat(json));
}
function* fetchDogWorker() {
  const data = yield call(fetchDog);
  const response = yield data.text();
  yield console.log(response);
  yield put(setDog(response));
}
export function* imageWatcher() {
  yield takeEvery(FETCH_CAT, fetchCatWorker);
  yield takeEvery(FETCH_DOG, fetchDogWorker);
}

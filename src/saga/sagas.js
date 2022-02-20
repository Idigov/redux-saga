import { takeEvery, put, all, call } from "redux-saga/effects";
import { FETCH_USERS } from "../store/constants";
import { fetchData } from "../mockData";
import { setUsers } from "../store/actions";

export function* workerSaga() {
  const data = yield call(fetchData);
  yield put(setUsers(data));
}

export function* watchClickSaga() {
  yield takeEvery(FETCH_USERS, workerSaga);
}

export default function* rootSaga() {
  yield all([watchClickSaga()]);
}

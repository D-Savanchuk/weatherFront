import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    authSaga(),
    logOutSaga(),

  ]);
}

export default rootSaga;

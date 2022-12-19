import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import logOutSaga from './userLogOutSaga';
verifySaga

function* rootSaga() {
  yield all([
    authSaga(),
    logOutSaga(),
    verifySaga(),
  ]);
}

export default rootSaga;

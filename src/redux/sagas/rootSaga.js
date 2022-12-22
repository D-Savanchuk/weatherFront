import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import logOutSaga from './userLogOutSaga';
import verifySaga from './verifyingSaga';
import weatherSaga from './weatherSaga';

function* rootSaga() {
  yield all([
    authSaga(),
    logOutSaga(),
    verifySaga(),
    weatherSaga(),
  ]);
}

export default rootSaga;

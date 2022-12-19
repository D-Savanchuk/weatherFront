import { all } from 'redux-saga/effects';

import authSaga from './authSaga';


function* rootSaga() {
  yield all([
    authSaga(),
    logOutSaga(),
  ]);
}

export default rootSaga;

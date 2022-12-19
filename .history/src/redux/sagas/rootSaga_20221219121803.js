import { all } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import authSaga from './authSaga';
import verifySaga from './userVerifySaga';
import userSaga from './usersSaga';
import logOutSaga from './userLogOutSaga';

function* rootSaga() {
  yield all([
  ]);
}

export default rootSaga;

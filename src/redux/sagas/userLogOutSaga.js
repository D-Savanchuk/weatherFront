import { takeLatest } from 'redux-saga/effects';

import { AUTH_LOG_OUT } from '../constants';

function* logOut() {
  yield localStorage.removeItem('token');
}
function* logOutSaga() {
  yield takeLatest(AUTH_LOG_OUT, logOut);
}

export default logOutSaga;

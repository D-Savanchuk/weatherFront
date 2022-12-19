import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { verifyUser } from '../../api/auth';
import { verificationSuccess, verificationError } from '../actions/auth';
import { VERIFICATION_REQUEST } from '../constants';

function* verifySender() {
  try {
    const user = yield call(verifyUser);
    yield put(verificationSuccess(user));
  } catch (error) {
    localStorage.removeItem('token');
    yield put(verificationError(error.response.data.message));
  }
}
function* verifySaga() {
  yield takeLatest(VERIFICATION_REQUEST, verifySender);
}

export default verifySaga;

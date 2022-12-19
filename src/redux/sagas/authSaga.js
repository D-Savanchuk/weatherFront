import {
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';

import { authUser } from '../../api/auth';
import { authSuccess, authError } from '../actions/auth';
import { AUTH_REQUESTED } from '../constants';

function* authSender({ payload }) {
  try {
    const currentState = yield select();
    const path = currentState.modal.modalType;
    const { user, token } = yield call(authUser, payload, path);
    localStorage.setItem('token', token);
    yield put(authSuccess(user));
  } catch (error) {
    yield put(authError(error.response.data.message));
  }
}
function* authSaga() {
  yield takeLatest(AUTH_REQUESTED, authSender);
}

export default authSaga;

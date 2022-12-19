import { createAction } from 'redux-actions';

import * as actionTypes from '../constants';

export const authRequest = createAction(actionTypes.AUTH_REQUESTED);
export const authSuccess = createAction(actionTypes.AUTH_SUCCESS);
export const authError = createAction(actionTypes.AUTH_FAILED);
export const authLogOut = createAction(actionTypes.AUTH_LOG_OUT);
export const verificationRequest = createAction(actionTypes.VERIFICATION_REQUEST);
export const verificationSuccess = createAction(actionTypes.VERIFICATION_SUCCESS);
export const verificationError = createAction(actionTypes.VERIFICATION_ERROR);

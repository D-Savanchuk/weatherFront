import { createAction } from 'redux-actions';

import * as actionTypes from './';

export const authRequest = createAction(actionTypes.AUTH_REQUESTED);
export const authSuccess = createAction(actionTypes.AUTH_SUCCESS);
export const authError = createAction(actionTypes.AUTH_FAILED);
export const authLogOut = createAction(actionTypes.AUTH_LOG_OUT);

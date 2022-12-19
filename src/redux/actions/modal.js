import { createAction } from 'redux-actions';

import * as actionTypes from '../constants';

export const changeModalType = createAction(actionTypes.CHANGE_MODAL_TYPE);
export const toggleModal = createAction(actionTypes.TOGGLE_MODAL);

import { createAction } from 'redux-actions';

import * as actionTypes from '../constants';

export const toggleMap = createAction(actionTypes.TOGGLE_MAP);
export const autoLocate = createAction(actionTypes.LOCATE);


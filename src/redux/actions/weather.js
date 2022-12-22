import { createAction } from 'redux-actions';

import * as actionTypes from '../constants';

export const forecastRequest = createAction(actionTypes.FORECAST_REQUESTED);
export const forecastSuccess = createAction(actionTypes.FORECAST_SUCCESS);
export const forecastError = createAction(actionTypes.FORECAST_FAILED);

export const getForecast = createAction(actionTypes.GET_FORECAST);


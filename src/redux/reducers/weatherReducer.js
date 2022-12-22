import {
    FORECAST_REQUESTED,
    FORECAST_SUCCESS,
    FORECAST_FAILED,
    GET_FORECAST,
  } from '../constants';
  
  const initialState = {
    forecast: {},
    isFetching: false,
    error: null,
    forecastData: {}
  };
  export default function authReducer(state = initialState, action = {}) {
    switch (action.type) {
      case FORECAST_REQUESTED:
        return {
          ...state,
          isFetching: true,
          forecast: {},
          error: null,
        };
      case FORECAST_SUCCESS:
        console.log("SUCC", action.payload);
        return {
          ...state,
          isFetching: false,
          forecast: action.payload,
          error: null,
        };
      case FORECAST_FAILED:
        return {
          ...state,
          isFetching: false,
          forecast: {},
          error: action.payload,
        };
        case GET_FORECAST:
        console.log("FOREDATA", action.payload);
        return {
          ...state,
          forecastData: action.payload,
        };
      default: return state;
    }
  }
  
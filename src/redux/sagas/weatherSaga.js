import {
    call,
    put,
    takeLatest,
    select,
  } from 'redux-saga/effects';
  
  import { getWeatherForecast } from '../../api/weatherForecast';
  import { forecastSuccess, forecastError, getForecast } from '../actions/weather';
  import { FORECAST_REQUESTED } from '../constants';
  
  function* weatherGetter({ payload }) {
    try {
      const data = yield call(getWeatherForecast, payload);
      console.log(data);
      yield put(forecastSuccess(data));
      yield put(getForecast(data));
    } catch (error) {
      yield put(forecastError(error.response.data.message));
    }
  }
  function* weatherSaga() {
    yield takeLatest(FORECAST_REQUESTED, weatherGetter);
  }
  
  export default weatherSaga;
  
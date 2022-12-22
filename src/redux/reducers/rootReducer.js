import { combineReducers } from 'redux';

import authReducer from './authReducer';
import modalReducer from './modalReducer';
import mapReducer from './mapReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  map: mapReducer,
  weather: weatherReducer,
});
export default rootReducer;

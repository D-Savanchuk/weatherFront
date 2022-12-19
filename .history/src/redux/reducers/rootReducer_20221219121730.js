import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  modal: modalReducer,
  auth: authReducer,
  users: usersReducer,
});
export default rootReducer;

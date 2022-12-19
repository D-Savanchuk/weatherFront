import {
  AUTH_REQUESTED,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_LOG_OUT,
  TOGGLE_MODAL,
  VERIFICATION_REQUEST,
  VERIFICATION_SUCCESS,
  VERIFICATION_ERROR,
} from '../constants';

const initialState = {
  user: {},
  isLoggedIn: false,
  isFetching: false,
  error: null,
};
export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_REQUESTED:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
        user: {},
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        user: {},
        error: action.payload,
      };
    case AUTH_LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        error: null,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        error: null,
    default: return state;
  }
}

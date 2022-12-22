import { TOGGLE_MAP, LOCATE } from '../constants';

const initialState = {
  isShowing: false,
  locating: '', 
};

export default function mapReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MAP:
      return {
        ...state,
        isShowing: action.payload,
      };
      case LOCATE:
      return {
        ...state,
        locating: action.payload,
      };
    default:
      return state;
  }
}

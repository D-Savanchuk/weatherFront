import { CHANGE_MODAL_TYPE, TOGGLE_MODAL, AUTH_SUCCESS } from '../constants';

const initialState = {
  modalType: '',
  isOpen: false,
};

export default function modalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}

import { UPDATE_FORM } from '../actions/actionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

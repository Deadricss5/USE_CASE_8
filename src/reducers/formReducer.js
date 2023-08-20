import { UPDATE_FORM, VALIDATE_FORM_FIELD } from '../actions/actionTypes';
import validator from 'validator';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  errors: {
    firstName: null,
    lastName: null,
    email: null,
    message: null,
  },
};

export const formReducer = (state = initialState, action) => {
  let errorMessage = null;

  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case VALIDATE_FORM_FIELD:
      if (
        action.payload.field === 'firstName' &&
        validator.isEmpty(state.firstName)
      ) {
        errorMessage = 'First Name is a required field';
      }
      if (
        action.payload.field === 'lastName' &&
        validator.isEmpty(state.lastName)
      ) {
        errorMessage = 'Last Name is a required field';
      }
      if (action.payload.field === 'email' && !validator.isEmail(state.email)) {
        errorMessage = 'Invalid email format';
      }
      if (action.payload.field === 'message' && state.message.length < 10) {
        errorMessage = 'Message should be at least 10 characters long';
      }
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.field]: errorMessage,
        },
      };
    default:
      return state;
  }
};

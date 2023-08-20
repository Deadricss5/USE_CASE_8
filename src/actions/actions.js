import { UPDATE_FORM, VALIDATE_FORM_FIELD } from './actionTypes';

export const updateFormField = (field, value) => ({
  type: UPDATE_FORM,
  payload: { field, value },
});

export const validateFormField = (field) => ({
  type: VALIDATE_FORM_FIELD,
  payload: { field },
});

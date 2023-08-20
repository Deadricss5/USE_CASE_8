import { UPDATE_FORM } from './actionTypes';

export const updateForm = (field, value) => ({
  type: UPDATE_FORM,
  payload: { field, value },
});

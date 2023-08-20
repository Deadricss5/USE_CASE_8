import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { UserForm } from '../UserForm';
import { formConfig } from '../UserForm.utils';

jest.mock('../../../actions', () => ({
  updateFormField: jest.fn((field, value) => ({
    type: 'UPDATE_FORM_FIELD',
    payload: { field, value },
  })),
  validateFormField: jest.fn((field) => ({
    type: 'VALIDATE_FORM_FIELD',
    payload: { field },
  })),
}));

window.alert = jest.fn();

const mockState = {
  form: {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    errors: {},
  },
};

const mockReducer = (state = mockState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const renderWithRedux = (
  component,
  {
    initialState = mockState,
    store = createStore(mockReducer, initialState),
  } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('UserForm', () => {
  it('renders without crashing', () => {
    renderWithRedux(<UserForm />);
  });

  it('renders the correct number of input fields and textareas', () => {
    const { getAllByRole } = renderWithRedux(<UserForm />);
    expect(getAllByRole('textbox').length).toBe(formConfig.length);
  });

  it('dispatches the correct actions on input change', () => {
    const { updateFormField, validateFormField } = require('../../../actions');
    const { getByPlaceholderText } = renderWithRedux(<UserForm />);
    const input = getByPlaceholderText(formConfig[0].placeholder);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toBeInTheDocument();
    expect(updateFormField).toHaveBeenCalledWith(formConfig[0].id, 'test');
    expect(validateFormField).toHaveBeenCalledWith(formConfig[0].id);
  });

  it('has the submit button disabled by default', () => {
    const { getByRole } = renderWithRedux(<UserForm />);
    const submitButton = getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });
});

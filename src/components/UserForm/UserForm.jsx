import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormField, validateFormField } from '../../actions';
import { checkIsValid, formConfig } from './UserForm.utils';
import { Form } from './UserForm.styles';
import { InputField } from '../InputField';
import { TextArea } from '../TextArea';

export const UserForm = () => {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const isValid = checkIsValid(formData);

  const handleInputChange = useCallback((field, value) => {
    dispatch(updateFormField(field, value));
    dispatch(validateFormField(field));
  }, []);

  return (
    <Form>
      {formConfig.map(({ id, type, placeholder, label }) =>
        type === 'textarea' ? (
          <TextArea
            value={formData[id]}
            onChange={(e) => handleInputChange(id, e.target.value)}
            placeholder={placeholder}
            label={label}
            name={id}
            key={id}
            errorMessage={formData.errors[id]}
          />
        ) : (
          <InputField
            type={type}
            value={formData[id]}
            onChange={(e) => handleInputChange(id, e.target.value)}
            placeholder={placeholder}
            label={label}
            name={id}
            key={id}
            errorMessage={formData.errors[id]}
          />
        ),
      )}

      <button type="button" disabled={!isValid}>
        Submit
      </button>
    </Form>
  );
};

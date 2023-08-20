import React from 'react';
import { string, func } from 'prop-types';

import { Input, InputFieldWrapper, Error, Label } from './InputField.styles';

export const InputField = (props) => {
  const { label, name, type, errorMessage, value, onChange, placeholder } =
    props;

  return (
    <InputFieldWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        invalid={errorMessage}
      />
      {errorMessage && <Error>{errorMessage}</Error>}
    </InputFieldWrapper>
  );
};

InputField.propTypes = {
  label: string,
  name: string.isRequired,
  type: string,
  errorMessage: string,
  value: string,
  onChange: func,
  placeholder: string,
};

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  errorMessage: '',
};

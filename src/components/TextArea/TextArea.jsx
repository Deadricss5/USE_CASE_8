import React from 'react';
import { string, func } from 'prop-types';

import {
  StyledTextArea,
  TextAreaWrapper,
  Error,
  Label,
} from './TextArea.styles';

export const TextArea = (props) => {
  const { label, name, type, errorMessage, value, onChange, placeholder } =
    props;

  return (
    <TextAreaWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledTextArea
        cols={40}
        rows={5}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        invalid={errorMessage}
      />
      {errorMessage && <Error>{errorMessage}</Error>}
    </TextAreaWrapper>
  );
};

TextArea.propTypes = {
  label: string,
  name: string.isRequired,
  type: string,
  errorMessage: string,
  value: string,
  onChange: func,
  placeholder: string,
};

TextArea.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  errorMessage: '',
};

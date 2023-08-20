import { css, styled } from 'styled-components';

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

export const InputFieldWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled.input`
  width: 100%;
  ${(props) =>
    props.invalid &&
    css`
      border: 1px solid red;
    `}
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  font-style: italic;
  margin: 0;
  margin-top: 2px;
`;

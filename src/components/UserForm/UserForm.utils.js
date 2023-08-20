export const formConfig = [
  {
    label: 'First Name',
    placeholder: 'Please enter a First Name',
    type: 'text',
    id: 'firstName',
    errorMessage: 'First Name is a required field',
  },
  {
    label: 'Last Name',
    placeholder: 'Please enter a Last Name',
    type: 'text',
    id: 'lastName',
    errorMessage: 'Last Name is a required field',
  },
  {
    label: 'Email',
    placeholder: 'Please enter an Email',
    type: 'email',
    id: 'email',
    errorMessage: 'Please enter a valid format for an email',
  },
  {
    label: 'Message',
    placeholder: 'Please enter a Message',
    type: 'textarea',
    id: 'message',
    errorMessage: 'Message should be at least 10 characters',
  },
];

export const checkIsValid = (formData) => {
  return (
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.message &&
    !Object.values(formData.errors).filter((item) => !!item).length
  );
};

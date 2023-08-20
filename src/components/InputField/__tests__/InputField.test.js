import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { InputField } from '../InputField';

describe('InputField Component', () => {
  it('renders without crashing', () => {
    render(<InputField name="test-input" />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders a label when provided', () => {
    render(<InputField name="test-input" label="Test Label" />);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
  });

  it('renders an error message when provided', () => {
    render(<InputField name="test-input" errorMessage="Test error message" />);
    const errorMessage = screen.getByText('Test error message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('calls onChange handler when value changes', () => {
    const mockOnChange = jest.fn();
    render(<InputField name="test-input" onChange={mockOnChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('renders with a placeholder when provided', () => {
    render(<InputField name="test-input" placeholder="Enter text here" />);
    const input = screen.getByPlaceholderText('Enter text here');
    expect(input).toBeInTheDocument();
  });

  it('renders with default props correctly', () => {
    render(<InputField name="test-input" />);
    let input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', '');
  });
});

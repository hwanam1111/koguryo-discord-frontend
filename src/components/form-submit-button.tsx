import ComponentLoading from '@components/loading-component';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  color: #fff;
  background-color: #007bff;
  border-radius: 0.25rem;
  width: 100%;
  height: 2.75rem;
  padding: 0.875rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;

  &:hover {
    transition: background-color 0.25s;
    background-color: #0068d7;
  }

  &:disabled {
    background-color: #8d8d8d;
  }
`;

interface FormSubmitButtonProps {
  text: string;
  disabled: boolean;
  isLoading: boolean;
  className: string;
}

function FormSubmitButton({
  text,
  disabled,
  isLoading,
  className,
}: FormSubmitButtonProps) {
  return (
    <Button type="submit" className={className} disabled={disabled}>
      {isLoading ? (
        <ComponentLoading isPositionAbsoluteCenter={false} color="#fff" />
      ) : (
        text
      )}
    </Button>
  );
}

export default FormSubmitButton;

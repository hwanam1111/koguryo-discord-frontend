import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  margin-top: 0.625rem;
  font-size: 0.875rem;
  color: #ff7b7b;
  font-weight: 600;
`;

interface FormErrorProps {
  message: string;
}

function FormError({ message }: FormErrorProps) {
  return <ErrorMessage className="">{message}</ErrorMessage>;
}

export default FormError;

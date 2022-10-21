import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  font-size: 0.9rem;
  padding: 0.812rem 1.25rem;
  border-radius: 0.25rem;
  text-align: left;
  color: #eee;
  background-color: rgba(100, 100, 100, 0.606);

  &::placeholder {
    color: #ccc;
  }
`;

interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  register: UseFormRegisterReturn;
  maxLength: number;
}

function FormInput({
  type,
  placeholder,
  required,
  register,
  maxLength = 1000000,
}: FormInputProps) {
  return (
    <Input
      className=""
      type={type}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      {...register}
    />
  );
}

export default FormInput;

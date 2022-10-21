import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  height: 100%;
  font-size: 0.95rem;
  color: #ececec;
  line-height: 1.3;
  font-weight: 600;
`;

const Require = styled.span`
  font-size: 1.25rem;
  color: #ff5454;
  vertical-align: sub;
`;

interface FormLabelProps {
  label: string;
  isRequired: boolean;
}

function FormLabel({ label, isRequired }: FormLabelProps) {
  return (
    <Label className="">
      {isRequired && <Require>*</Require>} {label}
    </Label>
  );
}

export default FormLabel;

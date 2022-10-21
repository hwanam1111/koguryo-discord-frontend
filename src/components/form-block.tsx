import React from 'react';
import styled from 'styled-components';

const Block = styled.div``;

interface FormBlockProps {
  children: React.ReactNode;
}

function FormBlock({ children }: FormBlockProps) {
  return <Block className="">{children}</Block>;
}

export default FormBlock;

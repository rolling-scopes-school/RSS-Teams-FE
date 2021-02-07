import React, { FC } from 'react';
import styled from 'styled-components';
import { Label, Input } from 'typography';

interface InputFieldProps {
  labelText: string;
  placeholder: string;
}

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputField: FC<InputFieldProps> = ({ labelText, placeholder }) => {
  return (
    <FieldWrapper>
      <Label>{labelText}</Label>
      <Input placeholder={placeholder} />
    </FieldWrapper>
  );
};

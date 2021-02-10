import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Label, Input } from 'typography';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  placeholder: string;
  register: any;
  name: string;
}

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputField: FC<InputFieldProps> = ({
  labelText,
  placeholder,
  register,
  name,
  ...rest
}) => {
  return (
    <FieldWrapper>
      <Label htmlFor={name}>{labelText}</Label>
      <Input
        id={`id-{name}`}
        name={name}
        placeholder={placeholder}
        ref={register}
        {...rest}
      />
    </FieldWrapper>
  );
};

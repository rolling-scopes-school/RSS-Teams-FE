import React, { FC, InputHTMLAttributes } from 'react';
import { Input } from 'typography';
import { FieldWrapper, ValidationAlert, FLabel } from './styled';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  placeholder: string;
  register: any;
  name: string;
  message?: string | undefined;
  value?: string;
}

export const InputField: FC<InputFieldProps> = ({
  labelText,
  placeholder,
  register,
  name,
  message,
}) => {
  return (
    <FieldWrapper>
      <FLabel htmlFor={name}>{labelText}</FLabel>
      <Input
        id={`id-${name}`}
        name={name}
        placeholder={placeholder}
        ref={register}
        autoComplete="off"
      />
      <ValidationAlert>{message}</ValidationAlert>
    </FieldWrapper>
  );
};

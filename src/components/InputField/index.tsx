import React, { FC, InputHTMLAttributes } from 'react';
import { Label, Input } from 'typography';
import { FieldWrapper } from './styled';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  placeholder: string;
  register: any;
  name: string;
}

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
        id={`id-${name}`}
        name={name}
        placeholder={placeholder}
        ref={register}
        {...rest}
      />
    </FieldWrapper>
  );
};

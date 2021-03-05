import React, { FC, InputHTMLAttributes } from 'react';
import { Input } from 'typography';
import { FieldWrapper, ValidationAlert, FLabel } from './styled';
import { useTranslation } from 'react-i18next';
export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  placeholder?: string;
  register?: any;
  name: string;
  message?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<InputFieldProps> = ({
  labelText,
  placeholder,
  register,
  name,
  message,
  onChange,
}) => {
  const { t } = useTranslation();
  return (
    <FieldWrapper>
      <FLabel htmlFor={name}>{labelText ? t(labelText) : ''}</FLabel>
      <Input
        id={`id-${name}`}
        name={name}
        placeholder={placeholder ? t(placeholder) : ''}
        ref={register}
        autoComplete="off"
        onChange={onChange}
      />
      <ValidationAlert>{message ? t(message) : ''}</ValidationAlert>
    </FieldWrapper>
  );
};

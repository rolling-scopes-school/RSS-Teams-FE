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
  uncommonWidth?: string;
  mr?: string;
  disabled?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
  labelText,
  placeholder,
  register,
  name,
  message,
  onChange,
  uncommonWidth,
  disabled,
  mr,
}) => {
  const { t } = useTranslation();
  return (
    <FieldWrapper>
      <FLabel htmlFor={name}>{labelText ? t(labelText) : ''}</FLabel>
      <Input
        {...{ mr, uncommonWidth, onChange, name }}
        id={`id-${name}`}
        placeholder={placeholder ? t(placeholder) : ''}
        ref={register}
        autoComplete="off"
        disabled={disabled}
      />
      <ValidationAlert>{message ? t(message) : ''}</ValidationAlert>
    </FieldWrapper>
  );
};

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalInput, Label } from 'typography';
import { ValidationAlert } from 'components/InputField/styled';
import { InputWrapper, FieldWrapper } from './styled';

interface InputBlockProps {
  inputLabel: string;
  value: string;
  placeholder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFieldValid: boolean;
  errorMessage: string;
  isModal?: boolean;
}

export const InputBlock: FC<InputBlockProps> = ({
  inputLabel,
  value,
  placeholder,
  onChangeHandler,
  isFieldValid,
  errorMessage,
  isModal,
}) => {
  const { t } = useTranslation();

  return (
    <InputWrapper isModal={isModal}>
      <Label marginBottom="0px">{t(inputLabel)}</Label>
      <FieldWrapper>
        <ModalInput
          name="inputValue"
          required
          value={value}
          mt="0px"
          autoComplete={'off'}
          onChange={onChangeHandler}
          placeholder={t(placeholder)}
        />
        {!isFieldValid && <ValidationAlert>{t(errorMessage)}</ValidationAlert>}
      </FieldWrapper>
    </InputWrapper>
  );
};

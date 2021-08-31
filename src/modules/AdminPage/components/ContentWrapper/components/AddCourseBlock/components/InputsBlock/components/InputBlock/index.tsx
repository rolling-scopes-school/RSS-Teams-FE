import { ValidationAlert } from 'components/InputField/styled';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalInput, Label } from 'typography';
import { InputWrapper } from './styled';

interface InputBlock {
  label: string;
  onChange: () => void;
  placeholder: string;
  errorMessage: string;
  isInputValid: boolean;
}

export const InputBlock: FC<InputBlock> = ({
  label,
  onChange,
  placeholder,
  errorMessage,
  isInputValid,
}) => {
  const { t } = useTranslation();

  return (
    <InputWrapper>
      <Label marginBottom="0px">{t(label)}</Label>
      <ModalInput
        name="inputValue"
        required
        value=""
        mt="0px"
        autoComplete={'off'}
        onChange={onChange}
        placeholder={t(placeholder)}
      />
      {!isInputValid && <ValidationAlert>{t(errorMessage)}</ValidationAlert>}
    </InputWrapper>
  );
};

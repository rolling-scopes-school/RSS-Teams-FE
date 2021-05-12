import React, { FC, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components';
import { ModalInput } from 'typography';
import { ValidationAlert } from '../InputField/styled';
import { useTranslation } from 'react-i18next';
import { setSocialLink } from 'modules/TeamsList/teamsListReducer';

type Props = {
  title: string;
  text: string;
  open: boolean;
  onSubmit?: () => void;
  onClose: () => void;
  value: string;
  okText?: string;
  validateRules?: any;
} & typeof defaultProps;

const defaultProps = {
  open: false,
  okText: 'Create team',
};

export const ModalCreateEditTeam: FC<Props> = ({
  title,
  text,
  open,
  okText,
  value,
  onClose,
  onSubmit,
  validateRules,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isInputValid, setInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitModal = useCallback(() => {
    if (isInputValid && onSubmit) {
      onSubmit();
      onClose();
    } else {
      setErrorMessage('Please, enter link');
    }
  }, [onClose, onSubmit, isInputValid]);

  const onChangeModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSocialLink(e.target.value.trim()));
    isValid(e.target.value.trim(), validateRules, !!validateRules);
  };

  const onCloseModal = () => {
    onClose();
    setErrorMessage('');
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSubmitModal();
      }
    };
    if (open) {
      document.addEventListener('keydown', listener);
    }
    return () => document.removeEventListener('keydown', listener);
  }, [onSubmitModal, open]);

  const isValid = (value: string, validateRules: any, needValidate: boolean) => {
    if (!needValidate) return true;

    let valid = true;

    if (validateRules.maxLength) {
      valid = value.trim().length < validateRules.maxLength.value + 1 && valid;
      if (!(value.trim().length < validateRules.maxLength.value + 1)) {
        setErrorMessage(validateRules.maxLength.message);
      }
    }

    if (validateRules.pattern) {
      const regExp = new RegExp(validateRules.pattern.value);
      valid = regExp.test(value) && valid;
      if (!regExp.test(value)) {
        setErrorMessage(validateRules.pattern.message);
      }
    }

    setInputValid(valid);
  };

  return (
    <Modal
      {...{ title, text, open, okText }}
      onClose={onCloseModal}
      onSubmit={onSubmitModal}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    >
      <ModalInput
        name="inputValue"
        required
        value={value.trim()}
        autoComplete={'off'}
        onChange={onChangeModal}
        placeholder={t('Enter group link')}
      />
      {!isInputValid && <ValidationAlert>{t(errorMessage)}</ValidationAlert>}
    </Modal>
  );
};

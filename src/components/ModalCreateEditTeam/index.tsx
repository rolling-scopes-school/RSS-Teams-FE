import React, { FC, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components';
import { ModalInput } from 'typography';
import { ValidationAlert } from '../InputField/styled';
import { useTranslation } from 'react-i18next';
import { setSocialLink } from 'modules/TeamsList/teamsListReducer';
import { isFieldValid } from 'utils/isFieldValid';

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
    isFieldValid(
      e.target.value.trim(),
      validateRules,
      !!validateRules,
      setInputValid,
      setErrorMessage
    );
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

  return (
    <Modal
      {...{ title, text, open, okText }}
      onClose={onCloseModal}
      onSubmit={onSubmitModal}
      hideOnOutsideClick
      hideOnEsc
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

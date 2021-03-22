import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components';
import { ModalInput } from 'typography';
import { useTranslation } from 'react-i18next';
import { setTeamPassword } from 'modules/TeamsList/teamsListReducer';

type Props = {
  title: string;
  text: string;
  open: boolean;
  okText?: string;
  value: string;
  cancelText?: string;
  onClose: () => void;
  onSubmit?: (e: string) => void;
  onChange?: () => void;
};

export const ModalJoin: FC<Props> = ({
  title,
  text,
  open,
  okText,
  value,
  cancelText,
  onClose,
  onSubmit,
  onChange,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmitModal = useCallback(() => {
    if (onSubmit && value) {
      onSubmit(value);
    }
  }, [value, onSubmit]);

  const onChangeModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange();
    }
    dispatch(setTeamPassword(e.target.value));
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
      {...{ title, text, open, onClose, okText, cancelText }}
      onSubmit={onSubmitModal}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    >
      <ModalInput
        placeholder={t('Enter team password')}
        name="InputValue"
        required
        value={value}
        onChange={onChangeModal}
        type="password"
      />
    </Modal>
  );
};

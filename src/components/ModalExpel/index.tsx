import React, { FC, useEffect, useCallback } from 'react';
import { Modal } from 'components';

type Props = {
  title: string;
  text: string;
  open: boolean;
  onSubmit?: () => void;
  onClose: () => void;
  okText?: string;
  isCrossIconVisible?: boolean;
  cancelText?: string;
};

export const ModalExpel: FC<Props> = ({
  title,
  text,
  open,
  okText,
  cancelText,
  isCrossIconVisible = true,
  onClose,
  onSubmit,
}) => {
  const onSubmitModal = useCallback(() => {
    onClose();
    if (onSubmit) {
      onSubmit();
    }
  }, [onClose, onSubmit]);

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
      {...{
        title,
        text,
        open,
        onClose,
        okText,
        isCrossIconVisible,
        cancelText,
      }}
      onSubmit={onSubmitModal}
      hideOnOutsideClick
      hideOnEsc
    />
  );
};

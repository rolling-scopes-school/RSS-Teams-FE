import React, { FC } from 'react';
import { Modal } from 'components';

type Props = {
  title: string;
  text: string;
  open: boolean;
  onSubmit?: (e: string) => void;
  onClose: () => void;
  okText?: string;
  cancelText?: string;
};

export const ModalExpel: FC<Props> = ({
  title,
  text,
  open,
  okText,
  cancelText,
  onClose,
  onSubmit,
}) => {
  const onSubmitModal = () => {
    onClose();
    if (onSubmit) onSubmit('Modalexpel');
  };

  return (
    <Modal
      {...{ title, text, open, onClose, okText, cancelText }}
      onSubmit={onSubmitModal}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    />
  );
};

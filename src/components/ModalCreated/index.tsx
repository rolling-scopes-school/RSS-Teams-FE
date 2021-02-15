import React, { FC, useState } from 'react';
import { Modal } from 'components';
import { ModalInput } from 'typography';

type Props = {
  title: string;
  text: string;
  open: boolean;
  onSubmit?: (e: string) => void;
  onClose: () => void;
  okText?: string;
  cancelText?: string;
  password: string;
} & typeof defaultProps;

const defaultProps = {
  open: false,
  okText: 'Yes!',
  cancelText: 'No',
};

export const ModalCreated: FC<Props> = ({
  title,
  text,
  open,
  okText,
  cancelText,
  onClose,
  onSubmit,
  password,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onSubmitModal = () => {
    onClose();
    if (onSubmit) onSubmit('ModalCreated');
  };

  return (
    <Modal
      title={title}
      text={text}
      open={open}
      onClose={onClose}
      // onSubmit={onSubmitModal}
      okText={okText}
      cancelText={cancelText}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    >
      {/* disable input ? with copy button  */}
      <ModalInput name="InputValue" value={password} readOnly />
    </Modal>
  );
};

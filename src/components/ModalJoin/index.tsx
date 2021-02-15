import React, { FC, useState, useEffect } from 'react';
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
} & typeof defaultProps;

const defaultProps = {
  open: false,
  okText: 'Yes!',
  cancelText: 'No',
};

export const ModalJoin: FC<Props> = ({
  title,
  text,
  open,
  okText,
  cancelText,
  onClose,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  useEffect(() => {
    setInputValue('');
  }, [open]);
  const onSubmitModal = (e: any) => {
    onClose();
    if (onSubmit && inputValue) onSubmit(inputValue);
  };

  const InputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <Modal
      title={title}
      text={text}
      open={open}
      onClose={onClose}
      onSubmit={onSubmitModal}
      okText={okText}
      cancelText={cancelText}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    >
      <ModalInput
        placeholder="Enter team password"
        name="InputValue"
        required
        value={inputValue}
        onChange={InputChange}
        type="password"
      />
    </Modal>
  );
};

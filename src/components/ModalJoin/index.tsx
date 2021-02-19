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

  const onSubmitModal = () => {
    if (onSubmit && inputValue) {
      onClose();
      onSubmit(inputValue);
    }
  };

  const InputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <Modal
      {...{ title, text, open, onClose, okText, cancelText }}
      onSubmit={onSubmitModal}
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

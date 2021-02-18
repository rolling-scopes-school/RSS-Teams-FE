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
} & typeof defaultProps;

const defaultProps = {
  open: false,
  okText: 'Create team',
};

export const ModalCreateTeam: FC<Props> = ({
  title,
  text,
  open,
  okText,
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
      {...{ title, text, open, onClose, okText }}
      onSubmit={onSubmitModal}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    >
      <ModalInput
        name="inputValue"
        required
        value={inputValue}
        onChange={InputChange}
        placeholder="Enter group link"
      />
    </Modal>
  );
};

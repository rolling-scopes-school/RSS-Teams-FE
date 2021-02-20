import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components';
import { ModalInput } from 'typography';
import { SET_TEAM_PASSWORD } from 'appConstants';

type Props = {
  title: string;
  text: string;
  open: boolean;
  onSubmit?: (e: string) => void;
  onClose: () => void;
  value: string;
  okText?: string;
  cancelText?: string;
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
}) => {
  const dispatch = useDispatch();

  const onSubmitModal = () => {
    if (onSubmit && value) {
      onSubmit(value);
    }
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
        value={value}
        onChange={(e) =>
          dispatch({ type: SET_TEAM_PASSWORD, payload: e.target.value })
        }
        type="password"
      />
    </Modal>
  );
};

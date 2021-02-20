import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components';
import { ModalInput } from 'typography';
import { SET_SOCIAL_LINK } from 'appConstants';

type Props = {
  title: string;
  text: string;
  open: boolean;
  onSubmit?: () => void;
  onClose: () => void;
  value: string;
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
  value,
  onClose,
  onSubmit,
}) => {
  const dispatch = useDispatch();

  const onSubmitModal = () => {
    if (onSubmit) {
      onClose();
      onSubmit();
    }
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
        value={value}
        onChange={(e) =>
          dispatch({ type: SET_SOCIAL_LINK, payload: e.target.value })
        }
        placeholder="Enter group link"
      />
    </Modal>
  );
};

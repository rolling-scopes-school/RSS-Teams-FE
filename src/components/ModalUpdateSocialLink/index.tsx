import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components';
import { ModalInput } from 'typography';
import { SET_SOCIAL_LINK } from 'appConstants';

type Props = {
  title: string;
  text: string;
  open: boolean;
  onSubmit?: (cb: () => void) => void;
  onClose: () => void;
  value: string;
  okText?: string;
} & typeof defaultProps;

const defaultProps = {
  open: false,
  okText: 'Update link',
};

export const ModalUpdateSocialLink: FC<Props> = ({
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
      onSubmit(onClose);
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
        placeholder="Enter new group link"
      />
    </Modal>
  );
};

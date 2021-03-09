import React, { FC } from 'react';
import { Modal } from 'components';

type Props = {
  title?: string;
  text?: string;
  text2?: string;
  open?: boolean;
  cancelText?: string;
  isCrossIconVisible?: boolean;
};

export const ErrorModal: FC<Props> = ({
  title = 'Something went wrong!',
  text = 'Please, try again later.',
  text2 = '@yliaka71',
  open = true,
  isCrossIconVisible = false,
  cancelText = 'Ok',
}) => {
  const onClose = () => {
    location.reload();
  };
  return (
    <Modal
      {...{ title, text, text2, open, onClose, isCrossIconVisible, cancelText }}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    ></Modal>
  );
};

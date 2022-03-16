import React, { FC } from 'react';
import { Modal } from 'components';
import { ApolloError } from '@apollo/client';
import { UNAUTHORIZED_ERROR_MESSAGE } from 'appConstants';

type Props = {
  title?: string;
  text?: string;
  text2?: string;
  open?: boolean;
  cancelText?: string;
  isCrossIconVisible?: boolean;
  error?: ApolloError;
};

export const ErrorModal: FC<Props> = ({
  title = 'Something went wrong!',
  text = 'Please, try again later.',
  text2 = '@ValeryDl',
  open = true,
  isCrossIconVisible = false,
  cancelText = 'Ok',
  error,
}) => {
  const isUserUnauthorized = !!error?.graphQLErrors.find(
    ({ message }) => message === UNAUTHORIZED_ERROR_MESSAGE
  );

  if (isUserUnauthorized) {
    return null;
  }

  const onClose = () => {
    location.reload();
  };

  return (
    <Modal
      {...{ title, text, text2, open, onClose, isCrossIconVisible, cancelText }}
      hideOnOutsideClick
      hideOnEsc
    ></Modal>
  );
};

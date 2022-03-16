import React, { FC } from 'react';
import { Modal } from 'components';
import { ApolloError } from '@apollo/client';
import { EMERGENCY_CONTACT, UNAUTHORIZED_ERROR_MESSAGE } from 'appConstants';
import { Label } from 'typography';

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
      {...{ title, text, open, onClose, isCrossIconVisible, cancelText }}
      hideOnOutsideClick
      hideOnEsc
    >
      <p>
        <Label>
          <a
            href={`https://t.me/${EMERGENCY_CONTACT}`}
            target="_blank"
            rel="noreferrer"
            className="custom-link"
          >
            @{EMERGENCY_CONTACT}
          </a>
        </Label>
      </p>
    </Modal>
  );
};

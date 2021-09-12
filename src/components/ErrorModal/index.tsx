import React, { FC } from 'react';
import { Modal } from 'components';
import { ApolloError } from '@apollo/client';
import { AUTH_TOKEN, UNAUTHORIZED_ERROR_MESSAGE } from 'appConstants';
import { useDispatch } from 'react-redux';
import { setToken } from 'modules/LoginPage/loginPageReducer';

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
  text2 = '@yliaka71',
  open = true,
  isCrossIconVisible = false,
  cancelText = 'Ok',
  error,
}) => {
  console.log('🚀 ~ file: index.tsx ~ line 27 ~ error', error);
  const dispatch = useDispatch();

  const isUserUnauthorized = !!error?.graphQLErrors.find(
    ({ message }) => message === UNAUTHORIZED_ERROR_MESSAGE
  );

  if (isUserUnauthorized) {
    sessionStorage.removeItem(AUTH_TOKEN);
    dispatch(setToken(null));
    location.reload();
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

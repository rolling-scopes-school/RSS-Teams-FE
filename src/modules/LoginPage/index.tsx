import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectToken } from './selectors';
import {
  StyledLoginImage,
  StyledLoginPage,
  StyledLoginPageItemsWrapper,
  StyledLoginFakeBlock,
} from './styled';
import { LoginInfoBlock } from './components';

export const LoginPage: FC = () => {
  const loginToken = useSelector(selectToken);

  if (loginToken) return <Redirect to="/" />;

  return (
    <StyledLoginPage>
      <StyledLoginPageItemsWrapper>
        <LoginInfoBlock />
        <StyledLoginImage />
        <StyledLoginFakeBlock />
      </StyledLoginPageItemsWrapper>
    </StyledLoginPage>
  );
};

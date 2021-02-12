import React, { FC } from 'react';
import {
  StyledLoginInfoBlock,
  StyledLoginTitle,
  StyledLoginRegistrationLink,
  StyledLoginTextWrapper,
} from './styled';
import { AUTH_BACKEND_LINK } from 'appConstants';

export const LoginInfoBlock: FC = () => {
  return (
    <StyledLoginInfoBlock>
      <StyledLoginTitle>Sign in</StyledLoginTitle>
      <StyledLoginRegistrationLink href={AUTH_BACKEND_LINK}>
        Sign in with Github
      </StyledLoginRegistrationLink>
      <StyledLoginTextWrapper>
        <p>Don’t have github account?</p>
        <a href={AUTH_BACKEND_LINK}>Sign up</a>
      </StyledLoginTextWrapper>
    </StyledLoginInfoBlock>
  );
};

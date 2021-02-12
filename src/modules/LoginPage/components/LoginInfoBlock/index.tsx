import React, { FC } from 'react';
import {
  StyledLoginInfoBlock,
  StyledLoginTitle,
  StyledLoginRegistrationLink,
  StyledLoginTextWrapper,
} from './styled';

export const LoginInfoBlock: FC = () => {
  return (
    <StyledLoginInfoBlock>
      <StyledLoginTitle>Sign in</StyledLoginTitle>
      <StyledLoginRegistrationLink href="https://rss-teams-dev.herokuapp.com/auth/github/">
        Sign in with Github
      </StyledLoginRegistrationLink>
      <StyledLoginTextWrapper>
        <p>Don’t have github account?</p>
        <a href="https://github.com/">Sign up</a>
      </StyledLoginTextWrapper>
    </StyledLoginInfoBlock>
  );
};

import React, { FC } from 'react';
import {
  StyledLoginInfoBlock,
  StyledLoginTitle,
  StyledLoginRegistrationLink,
  StyledLoginTextWrapper,
} from './styled';
import { AUTH_BACKEND_LINK } from 'appConstants';
import { useTranslation } from 'react-i18next';

export const LoginInfoBlock: FC = () => {
  const { t } = useTranslation();
  return (
    <StyledLoginInfoBlock>
      <StyledLoginTitle>{t('Sign in')}</StyledLoginTitle>
      <StyledLoginRegistrationLink href={AUTH_BACKEND_LINK}>
        {t('Sign in with Github')}
      </StyledLoginRegistrationLink>
      <StyledLoginTextWrapper>
        <p>{t('Don’t have github account?')}</p>
        <a href={AUTH_BACKEND_LINK}>{t('Sign up')}</a>
      </StyledLoginTextWrapper>
    </StyledLoginInfoBlock>
  );
};

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RSLogo } from 'typography';
import { StyledHeader, Container } from './styled';

export type THeaderProps = {
  login: string | null;
};

export const Header: FC<THeaderProps> = ({ login }) => {
  return (
    <StyledHeader login={login}>
      <Container>
        <Link to="/">
          <RSLogo login={login} />
        </Link>
      </Container>
    </StyledHeader>
  );
};

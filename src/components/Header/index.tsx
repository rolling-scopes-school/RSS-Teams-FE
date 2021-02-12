import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RSLogo } from 'typography';
import { StyledHeader, Container } from './styled';

export type THeaderProps = {
  isLogin: boolean;
};

export const Header: FC<THeaderProps> = ({ isLogin }) => {
  return (
    <StyledHeader isLogin={isLogin}>
      <Container>
        <Link to="/">
          <RSLogo />
        </Link>
      </Container>
    </StyledHeader>
  );
};

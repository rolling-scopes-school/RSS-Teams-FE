import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RSLogo } from 'typography';
import { StyledHeader, Container } from './styled';

export type THeaderProps = {
  isOnLogin: boolean;
};

export const Header: FC<THeaderProps> = ({ isOnLogin }) => {
  return (
    <StyledHeader isOnLogin={isOnLogin}>
      <Container>
        <Link to="/">
          <RSLogo isOnLogin={isOnLogin} />
        </Link>
      </Container>
    </StyledHeader>
  );
};

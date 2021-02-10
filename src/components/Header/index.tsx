import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RSLogo } from 'typography';
import { StyledHeader, Container } from './styled';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          <RSLogo />
        </Link>
      </Container>
    </StyledHeader>
  );
};

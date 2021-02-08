import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RSLogo } from 'typography';
import { StyledHeader } from './styled';
import { Container } from 'components/Container';

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

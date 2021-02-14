import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RSLogo } from 'typography';
import { StyledHeader, Container } from './styled';
import { selectToken } from 'modules/LoginPage/selectors';

export const Header: FC = () => {
  const login = useSelector(selectToken);
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

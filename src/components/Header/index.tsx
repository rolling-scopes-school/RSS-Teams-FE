import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RSLogo } from 'typography';
import { StyledHeader, Container } from './styled';
import { selectToken } from 'modules/LoginPage/selectors';
import { MenuWrapper } from './components';

export const Header: FC = () => {
  const loginToken = useSelector(selectToken);

  return (
    <StyledHeader login={loginToken}>
      <Container>
        <Link to="/">
          <RSLogo login={loginToken} />
        </Link>
        {loginToken && <MenuWrapper />}
      </Container>
    </StyledHeader>
  );
};

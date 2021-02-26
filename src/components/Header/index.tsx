import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RSLogo } from 'typography';
import { StyledHeader, Container } from './styled';
import { selectToken } from 'modules/LoginPage/selectors';
import { MenuWrapper } from './components';
import { selectUserData } from 'modules/StudentsTable/selectors';

export const Header: FC = () => {
  const loginToken = useSelector(selectToken);
  const userData = useSelector(selectUserData);

  const newUserCheck = userData?.telegram;

  return (
    <StyledHeader login={loginToken}>
      <Container>
        <Link to="/">
          <RSLogo login={loginToken} />
        </Link>
        {newUserCheck && loginToken && !!userData?.courses.length && (
          <MenuWrapper />
        )}
      </Container>
    </StyledHeader>
  );
};

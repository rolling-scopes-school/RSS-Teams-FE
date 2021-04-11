import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RSLogo } from 'typography';
import { StyledHeader, Container } from './styled';
import { selectToken } from 'modules/LoginPage/selectors';
import { MenuWrapper, BurgerMenu } from './components';
import { selectUserData } from 'modules/StudentsTable/selectors';

export const Header: FC = () => {
  const userData = useSelector(selectUserData);
  const loginToken = useSelector(selectToken);
  const newUserCheck = !!userData?.courses.length;

  return (
    <>
      <StyledHeader login={loginToken}>
        <Container>
          <Link to="/">
            <RSLogo login={loginToken} />
          </Link>
          {loginToken && <MenuWrapper />}
        </Container>
      </StyledHeader>
      <BurgerMenu {...{ newUserCheck }} />
    </>
  );
};

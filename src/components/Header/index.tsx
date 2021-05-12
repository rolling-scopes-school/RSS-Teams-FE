import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RSLogo } from 'typography';
import { StyledHeader, Container } from './styled';
import { selectIsEditProfileDataChange, selectToken } from 'modules/LoginPage/selectors';
import { MenuWrapper, BurgerMenu } from './components';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { activeModalLeavePage } from 'modules/TeamsList/teamsListReducer';
import { setPathToThePage } from 'modules/LoginPage/loginPageReducer';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const loginToken = useSelector(selectToken);
  const isEditProfileDataChange = useSelector(selectIsEditProfileDataChange);
  const newUserCheck = !!userData?.courses.length;

  const navOnClickHandler = (e: React.MouseEvent<HTMLElement>, path: string) => {
    if (isEditProfileDataChange) {
      e.preventDefault();
      dispatch(activeModalLeavePage(true));
      dispatch(setPathToThePage(path));
    }
  };

  return (
    <>
      <StyledHeader login={loginToken}>
        <Container>
          <Link to="/">
            <RSLogo login={loginToken} />
          </Link>
          {loginToken && <MenuWrapper {...{ navOnClickHandler }} />}
        </Container>
      </StyledHeader>
      <BurgerMenu {...{ newUserCheck, navOnClickHandler }} />
    </>
  );
};

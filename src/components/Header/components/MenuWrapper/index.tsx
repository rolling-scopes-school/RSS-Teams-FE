import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { CoursesSelect } from './components/CoursesSelect';
import { Nav } from './components/Nav';
import { MenuButton, StyledMenuWrapper } from './styled';
import { LangSelect } from './components/LangSelect';
import { setBurgerMenuOpen } from 'modules/LoginPage/loginPageReducer';
import { selectIsBurgerMenuOpen } from 'modules/LoginPage/selectors';

type MenuWrapperProps = {
  navOnClickHandler: (e: React.MouseEvent<HTMLElement>, path: string) => void;
};

export const MenuWrapper: FC<MenuWrapperProps> = ({ navOnClickHandler }) => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const isBurgerMenuOpen = useSelector(selectIsBurgerMenuOpen);

  const newUserCheck = !!userData?.courses.length;

  const onClickMenuToggle = () => {
    dispatch(setBurgerMenuOpen(!isBurgerMenuOpen));
  };

  return (
    <StyledMenuWrapper>
      <Nav {...{ newUserCheck, navOnClickHandler }} />
      {newUserCheck && (
        <>
          <CoursesSelect />
        </>
      )}
      <LangSelect />
      <MenuButton onClick={onClickMenuToggle} />
    </StyledMenuWrapper>
  );
};

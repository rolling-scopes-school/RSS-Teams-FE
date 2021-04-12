import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { CoursesSelect } from './components/CoursesSelect';
import { Nav } from './components/Nav';
import { MenuButton, StyledMenuWrapper } from './styled';
import { LangSelect } from './components/LangSelect';
import {
  setBurgerMenuOpen,
  setHeaderLangSelectOpen,
} from 'modules/LoginPage/loginPageReducer';
import {
  selectIsBurgerMenuOpen,
  selectIsHeaderLangSelectOpen,
} from 'modules/LoginPage/selectors';

export const MenuWrapper: FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const isBurgerMenuOpen = useSelector(selectIsBurgerMenuOpen);
  const isHeaderLangSelectOpen = useSelector(selectIsHeaderLangSelectOpen);

  const newUserCheck = !!userData?.courses.length;
  const onClickMenuToggle = () => {
    dispatch(setBurgerMenuOpen(!isBurgerMenuOpen));
  };

  return (
    <StyledMenuWrapper>
      <Nav {...{ newUserCheck }} />
      {newUserCheck && (
        <>
          <CoursesSelect />
        </>
      )}
      <LangSelect
        displayLangList={isHeaderLangSelectOpen}
        setDisplayLangList={setHeaderLangSelectOpen}
      />
      <MenuButton onClick={onClickMenuToggle} />
    </StyledMenuWrapper>
  );
};

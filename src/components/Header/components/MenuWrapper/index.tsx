import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { CoursesSelect } from './components/CoursesSelect';
import { Nav } from './components/Nav';
import { MenuButton, StyledMenuWrapper } from './styled';
import { LangSelect } from './components/LangSelect';

export const MenuWrapper: FC = () => {
  const [displayCoursesList, setDisplayCoursesList] = useState(false);
  const [displayLangList, setDisplayLangList] = useState(false);
  const userData = useSelector(selectUserData);

  const newUserCheck = !!userData?.courses.length;

  return (
    <StyledMenuWrapper>
      <Nav {...{ setDisplayCoursesList, newUserCheck }} />
      {newUserCheck && (
        <>
          <CoursesSelect {...{ displayCoursesList, setDisplayCoursesList }} />
          <LangSelect {...{ displayLangList, setDisplayLangList }} />
          <MenuButton />
        </>
      )}
    </StyledMenuWrapper>
  );
};

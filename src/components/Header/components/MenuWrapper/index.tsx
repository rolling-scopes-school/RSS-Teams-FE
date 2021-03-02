import React, { FC, useState } from 'react';
import { CoursesSelect } from './components/CoursesSelect';
import { Nav } from './components/Nav';
import { StyledMenuWrapper } from './styled';

export const MenuWrapper: FC = () => {
  const [displayCoursesList, setDisplayCoursesList] = useState<boolean>(false);

  return (
    <StyledMenuWrapper>
      <Nav {...{ setDisplayCoursesList }} />
      <CoursesSelect {...{ displayCoursesList, setDisplayCoursesList }} />
    </StyledMenuWrapper>
  );
};

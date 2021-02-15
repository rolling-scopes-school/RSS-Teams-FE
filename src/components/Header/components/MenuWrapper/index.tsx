import React, { FC } from 'react';
import { CoursesSelect } from './components/CoursesSelect';
import { Nav } from './components/Nav';
import { StyledMenuWrapper } from './styled';

export const MenuWrapper: FC = () => {
  return (
    <StyledMenuWrapper>
      <Nav />
      <CoursesSelect />
    </StyledMenuWrapper>
  );
};

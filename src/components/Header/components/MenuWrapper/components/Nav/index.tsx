import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { NavLink } from 'react-router-dom';
import {
  StyledNav,
  StyledNavList,
  StyledNavListItem,
  StyledHeaderActiveElement,
} from './styled';

type TAppNavigation = {
  [key: string]: string;
};

type NavProps = {
  setDisplayCoursesList: (display: boolean) => void;
};

export const Nav: FC<NavProps> = ({ setDisplayCoursesList }) => {
  const userData = useSelector(selectUserData);
  const appNavigation: TAppNavigation = {
    ['/studentsTable']: 'Dashboard',
    ['/']: 'Teams',
    ['/editProfile']: 'Edit Profile',
  };

  return (
    <StyledNav>
      <StyledNavList>
        {Object.values(appNavigation).map((link: string, index: number) => {
          return (
            <StyledNavListItem key={`NavLinkKey-${index}`}>
              <NavLink
                to={Object.keys(appNavigation)[index]}
                exact
                activeClassName="activeNavLink"
                onClick={() => setDisplayCoursesList(false)}
              >
                {link}
                <StyledHeaderActiveElement />
              </NavLink>
            </StyledNavListItem>
          );
        })}
      </StyledNavList>
    </StyledNav>
  );
};

import React, { FC } from 'react';
import { APP_NAVIGATION_LINKS } from 'appConstants';
import { NavLink } from 'react-router-dom';
import {
  StyledNav,
  StyledNavList,
  StyledNavListItem,
  StyledHeaderActiveElement,
} from './styled';

type TNavLink = {
  name: string;
  isAlwaysVisible: boolean;
};

type NavProps = {
  setDisplayCoursesList: (display: boolean) => void;
  newUserCheck: boolean;
};

export const Nav: FC<NavProps> = ({ setDisplayCoursesList, newUserCheck }) => {
  return (
    <StyledNav>
      <StyledNavList>
        {Object.values(APP_NAVIGATION_LINKS).map(
          (link: TNavLink, index: number) => {
            {
              if (+newUserCheck + +link.isAlwaysVisible) {
                return (
                  <StyledNavListItem
                    key={JSON.stringify(link)}
                    newUserCheck={
                      !!(+newUserCheck + +link.isAlwaysVisible) && newUserCheck
                    }
                  >
                    <NavLink
                      to={Object.keys(APP_NAVIGATION_LINKS)[index]}
                      exact
                      activeClassName="activeNavLink"
                      onClick={() => setDisplayCoursesList(false)}
                    >
                      {link.name}
                      <StyledHeaderActiveElement />
                    </NavLink>
                  </StyledNavListItem>
                );
              }
              return;
            }
          }
        )}
      </StyledNavList>
    </StyledNav>
  );
};

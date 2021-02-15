import React, { FC } from 'react';
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

export const Nav: FC = () => {
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

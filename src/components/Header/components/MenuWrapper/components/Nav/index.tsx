import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { APP_NAVIGATION_LINKS } from 'appConstants';
import { NavLink } from 'react-router-dom';
import {
  StyledNav,
  StyledNavList,
  StyledNavListItem,
  StyledHeaderActiveElement,
} from './styled';
import { TNavLink } from 'types';

type NavProps = {
  newUserCheck: boolean;
  navOnClickHandler: (e: React.MouseEvent<HTMLElement>, path: string) => void;
};

export const Nav: FC<NavProps> = ({ newUserCheck, navOnClickHandler }) => {
  const { t } = useTranslation();

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
                      onClick={(e) =>
                        navOnClickHandler(
                          e,
                          Object.keys(APP_NAVIGATION_LINKS)[index]
                        )
                      }
                    >
                      {t(link.name)}
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

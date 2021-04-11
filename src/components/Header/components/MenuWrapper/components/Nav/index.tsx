import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
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
import { setCourseSelectOpen } from 'modules/LoginPage/loginPageReducer';

type NavProps = {
  newUserCheck: boolean;
};

export const Nav: FC<NavProps> = ({ newUserCheck }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setCourseSelectOpen(false));
  };
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
                      onClick={onClickHandler}
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

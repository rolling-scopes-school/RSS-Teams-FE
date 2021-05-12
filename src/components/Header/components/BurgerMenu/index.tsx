import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsBurgerMenuOpen } from 'modules/LoginPage/selectors';
import {
  BurgerMenuWrapper,
  BurgerMenuLayout,
  CrossButton,
  BurgerMenuNavList,
  BurgerMenuNavListItem,
  BurgerMenuOverlay,
} from './styled';
import { setBurgerMenuOpen } from 'modules/LoginPage/loginPageReducer';
import { APP_NAVIGATION_LINKS } from 'appConstants';
import { useTranslation } from 'react-i18next';
import { TNavLink } from 'types';
import { LangSelect } from '../MenuWrapper/components/LangSelect';

type BurgerMenuProps = {
  newUserCheck: boolean;
  navOnClickHandler: (e: React.MouseEvent<HTMLElement>, path: string) => void;
};

export const BurgerMenu: FC<BurgerMenuProps> = ({ newUserCheck, navOnClickHandler }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isBurgerMenuOpen = useSelector(selectIsBurgerMenuOpen);

  const onClickMenuToggle = () => {
    dispatch(setBurgerMenuOpen(!isBurgerMenuOpen));
  };

  return (
    <BurgerMenuWrapper {...{ isBurgerMenuOpen }}>
      <BurgerMenuOverlay {...{ isBurgerMenuOpen }} onClick={onClickMenuToggle} />
      <BurgerMenuLayout>
        <CrossButton onClick={onClickMenuToggle} />
        <BurgerMenuNavList>
          {Object.values(APP_NAVIGATION_LINKS).map((link: TNavLink, index: number) => {
            if (+newUserCheck + +link.isAlwaysVisible) {
              return (
                <BurgerMenuNavListItem key={JSON.stringify(link)}>
                  <NavLink
                    to={Object.keys(APP_NAVIGATION_LINKS)[index]}
                    exact
                    activeClassName="activeNavLink"
                    onClick={(e) => {
                      onClickMenuToggle();
                      navOnClickHandler(e, Object.keys(APP_NAVIGATION_LINKS)[index]);
                    }}
                  >
                    {t(link.name)}
                  </NavLink>
                </BurgerMenuNavListItem>
              );
            }
          })}
        </BurgerMenuNavList>
        <LangSelect menuToggle="menuToggle" />
      </BurgerMenuLayout>
    </BurgerMenuWrapper>
  );
};

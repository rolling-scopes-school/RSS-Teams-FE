import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  selectIsBurgerMenuOpen,
  selectIsBurgerMenuSelectOpen,
} from 'modules/LoginPage/selectors';
import {
  BurgerMenuWrapper,
  BurgerMenuLayout,
  CrossButton,
  BurgerMenuNavList,
  BurgerMenuNavListItem,
} from './styled';
import {
  setBurgerMenuOpen,
  setBurgerMenuSelectOpen,
} from 'modules/LoginPage/loginPageReducer';
import { APP_NAVIGATION_LINKS } from 'appConstants';
import { useTranslation } from 'react-i18next';
import { TNavLink } from 'types';
import { LangSelect } from '../MenuWrapper/components/LangSelect';

type BurgerMenuProps = {
  newUserCheck: boolean;
};

export const BurgerMenu: FC<BurgerMenuProps> = ({ newUserCheck }) => {
  const dispatch = useDispatch();
  const isBurgerMenuOpen = useSelector(selectIsBurgerMenuOpen);
  const isBurgerMenuSelectOpen = useSelector(selectIsBurgerMenuSelectOpen);
  const { t } = useTranslation();

  const onClickMenuToggle = () => {
    dispatch(setBurgerMenuOpen(!isBurgerMenuOpen));
    dispatch(setBurgerMenuSelectOpen(false));
  };
  const onClickMenuLayout = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <BurgerMenuWrapper {...{ isBurgerMenuOpen }} onClick={onClickMenuToggle}>
      <BurgerMenuLayout onClick={onClickMenuLayout}>
        <CrossButton onClick={onClickMenuToggle} />
        <BurgerMenuNavList>
          {Object.values(APP_NAVIGATION_LINKS).map(
            (link: TNavLink, index: number) => {
              {
                if (+newUserCheck + +link.isAlwaysVisible) {
                  return (
                    <BurgerMenuNavListItem key={JSON.stringify(link)}>
                      <NavLink
                        to={Object.keys(APP_NAVIGATION_LINKS)[index]}
                        exact
                        activeClassName="activeNavLink"
                        onClick={onClickMenuToggle}
                      >
                        {t(link.name)}
                      </NavLink>
                    </BurgerMenuNavListItem>
                  );
                }
                return;
              }
            }
          )}
        </BurgerMenuNavList>
        <LangSelect
          menuToggle="menuToggle"
          displayLangList={isBurgerMenuSelectOpen}
          setDisplayLangList={setBurgerMenuSelectOpen}
        />
      </BurgerMenuLayout>
    </BurgerMenuWrapper>
  );
};

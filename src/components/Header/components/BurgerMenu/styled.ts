import styled from 'styled-components';
import {
  DARK_TEXT_COLOR,
  OVERLAY_COLOR,
  WHITE_COLOR,
} from 'appConstants/colors';
import { ReactComponent as IconClose } from 'assets/svg/cross.svg';

type BurgerMenuProps = {
  isBurgerMenuOpen: boolean;
};

export const BurgerMenuWrapper = styled.div<BurgerMenuProps>`
  position: fixed;
  z-index: 3;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  transition: transform 0.6s ease-in-out;
  transform: ${({ isBurgerMenuOpen }) =>
    isBurgerMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
`;

export const BurgerMenuOverlay = styled.div<BurgerMenuProps>`
  width: calc(100% - 250px);
  height: 100%;
  background-color: ${({ isBurgerMenuOpen }) =>
    isBurgerMenuOpen ? OVERLAY_COLOR : 'none'};
  transition: background-color 0.6s ease-in-out;

  @media (max-width: 440px) {
    width: calc(100% - 180px);
  }
`;

export const BurgerMenuLayout = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 250px;
  height: 100%;
  padding: 20px 20px 20px 40px;
  background: ${WHITE_COLOR};

  @media (max-width: 440px) {
    width: 180px;
    padding-left: 20px;
  }
`;

export const CrossButton = styled(IconClose)`
  width: 16px;
  height: 16px;
  align-self: flex-end;
  cursor: pointer;
`;

export const BurgerMenuNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0;
  padding-inline-start: 0;
`;

export const BurgerMenuNavListItem = styled.li`
  list-style-type: none;

  a {
    text-decoration: none;
    color: ${DARK_TEXT_COLOR};
  }

  a.activeNavLink,
  a:hover {
    font-weight: 700;
  }
`;

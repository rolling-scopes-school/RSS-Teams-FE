import styled from 'styled-components';
import { DARK_TEXT_COLOR, OVERLAY_COLOR, WHITE_COLOR } from 'appConstants/colors';
import { ReactComponent as IconClose } from 'assets/svg/cross.svg';

type BurgerMenuProps = {
  isBurgerMenuOpen: boolean;
};

export const BurgerMenuOverlay = styled.div<BurgerMenuProps>`
  position: absolute;
  width: 100vw;
  height: ${({ isBurgerMenuOpen }) => (isBurgerMenuOpen ? '100vh' : 0)};
  background-color: ${({ isBurgerMenuOpen }) => (isBurgerMenuOpen ? OVERLAY_COLOR : 'none')};
  transition: background-color 0.6s ease-in-out;
  z-index: 3;
`;

export const BurgerMenuLayout = styled.nav<BurgerMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 250px;
  height: 100vh;
  padding: 20px 20px 20px 40px;
  background: ${WHITE_COLOR};
  z-index: 5;
  transition: transform 0.6s ease-in-out;
  transform: ${({ isBurgerMenuOpen }) => (isBurgerMenuOpen ? 'translateX(0)' : 'translateX(100%)')};

  @media (max-width: 440px) {
    width: 195px;
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

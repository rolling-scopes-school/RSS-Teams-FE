import { WHITE_COLOR } from 'appConstants/colors';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as HeaderActiveElement } from 'assets/svg/headerActiveElement.svg';

type TStyledNavListItemProps = {
  newUserCheck: boolean;
};

const open = keyframes`
  from: { height: 0 }
  to: { height: 100%}
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  font: 400 1rem/24px 'Poppins', sans-serif;
`;

export const StyledNavList = styled.ul`
  @media (max-width: 1260px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-inline-start: 0;
  gap: 60px;
`;

export const StyledHeaderActiveElement = styled(HeaderActiveElement)`
  width: 87px;
  height: 0;
`;

export const StyledNavListItem = styled.li<TStyledNavListItemProps>`
  list-style-type: none;

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    color: ${WHITE_COLOR};
    text-decoration: none;

    &:hover {
      font-weight: 700;
    }

    svg {
      height: 0;
      margin-bottom: -5px;
      transition: all 0.5s ease-in-out;
      animation: ${open} 0.5s ease-in-out;
    }
  }

  a.activeNavLink {
    font-weight: 700;

    svg {
      height: 22px;
      margin-bottom: 0;
    }
  }
`;

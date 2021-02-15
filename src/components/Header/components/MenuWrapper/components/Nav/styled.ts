import { WHITE_COLOR } from 'appConstants/colors';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as HeaderActiveElement } from 'assets/svg/headerActiveElement.svg';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  font: 400 1rem/24px 'Poppins', sans-serif;
`;

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-inline-start: 0;
  gap: 60px;

  @media (max-width: 549px) and (min-width: 440px) {
    gap: 15.8%;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    gap: 8%;
  }
`;

export const StyledHeaderActiveElement = styled(HeaderActiveElement)`
  width: 87px;
  height: 0;
`;

const open = keyframes`
  from: { height: 0 }
  to: { height: 100%}
`;

export const StyledNavListItem = styled.li`
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

    @media (max-width: 767px) and (min-width: 550px) {
      height: 46px;
    }
    @media (max-width: 549px) and (min-width: 440px) {
      height: 42px;
    }
    @media (max-width: 439px) and (min-width: 320px) {
      height: 38px;
    }
  }

  a.activeNavLink {
    font-weight: 700;

    svg {
      height: 22px;
      margin-bottom: 0;

      @media (max-width: 767px) and (min-width: 550px) {
        height: 18px;
      }
      @media (max-width: 549px) and (min-width: 440px) {
        height: 16px;
      }
      @media (max-width: 439px) and (min-width: 320px) {
        height: 14px;
      }
    }
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 0.95rem;
  }
  @media (max-width: 991px) and (min-width: 550px) {
    font-size: 0.9rem;
  }
  @media (max-width: 549px) and (min-width: 440px) {
    font-size: 0.825rem;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    font-size: 0.72rem;
  }
`;

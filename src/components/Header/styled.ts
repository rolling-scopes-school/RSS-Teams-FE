import styled from 'styled-components';
import { MAIN1_COLOR } from 'appConstants/colors';

type TStyledHeaderProps = {
  login: string | null;
};

export const StyledHeader = styled.header<TStyledHeaderProps>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 80px;
  padding: ${({ login }) => (login ? '1.4% 4.2% 0' : '2.8% 4.2% 0 2.8%')};
  background-color: ${({ login }) => (login ? MAIN1_COLOR : 'transparent')};

  @media (max-width: 549px) and (min-width: 320px) {
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1320px;

  @media (max-width: 549px) and (min-width: 320px) {
    flex-direction: column;
    gap: 0.1rem;
  }
  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 0.95rem;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 767px) and (min-width: 550px) {
    font-size: 0.825rem;
  }
  @media (max-width: 549px) and (min-width: 440px) {
    font-size: 0.8rem;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    font-size: 0.68rem;
  }
`;

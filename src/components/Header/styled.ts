import styled from 'styled-components';
import { MAIN1_COLOR } from 'appConstants/colors';
import { GeneralAdaptiveFont } from 'typography';

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
  width: 100%;
  z-index: 1;

  @media (max-width: 549px) and (min-width: 320px) {
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1320px;
  ${GeneralAdaptiveFont};

  @media (max-width: 549px) and (min-width: 320px) {
    flex-direction: column;
    gap: 0.1rem;
  }
`;

import styled from 'styled-components';
import { MAIN1_COLOR } from 'appConstants/colors';
import { THeaderProps } from './index';

export const StyledHeader = styled.header<THeaderProps>`
  background-color: ${({ login }) => (login ? MAIN1_COLOR : 'transparent')};
  padding: ${({ login }) => (login ? '25px 60px' : '40px 60px 25px 40px')};
`;

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

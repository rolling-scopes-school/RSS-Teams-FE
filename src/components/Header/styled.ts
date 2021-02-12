import styled from 'styled-components';
import { MAIN1_COLOR } from 'appConstants/colors';
import { THeaderProps } from './index';

export const StyledHeader = styled.header<THeaderProps>`
  background-color: ${({ isLogin }) => (isLogin ? MAIN1_COLOR : 'transparent')};
  padding: 25px 60px;
`;

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

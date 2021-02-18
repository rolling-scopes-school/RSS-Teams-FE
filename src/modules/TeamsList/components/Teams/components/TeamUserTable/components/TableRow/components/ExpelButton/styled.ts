import styled from 'styled-components';
import { ReactComponent as Cross } from 'assets/svg/cross-small.svg';
import { MAIN1_COLOR } from 'appConstants/colors';

type StyledExpelButtonProps = {
  color?: string;
};

export const StyledExpelButton = styled.div<StyledExpelButtonProps>`
  width: 63px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ color }) => (color ? color : MAIN1_COLOR)};
`;

export const SmallCrossIcon = styled(Cross)`
  width: 12px;
  height: 12px;

  path {
    stroke: currentColor;
  }
`;

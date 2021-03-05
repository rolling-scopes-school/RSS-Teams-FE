import styled from 'styled-components';
import { ReactComponent as Cross } from 'assets/svg/cross-small.svg';
import { MAIN1_COLOR } from 'appConstants/colors';
import { SVGArrowAdaptive } from 'typography';

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

  @media (max-width: 550px) {
    width: 55px;
  }
`;

export const SmallCrossIcon = styled(Cross)`
  width: 12px;
  height: 12px;
  ${SVGArrowAdaptive};

  @media (max-width: 992px) and (min-width: 768px) {
    width: 11px;
    height: 11px;
  }

  path {
    stroke: currentColor;
  }
`;

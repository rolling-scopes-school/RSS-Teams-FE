import styled from 'styled-components';
import { WHITE_COLOR } from 'appConstants/colors';
import { SVGArrowAdaptive } from 'typography';

type ChevronProps = {
  open: boolean;
};

export const MembersListToggleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 134px;
  cursor: pointer;
  color: ${({ color }) => color || WHITE_COLOR};

  path {
    stroke: currentColor;
  }

  @media (max-width: 992px) {
    width: 115px;
  }
  @media (max-width: 768px) {
    width: 105px;
  }
  @media (max-width: 440px) {
    width: 85px;
  }
`;

export const Chevron = styled.div<ChevronProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateX(${({ open }) => (open ? '180deg' : '0deg')});
  margin-left: 10px;
  transition: all 0.3s;

  svg {
    ${SVGArrowAdaptive};
  }
`;

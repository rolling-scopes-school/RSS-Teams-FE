import styled from 'styled-components';
import { ReactComponent as ChevronArrow } from 'assets/svg/chevron-arrow.svg';
import { WHITE_COLOR } from 'appConstants/colors';

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
`;

export const Chevron = styled(ChevronArrow)<ChevronProps>`
  transform: rotateX(${({ open }) => (open ? '180deg' : '0deg')});
  margin-left: 10px;
  transition: all 0.3s;
`;

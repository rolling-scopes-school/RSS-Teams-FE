import styled from 'styled-components';
import { ReactComponent as ChevronArrow } from 'assets/svg/chevron-arrow.svg';

type MembersToggleButtonProps = {
  open: boolean;
};

export const MembersListToggleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 134px;
  cursor: pointer;
`;

export const Chevron = styled(ChevronArrow)<MembersToggleButtonProps>`
  transform: rotateX(${({ open }) => (open ? '180deg' : '0deg')});
  margin-left: 10px;
  transition: all 0.3s;
`;

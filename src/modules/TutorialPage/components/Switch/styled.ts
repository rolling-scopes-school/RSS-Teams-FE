import { MAIN1_COLOR } from 'appConstants/colors';
import styled from 'styled-components';
import { TextSemiBold } from 'typography';

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 145px;
  height: 43px;
  border-radius: 100px;
  border: 2px solid ${MAIN1_COLOR};
  position: relative;
  transition: background-color 0.3s;
`;

export const SwitchButton = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 35px;
  height: 35px;
  border-radius: 45px;
  transition: 0.2s;
  background-color: ${MAIN1_COLOR};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  ${SwitchLabel}:active & {
    width: 55px;
  }
`;

export const FirstOption = styled.span`
  ${TextSemiBold}
  margin-left: 10px;
`;

export const SecondOption = styled.span`
  ${TextSemiBold}
  margin-left: 57px;
`;

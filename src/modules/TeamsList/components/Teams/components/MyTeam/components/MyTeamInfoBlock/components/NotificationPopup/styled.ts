import styled from 'styled-components';
import { LIGHT_TEXT_COLOR, WHITE_COLOR } from 'appConstants/colors';

export const NotificationPopupStyled = styled.div`
  position: absolute;
  top: 153%;
  right: 0;
  width: 240px;
  background-color: ${WHITE_COLOR};
  color: ${LIGHT_TEXT_COLOR};
  border-radius: 10px;
  padding: 20px 20px;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 8px;
    transform: rotateZ(59deg) skew(33deg);
    height: 22px;
    width: 22px;
    border-radius: 4px;
    background-color: ${WHITE_COLOR};
  }
`;

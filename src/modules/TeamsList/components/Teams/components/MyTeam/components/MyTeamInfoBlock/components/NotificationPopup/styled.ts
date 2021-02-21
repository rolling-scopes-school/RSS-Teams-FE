import styled from 'styled-components';
import { LIGHT_TEXT_COLOR, WHITE_COLOR } from 'appConstants/colors';

export const NotificationPopupStyled = styled.div`
  position: absolute;
  bottom: 110%;
  right: -30%;
  min-width: 200px;
  max-width: 300px;
  background: ${WHITE_COLOR};
  color: ${LIGHT_TEXT_COLOR};
  border-radius: 20px;
  padding: 20px 30px;
  z-index: 1;
`;

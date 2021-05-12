import { WHITE_COLOR, DARK_TEXT_COLOR, TABLE_POPUP_BORDER_COLOR } from 'appConstants/colors';
import styled from 'styled-components';
import { GeneralAdaptiveFont } from 'typography';

type TStyledPopup = {
  dataLength: number;
};

export const StyledPopup = styled.div<TStyledPopup>`
  position: absolute;
  top: ${({ dataLength }) => dataLength < 0.5 && '95%'};
  bottom: ${({ dataLength }) => dataLength > 0.5 && '95%'};
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-size: 1rem;
  color: ${DARK_TEXT_COLOR};
  background-color: ${WHITE_COLOR};
  border: 1px solid ${TABLE_POPUP_BORDER_COLOR};
  border-radius: 10px;
  ${GeneralAdaptiveFont};
  @media (max-width: 440px) {
    left: -5px;
    padding: 5px;
  }
`;

export const StyledPopupItem = styled.p`
  margin: 0;
  line-height: 17px;
  text-align: justify;
`;

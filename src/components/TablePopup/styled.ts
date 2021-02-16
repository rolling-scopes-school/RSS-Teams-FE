import {
  WHITE_COLOR,
  DARK_TEXT_COLOR,
  TABLE_POPUP_BORDER_COLOR,
} from 'appConstants/colors';
import styled from 'styled-components';

type TStyledPopup = {
  dataLength: number;
};

export const StyledPopup = styled.div<TStyledPopup>`
  position: absolute;
  top: ${({ dataLength }) => dataLength < 0.5 && '95%'};
  bottom: ${({ dataLength }) => dataLength > 0.5 && '95%'};
  right: 0;
  z-index: 2;
  display: 'flex';
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-size: 1rem;
  color: ${DARK_TEXT_COLOR};
  background-color: ${WHITE_COLOR};
  border: 1px solid ${TABLE_POPUP_BORDER_COLOR};
  border-radius: 10px;
  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 0.95rem;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 767px) and (min-width: 550px) {
    font-size: 0.825rem;
  }
  @media (max-width: 549px) and (min-width: 440px) {
    font-size: 0.8rem;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    left: -5px;
    padding: 5px;
    font-size: 0.68rem;
  }
`;

export const StyledPopupItem = styled.p`
  margin: 0;
  line-height: 17px;
  text-align: justify;
`;

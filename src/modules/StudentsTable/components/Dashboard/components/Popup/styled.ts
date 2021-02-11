import { WHITE_COLOR } from 'appConstants/colors';
import styled from 'styled-components';

type TStyledPopup = {
  popupStyles: {
    top: number;
    left: number;
  } | null;
  showPopup: boolean;
};

export const StyledPopup = styled.div<TStyledPopup>`
  position: fixed;
  top: ${({ popupStyles }) => (popupStyles ? `${popupStyles.top}px` : 0)};
  left: ${({ popupStyles }) => (popupStyles ? `${popupStyles.left}px` : 0)};
  display: ${({ showPopup }) => (showPopup ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-size: 1rem;
  color: #363d48;
  background-color: ${WHITE_COLOR};
  border: 1px solid rgba(54, 61, 72, 0.2);
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
    padding: 5px;
    font-size: 0.68rem;
  }
`;

export const StyledPopupItem = styled.p`
  margin: 0;
  line-height: 17px;
`;

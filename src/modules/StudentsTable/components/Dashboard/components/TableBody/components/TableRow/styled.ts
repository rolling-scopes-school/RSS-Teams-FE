import { BG_COLOR, DARK_TEXT_COLOR } from 'appConstants/colors';
import styled from 'styled-components';

export const StyledTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-weight: 400;
  line-height: 150%;
  color: ${DARK_TEXT_COLOR};
  border-radius: 10px;
  &:nth-child(2n) {
    background-color: ${BG_COLOR};
  }

  @media (max-width: 767px) and (min-width: 440px) {
    padding: 10px;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    padding: 5px;
  }
`;

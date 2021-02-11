import styled from 'styled-components';
import {
  LIGHT_TEXT_COLOR,
  DASHBOARD_HEADER_BG_COLOR,
} from 'appConstants/colors';

export const StyledTableHead = styled.thead`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding: 10px 20px;
  color: ${LIGHT_TEXT_COLOR};
  background-color: ${DASHBOARD_HEADER_BG_COLOR};
  border-radius: 10px;
  @media (max-width: 767px) and (min-width: 550px) {
    padding: 10px;
  }
  @media (max-width: 549px) and (min-width: 440px) {
    padding: 10px;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    padding: 5px;
  }
`;

export const StyledTableHeadRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledTableHeader = styled.th`
  max-width: 140px;
  height: auto;
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  line-height: 150%;
  text-align: start;
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
    font-size: 0.68rem;
  }
`;

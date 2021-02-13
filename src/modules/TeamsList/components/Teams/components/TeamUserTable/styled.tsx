import styled from 'styled-components';
import {
  DASHBOARD_HEADER_BG_COLOR,
  TABLE_SCROLLBAR_BG_COLOR,
  LIGHT_TEXT_COLOR,
  DARK_TEXT_COLOR,
} from 'appConstants/colors';
import { TextBold } from '../../../../../../typography';

export const TeamUserTableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;

  tr:nth-child(even) {
    background-color: ${TABLE_SCROLLBAR_BG_COLOR};
  }
  td {
    color: ${DARK_TEXT_COLOR};
    padding: 10px;

    &:nth-child(2) {
      ${TextBold};
      font-weight: bold;
    }
  }
`;

export const TeamUserTableHeaderStyled = styled.thead`
  background-color: ${DASHBOARD_HEADER_BG_COLOR};
  color: ${LIGHT_TEXT_COLOR};

  th {
    padding: 10px;
    text-align: left;

    &:first-child {
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
    }

    &:last-child {
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
`;

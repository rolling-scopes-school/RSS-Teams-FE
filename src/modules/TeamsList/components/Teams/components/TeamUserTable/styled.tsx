import styled from 'styled-components';
import {
  DASHBOARD_HEADER_BG_COLOR,
  LIGHT_TEXT_COLOR,
  DARK_TEXT_COLOR,
  BG_COLOR,
} from 'appConstants/colors';
import { TextBold } from 'typography';

export const StyledTeamUserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  transition: all 0.3s ease-in-out;

  thead {
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

      @media (max-width: 992px) {
        &:nth-child(4) {
          display: none;
        }
      }
    }
  }

  tr:nth-child(even) {
    background-color: ${BG_COLOR};
  }
  td {
    color: ${DARK_TEXT_COLOR};
    padding: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:nth-child(2) {
      ${TextBold};
      font-weight: bold;
    }

    &:first-child {
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
    }

    &:last-child {
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
    }

    @media (max-width: 992px) {
      &:nth-child(4) {
        display: none;
      }
    }
  }
`;

import styled, { css } from 'styled-components';
import {
  DASHBOARD_HEADER_BG_COLOR,
  LIGHT_TEXT_COLOR,
  DARK_TEXT_COLOR,
  BG_COLOR,
} from 'appConstants/colors';
import { TextBold, GeneralAdaptiveFont } from 'typography';

const AdaptiveFirstCellBorderRadius = css`
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const AdaptiveLastCellBorderRadius = css`
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

const AdaptiveCellVisible = css`
  &:first-child {
    ${AdaptiveFirstCellBorderRadius}
  }

  &:last-child {
    ${AdaptiveLastCellBorderRadius}
  }

  @media (max-width: 992px) {
    &:nth-child(5),
    &:nth-child(6) {
      display: none;
    }
  }
  @media (max-width: 650px) {
    &:nth-child(7) {
      display: none;
    }
  }
  @media (max-width: 500px) {
    &:nth-child(3) {
      display: none;
    }
  }
`;

export const StyledTeamUserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  transition: all 0.3s ease-in-out;
  ${GeneralAdaptiveFont}

  thead {
    background-color: ${DASHBOARD_HEADER_BG_COLOR};
    color: ${LIGHT_TEXT_COLOR};

    & .SecondTable th:nth-child(4) {
      @media (max-width: 650px) {
        ${AdaptiveLastCellBorderRadius}
      }
    }

    & .FirstTable th:nth-child(4) {
      @media (max-width: 440px) {
        display: none;
      }
    }

    th {
      padding: 10px;
      text-align: left;
      ${AdaptiveCellVisible}
    }
  }

  tr.FirstTable td:nth-child(4) {
    @media (max-width: 440px) {
      display: none;
    }
  }

  tr.SecondTable td:nth-child(4) {
    @media (max-width: 650px) {
      ${AdaptiveLastCellBorderRadius}
    }
  }

  tr:nth-child(even) {
    background-color: ${BG_COLOR};
  }

  tr.MentorRow {
    font-weight: bold;
  }
  td {
    color: ${DARK_TEXT_COLOR};
    padding: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
    ${AdaptiveCellVisible}

    &:nth-child(2) {
      ${TextBold};
      font-weight: bold;
      ${GeneralAdaptiveFont}
    }
  }
`;

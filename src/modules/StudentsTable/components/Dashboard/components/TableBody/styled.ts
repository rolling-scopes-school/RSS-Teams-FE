import {
  TABLE_SCROLLBAR_BG_COLOR,
  TABLE_SCROLLBAR_THUMB_COLOR,
  BG_COLOR,
  DARK_TEXT_COLOR,
} from 'appConstants/colors';
import styled from 'styled-components';

type TStyledTableItem = {
  tableItemCursor: boolean;
};

export const StyledTableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: ${TABLE_SCROLLBAR_BG_COLOR};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${TABLE_SCROLLBAR_THUMB_COLOR};
    border-radius: 20px;
  }
`;

export const StyledTableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${DARK_TEXT_COLOR};
  border-radius: 10px;
  &:nth-child(2n) {
    background-color: ${BG_COLOR};
  }
`;

export const StyledTableItem = styled.td<TStyledTableItem>`
  max-width: 140px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: ${({ tableItemCursor }) => (tableItemCursor ? 'pointer' : 'unset')};
`;

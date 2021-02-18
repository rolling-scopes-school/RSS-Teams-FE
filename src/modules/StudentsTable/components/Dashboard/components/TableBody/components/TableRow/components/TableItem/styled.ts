import styled from 'styled-components';

type TStyledTableItem = {
  tableItemCursor: boolean;
};

export const StyledTableItem = styled.div<TStyledTableItem>`
  position: relative;
  max-width: 140px;
  cursor: ${({ tableItemCursor }) => (tableItemCursor ? 'pointer' : 'unset')};
  .TableItem__first-element {
    width: 100%;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

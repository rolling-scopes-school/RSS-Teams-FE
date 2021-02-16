import React, { FC } from 'react';
import { TABLE_HEADERS } from 'appConstants';
import {
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableHeader,
} from './styled';

export const TableHead: FC = () => (
  <StyledTableHead>
    <StyledTableHeadRow>
      {TABLE_HEADERS.map((tableHeader: string, index: number) => (
        <StyledTableHeader
          className={`TableItem--${index}`}
          key={`TableHeaderKey-${index}`}
        >
          {tableHeader}
        </StyledTableHeader>
      ))}
    </StyledTableHeadRow>
  </StyledTableHead>
);

import React, { FC } from 'react';
import {
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableHeader,
} from './styled';

const tableHeaders: string[] = [
  '№',
  'First / Last Name',
  'Score',
  'Team Number',
  'Telegram',
  'Discord',
  'Github',
  'Location',
  'Courses',
];

export const TableHead: FC = () => (
  <StyledTableHead>
    <StyledTableHeadRow>
      {tableHeaders.map((tableHeader: string, index: number) => (
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

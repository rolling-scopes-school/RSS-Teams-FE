import { FC } from 'react';
import {
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableHeader,
} from './styled';

type TableHeadProps = {
  [key: string]: string[];
};

export const TableHead: FC<TableHeadProps> = ({ tableHeaders }) => (
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

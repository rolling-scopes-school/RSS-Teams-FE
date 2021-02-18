import React, { CSSProperties, FC } from 'react';
import { TableItem } from './components/TableItem';
import { StyledTableRow } from './styled';

type TableItemProps = {
  index: number;
  style: CSSProperties;
  data: string[][];
};

export const TableRow: FC<TableItemProps> = ({ index, style, data }) => {
  return (
    <StyledTableRow key={`TableRowKey-${index}`} style={style}>
      {data[index].map((item: string, ind: number) => (
        <TableItem
          item={item}
          index={ind}
          dataLength={index / (data.length - 1)}
          key={`TableItemKey-${ind}`}
        />
      ))}
    </StyledTableRow>
  );
};

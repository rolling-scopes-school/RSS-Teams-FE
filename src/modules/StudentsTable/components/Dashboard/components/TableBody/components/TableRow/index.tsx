import React, { CSSProperties, FC } from 'react';
import { TableItem } from './components/TableItem';
import { StyledTableRow } from './styled';

type TableItemProps = {
  index: number;
  style: CSSProperties;
  data: string[][];
};

export const TableRow: FC<TableItemProps> = ({ index, style, data }) => {
  const optimalItemIndexCount = 2;
  return (
    <StyledTableRow style={style}>
      {data[index].map((item: string, ind: number) => (
        <TableItem
          item={item}
          index={ind}
          dataLength={
            index > optimalItemIndexCount ? index / (data.length - 1) : 0
          }
          key={`TableItemKey-${ind}`}
        />
      ))}
    </StyledTableRow>
  );
};

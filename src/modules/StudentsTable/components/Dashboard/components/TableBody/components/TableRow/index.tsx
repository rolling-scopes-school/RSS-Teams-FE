import React, { FC } from 'react';
import { ListChildComponentProps } from 'react-window';
import { TableItem } from './components/TableItem';
import { StyledTableRow } from './styled';

export const TableRow: FC<ListChildComponentProps> = ({
  data,
  index,
  style,
}) => {
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

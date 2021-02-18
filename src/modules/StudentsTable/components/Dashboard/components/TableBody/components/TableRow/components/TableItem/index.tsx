import React, { FC, MouseEvent, useState } from 'react';
import { TablePopup } from 'components/TablePopup';
import { StyledTableItem } from './styled';

type TableItemProps = {
  item: string;
  index: number;
  dataLength: number;
};

export const TableItem: FC<TableItemProps> = ({ item, index, dataLength }) => {
  const [tableItemCursor, setTableItemCursor] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupElements, setPopupElements] = useState<string[]>([]);

  const mouseOverHandler = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.scrollWidth !== target.clientWidth) {
      setShowPopup(true);
      setPopupElements(target?.textContent?.split(',') as string[]);
      setTableItemCursor(true);
    }
  };

  const mouseLeaveHandler = () => {
    setShowPopup(false);
    setPopupElements([]);
    setTableItemCursor(false);
  };

  return (
    <StyledTableItem
      className={`TableItem--${index}`}
      key={`TableItemKey-${index}`}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseLeaveHandler}
      tableItemCursor={tableItemCursor}
    >
      <div className={`TableItem__first-element`}>{item}</div>
      {showPopup && <TablePopup {...{ popupElements, dataLength }} />}
    </StyledTableItem>
  );
};

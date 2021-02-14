import React, { FC, MouseEvent, useState, useMemo } from 'react';
import { StyledTableBody, StyledTableItem, StyledTableRow } from './styled';
import './styles.css';

type TableBodyProps = {
  setPopupElements: (styles: any) => void;
  setShowPopup: (show: boolean) => void;
  setPopupStyles: (styles: any) => void;
  users: any[];
};

export const TableBody: FC<TableBodyProps> = (props) => {
  const { setPopupElements, setShowPopup, setPopupStyles, users } = props;
  console.log('🚀 ~ file: index.tsx ~ line 14 ~ users', users);
  const [tableItemCursor, setTableItemCursor] = useState(false);

  const usersData: string[][] = useMemo(
    () =>
      users.map((user: any, index: number) => {
        return [
          index + 1,
          `${user.firstName} ${user.lastName || null}`,
          user.score,
          user.teams.length
            ? user.teams.map((team: any) => team.number).join(', ')
            : 'No team yet.',
          user.telegram || 'No telegram.',
          user.discord || 'No discord.',
          user.github || 'No github.',
          `${user.country},
          ${user.city}`,
          user.courses.length
            ? user.courses.map((course: any) => course.name).join(', ')
            : 'No courses.',
        ];
      }),
    [users]
  );

  const mouseOverHandler = (event: MouseEvent<HTMLTableCellElement>) => {
    const target = event.target as HTMLTableCellElement;
    if (target.scrollWidth !== target.clientWidth) {
      const style = {
        top: target.getBoundingClientRect().bottom,
        left: target.getBoundingClientRect().left - 5,
      };
      setShowPopup(true);
      setPopupElements(target?.textContent?.split(','));
      setPopupStyles(style);
      setTableItemCursor(true);
    }
  };

  const mouseLeaveHandler = (event: MouseEvent<HTMLTableCellElement>) => {
    const target = event.target as HTMLTableCellElement;
    if (target.scrollWidth !== target.clientWidth) {
      setShowPopup(false);
      setPopupElements([]);
      setPopupStyles(null);
      setTableItemCursor(false);
    }
  };

  return (
    <StyledTableBody>
      {usersData.map((user: string[], index: number) => (
        <StyledTableRow key={`TableRowKey-${index}`}>
          {user.map((item: string, index: number) => (
            <StyledTableItem
              className={`TableItem--${index}`}
              key={`TableItemKey-${index}`}
              onMouseOver={mouseOverHandler}
              onMouseLeave={mouseLeaveHandler}
              tableItemCursor={tableItemCursor}
            >
              {item}
            </StyledTableItem>
          ))}
        </StyledTableRow>
      ))}
    </StyledTableBody>
  );
};

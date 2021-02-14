import React, { FC, MouseEvent, useState, useMemo, ReactText } from 'react';
import { StyledTableBody, StyledTableItem, StyledTableRow } from './styled';
import './styles.css';
import { User, Course, Team } from 'types';
import { SetStateAction } from 'react';

type TableBodyProps = {
  setPopupElements: (styles: string[] | undefined) => void;
  setShowPopup: (show: boolean) => void;
  setPopupStyles: (styles: { top: number; left: number } | null) => void;
  users: User[];
};

export const TableBody: FC<TableBodyProps> = (props) => {
  const { setPopupElements, setShowPopup, setPopupStyles, users } = props;
  const [tableItemCursor, setTableItemCursor] = useState(false);

  const usersData: Array<[string | number] | ReactText[]> = useMemo(
    () =>
      users.map((user: User, index: number) => {
        return [
          index + 1,
          `${user.firstName} ${user.lastName || null}`,
          user.score,
          user.teams.length
            ? (user.teams as Array<Team>)
                .map((team: Team) => team.number)
                .join(', ')
            : 'No team yet.',
          user.telegram || 'No telegram.',
          user.discord || 'No discord.',
          user.github || 'No github.',
          `${user.country},
          ${user.city}`,
          user.courses.length
            ? (user.courses as Array<Course>)
                .map((course: Course) => course.name)
                .join(', ')
            : 'No courses.',
        ];
      }),
    [users]
  );

  const mouseOverHandler = (event: MouseEvent<HTMLTableCellElement>) => {
    const target = event.target as HTMLTableCellElement;
    if (target.scrollWidth !== target.clientWidth) {
      const style: { top: number; left: number } = {
        top: target.getBoundingClientRect().bottom,
        left: target.getBoundingClientRect().left - 5,
      };
      setShowPopup(true);
      setPopupElements(target?.textContent?.split(',') as string[]);
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
      {usersData.map((user: [string | number] | ReactText[], index: number) => (
        <StyledTableRow key={`TableRowKey-${index}`}>
          {user.map((item: string | number, index: number) => (
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

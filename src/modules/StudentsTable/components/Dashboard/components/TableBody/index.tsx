import React, { FC, MouseEvent, useState, useMemo, ReactText } from 'react';
import { StyledTableBody, StyledTableItem, StyledTableRow } from './styled';
import './styles.css';
import { User, Course, Team } from 'types';
import { USERS_PER_PAGE } from 'appConstants';

type TableBodyProps = {
  setPopupElements: (styles: string[]) => void;
  setShowPopup: (show: boolean) => void;
  setPopupStyles: (styles: { top: number; left: number } | null) => void;
  users: User[];
  page: number;
};

export const TableBody: FC<TableBodyProps> = (props) => {
  const { setPopupElements, setShowPopup, setPopupStyles, users, page } = props;
  const [tableItemCursor, setTableItemCursor] = useState(false);

  const usersData: Array<string[] | ReactText[]> = useMemo(
    () =>
      users.map((user: User, index: number) => {
        return [
          `${index + 1 + page * USERS_PER_PAGE}`,
          `${user.firstName} ${user.lastName || null}`,
          user.score,
          user.teams.length
            ? (user.teams as Array<Team>)
                .map((team: Team) => `${team.number}`)
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
      {usersData.map((user: string[] | ReactText[], index: number) => (
        <StyledTableRow key={`TableRowKey-${index}`}>
          {(user as string[]).map((item: string, index: number) => (
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

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
  const [changedTableItemCursor, setTableItemCursor] = useState(false);

  const teamNames: string[][] = useMemo(
    () =>
      users.map((user: any) => {
        user.teamName = user.teams.find(
          (team: any) => team.id === user.teamIds[0]
        )
          ? user.teams.find((team: any) => team.id === user.teamIds[0]).id
          : 'No team yet.';
        return user.teamName;
      }),
    [users]
  );
  const usersData: string[][] = useMemo(
    () =>
      users.map((user: any, index: number) => {
        return [
          index + 1,
          `${user.firstName} ${user.lastName}`,
          user.score,
          teamNames[index],
          user.telegram,
          user.discord,
          user.github,
          `${user.country},
          ${user.city}`,
          user.courses.map((course: any) => course.name).join(', '),
        ];
      }),
    [users, teamNames]
  );

  const mouseOverHandler = (event: MouseEvent<HTMLTableCellElement>) => {
    const target: any = event.target;
    if (target.scrollWidth !== target.clientWidth) {
      const style = {
        top: target.getBoundingClientRect().bottom,
        left: target.getBoundingClientRect().left - 5,
      };
      setShowPopup(true);
      setPopupElements(target.textContent.split(','));
      setPopupStyles(style);
      setTableItemCursor(true);
    }
  };

  const mouseLeaveHandler = (event: MouseEvent<HTMLTableCellElement>) => {
    const target: any = event.target;
    if (target.scrollWidth !== target.clientWidth) {
      setShowPopup(false);
      setPopupElements([]);
      setPopupStyles(null);
      setTableItemCursor(false);
    }
  };

  return (
    <StyledTableBody>
      {usersData.map((user: any, index: number) => (
        <StyledTableRow key={`TableRowKey-${index}`}>
          {user.map((item: 'string', index: number) => (
            <StyledTableItem
              className={`TableItem--${index}`}
              key={`TableItemKey-${index}`}
              onMouseOver={mouseOverHandler}
              onMouseLeave={mouseLeaveHandler}
              changedTableItemCursor={changedTableItemCursor}
            >
              {item}
            </StyledTableItem>
          ))}
        </StyledTableRow>
      ))}
    </StyledTableBody>
  );
};

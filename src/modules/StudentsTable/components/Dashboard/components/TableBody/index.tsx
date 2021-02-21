import React, { FC, useMemo, ReactText } from 'react';
import { useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { StyledTableBody } from './styled';
import './styles.css';
import { User, Course, Team } from 'types';
import { USERS_PER_PAGE } from 'appConstants';
import { TableRow } from './components/TableRow';
import { selectCurrCourse } from 'modules/LoginPage/selectors';

type TableBodyProps = {
  users: User[];
  page: number;
};

export const TableBody: FC<TableBodyProps> = ({ users, page }) => {
  const currCourse = useSelector(selectCurrCourse);

  const usersData: Array<string[] | ReactText[]> = useMemo(
    () =>
      users.map((user: User, index: number) => {
        return [
          `${index + 1 + page * USERS_PER_PAGE}`,
          `${user.firstName} ${user.lastName || null}`,
          user.score,
          (user.teams as Team[]).find(
            (team: Team) => team.courseId === currCourse.id
          )
            ? `${
                (user.teams as Team[]).find(
                  (team: Team) => team.courseId === currCourse.id
                )?.number
              }`
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
    [users, page, currCourse.id]
  );

  return (
    <StyledTableBody>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemSize={64}
            itemCount={usersData.length}
            itemData={usersData}
            width={width}
          >
            {TableRow}
          </List>
        )}
      </AutoSizer>
    </StyledTableBody>
  );
};

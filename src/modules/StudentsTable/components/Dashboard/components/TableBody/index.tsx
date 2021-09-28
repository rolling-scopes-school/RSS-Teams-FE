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
import { useTranslation } from 'react-i18next';

type TableBodyProps = {
  users: User[];
  page: number;
};

export const TableBody: FC<TableBodyProps> = ({ users, page }) => {
  const currCourse = useSelector(selectCurrCourse);
  const { t } = useTranslation();

  const usersData: Array<string[] | ReactText[]> = useMemo(
    () =>
      users.map((user: User, index: number) => {
        const userOrder = index + 1 + page * USERS_PER_PAGE;
        const currentCourseTeam = user.teams.find((team: Team) => team.courseId === currCourse.id);
        return [
          `${userOrder}`,
          `${user.firstName} ${user.lastName || null}`,
          user.score || `1000`,
          currentCourseTeam ? `${currentCourseTeam.number}` : `-`,
          user.role ? `${t(user.role)}` : `-`,
          user.telegram || `-`,
          user.discord || `-`,
          user.github || `-`,
          `${user.country},
          ${user.city}`,
          user.courses.length ? user.courses.map((course: Course) => course.name).join(', ') : `-`,
        ];
      }),
    [users, page, currCourse.id, t]
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

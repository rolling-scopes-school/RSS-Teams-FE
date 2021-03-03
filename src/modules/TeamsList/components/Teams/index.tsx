import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { TeamsHeader, MyTeam, TeamItem } from './components';
import { Team, TeamList } from 'types';
import { Button } from 'typography';
import { TableTitle } from 'modules/StudentsTable/styled';
import { TeamsTitleWrapper } from 'modules/TeamsList/styled';
import { useTranslation } from 'react-i18next';
import { ACTIVE_MODAL_SORT_STUDENTS } from 'appConstants';

type TeamsProps = {
  teams: TeamList;
  myTeam?: Team;
  userId: string;
  isAdmin: boolean;
};

export const Teams: FC<TeamsProps> = ({ teams, myTeam, userId, isAdmin }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onClickSortStudents = () =>
    dispatch({ type: ACTIVE_MODAL_SORT_STUDENTS, payload: true });
  return (
    <>
      <TeamsTitleWrapper>
        <TableTitle>{t('Teams')}</TableTitle>
        {isAdmin && (
          <Button onClick={onClickSortStudents}>{t('Sort students')}</Button>
        )}
      </TeamsTitleWrapper>
      {myTeam ? <MyTeam team={myTeam} userId={userId} /> : <TeamsHeader />}
      {teams.count !== 0 &&
        teams.results.map((team) => (
          <TeamItem
            key={`team-${team.number}}`}
            name={`${t('Team')} ${team.number}`}
            countMember={team.members.length}
            members={team.members}
          />
        ))}
    </>
  );
};

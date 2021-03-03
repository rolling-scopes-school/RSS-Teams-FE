import React, { FC } from 'react';

import { TeamsHeader } from './components';
import { MyTeam } from './components';
import { Team, TeamList } from 'types';
import { TeamItem } from './components';
import { TableTitle } from 'modules/StudentsTable/styled';
import { Button } from 'typography';
import { TeamsTitleWrapper } from 'modules/TeamsList/styled';
import { useTranslation } from 'react-i18next';

type TeamsProps = {
  teams: TeamList;
  myTeam?: Team;
  userId: string;
  isAdmin: boolean;
  onClickSortStudents: () => void;
};

export const Teams: FC<TeamsProps> = ({
  teams,
  myTeam,
  userId,
  isAdmin,
  onClickSortStudents,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <TeamsTitleWrapper>
        <TableTitle>{t('Teams')}</TableTitle>
        {isAdmin && (
          <Button onClick={onClickSortStudents}>{t('SORT STUDENTS')}</Button>
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

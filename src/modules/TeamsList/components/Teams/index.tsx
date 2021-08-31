import React, { FC } from 'react';

import { TeamsHeader, MyTeam, TeamItem } from './components';
import { Team, TeamList } from 'types';
import { TableTitle } from 'modules/StudentsTable/styled';
import { TeamsTitleWrapper } from 'modules/TeamsList/styled';
import { useTranslation } from 'react-i18next';

type TeamsProps = {
  teams: TeamList;
  myTeam?: Team;
  userId: string;
};

export const Teams: FC<TeamsProps> = ({ teams, myTeam, userId }) => {
  const { t } = useTranslation();
  return (
    <>
      <TeamsTitleWrapper>
        <TableTitle>{t('Teams')}</TableTitle>
      </TeamsTitleWrapper>
      {myTeam ? <MyTeam team={myTeam} userId={userId} /> : <TeamsHeader />}
      {!!teams.count &&
        teams.results.map((team) => (
          <TeamItem
            key={team.id}
            name={`${t('Team')} ${team.number}`}
            countMember={team.members.length}
            members={team.members}
          />
        ))}
    </>
  );
};

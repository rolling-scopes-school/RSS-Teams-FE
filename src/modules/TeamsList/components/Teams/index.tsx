import React, { FC } from 'react';
import { PageTitle } from 'typography';

import { TeamsHeader } from './components/TeamsHeader';
import { MyTeam } from './components/MyTeam';
import { Team, TeamList } from 'types';
import { TeamItem } from './components/TeamItem';

type TeamsProps = {
  teams: TeamList;
  title?: string;
  myTeam?: Team;
  userId: string;
};

export const Teams: FC<TeamsProps> = ({ title, teams, myTeam, userId }) => (
  <>
    <PageTitle>{title || 'Teams'}</PageTitle>
    {myTeam ? <MyTeam team={myTeam} userId={userId} /> : <TeamsHeader />}
    {teams.count &&
      teams.results.map((team, index) => (
        <TeamItem
          key={index}
          name={`Team ${team.number}`}
          countMember={team.members.length}
          members={team.members}
        />
      ))}
  </>
);

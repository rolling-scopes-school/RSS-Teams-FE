import React, { FC } from 'react';
import { PageTitle } from 'typography';

import { TeamsHeader } from './components/TeamsHeader/TeamsHeader';
import { MyTeam } from './components/MyTeam/MyTeam';
import { Team, TeamList } from 'types';
import { TeamItem } from './components/TeamItem/TeamItem';

type TeamsProps = {
  teams: TeamList;
  title?: string;
  myTeam?: Team;
};

export const Teams: FC<TeamsProps> = ({ title, teams, myTeam }) => {
  const teamsList: React.ReactNode = teams.results.map((team, index) => {
    return (
      <TeamItem
        key={index}
        name={`Team ${team.number}`}
        countMember={team.members.length}
        members={team.members}
      />
    );
  });

  return (
    <>
      <PageTitle>{title || 'Teams'}</PageTitle>
      {myTeam ? <MyTeam team={myTeam} /> : <TeamsHeader />}
      {teams.count ? teamsList : null}
    </>
  );
};

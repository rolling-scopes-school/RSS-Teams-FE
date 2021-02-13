import React, { FC } from 'react';
import { PageTitle } from 'typography';

import { TeamsHeader } from './components/TeamsHeader/TeamsHeader';
import { MyTeam } from './components/MyTeam/MyTeam';
import { Team, TeamList } from 'types';

type TeamsProps = {
  teams: TeamList;
  title?: string;
  myTeam?: Team;
};

export const Teams: FC<TeamsProps> = ({ title, teams, myTeam }) => {
  console.log('teams', teams);

  return (
    <>
      <PageTitle>{title || 'Teams'}</PageTitle>
      {myTeam ? <MyTeam team={myTeam} /> : <TeamsHeader />}
    </>
  );
};

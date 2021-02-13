import React, { FC } from 'react';
import { PageTitle } from 'typography';

import { TeamsHeader } from './components/TeamsHeader/TeamsHeader';
import { MyTeam } from './components/MyTeam/MyTeam';
import { Team } from 'types';

type TeamsProps = {
  teams: Team[];
  title?: string;
};

export const Teams: FC<TeamsProps> = ({ title, teams }) => {
  console.log('teams', teams);
  return (
    <>
      <PageTitle>{title || 'Teams'}</PageTitle>
      <TeamsHeader />
      <MyTeam team={teams[0]} />
    </>
  );
};

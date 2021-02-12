import React, { FC } from 'react';
import { PageTitle } from '../../../../typography';
// import { Team } from 'types';

import { TeamsHeader } from './components/TeamsHeader/TeamsHeader';

type TeamsProps = {
  title: string;
  teams: any;
};

export const Teams: FC<TeamsProps> = (props) => {
  console.log('teams', props.teams);
  return (
    <>
      <PageTitle>{props.title}</PageTitle>
      <TeamsHeader />
    </>
  );
};

import React, { FC } from 'react';

import { TeamsHeader } from './components';
import { MyTeam } from './components';
import { Team, TeamList } from 'types';
import { TeamItem } from './components';
import { TableTitle } from 'modules/StudentsTable/styled';
import { Button } from 'typography';
import { TeamsTitleWrapper } from 'modules/TeamsList/styled';

type TeamsProps = {
  teams: TeamList;
  title?: string;
  myTeam?: Team;
  userId: string;
  isAdmin: boolean;
};

export const Teams: FC<TeamsProps> = ({
  title = 'Teams',
  teams,
  myTeam,
  userId,
  isAdmin,
}) => (
  <>
    <TeamsTitleWrapper>
      <TableTitle>{title}</TableTitle>
      {isAdmin ? <Button>SORT STUDENTS</Button> : null}
    </TeamsTitleWrapper>
    {myTeam ? <MyTeam team={myTeam} userId={userId} /> : <TeamsHeader />}
    {teams.count !== 0 &&
      teams.results.map((team) => (
        <TeamItem
          key={`team-${team.number}}`}
          name={`Team ${team.number}`}
          countMember={team.members.length}
          members={team.members}
        />
      ))}
  </>
);

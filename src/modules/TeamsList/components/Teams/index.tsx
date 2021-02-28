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
}) => (
  <>
    <TeamsTitleWrapper>
      <TableTitle>Teams</TableTitle>
      {isAdmin && <Button onClick={onClickSortStudents}>SORT STUDENTS</Button>}
    </TeamsTitleWrapper>
    {myTeam ? <MyTeam team={myTeam} userId={userId} /> : <TeamsHeader />}
    {!!teams.count &&
      teams.results.map((team) => (
        <TeamItem
          key={team.id}
          name={`Team ${team.number}`}
          countMember={team.members.length}
          members={team.members}
        />
      ))}
  </>
);

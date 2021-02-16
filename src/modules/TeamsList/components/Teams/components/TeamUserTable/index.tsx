import React, { FC } from 'react';
import { StyledTeamUserTable } from './styled';
import { User } from 'types';
import { TableRow } from './components/TableRow';
import { TABLE_TEAMS_HEADERS } from 'appConstants';

type TeamUserTableProps = {
  members?: User[];
  isMyTeam?: boolean;
  userId?: string;
};

export const TeamUserTable: FC<TeamUserTableProps> = ({
  members,
  isMyTeam,
  userId,
}) => {
  return (
    <StyledTeamUserTable>
      <thead>
        <tr>
          {TABLE_TEAMS_HEADERS.map((columnName: string, index: number) => {
            return !isMyTeam && columnName === 'Action' ? null : (
              <th key={index}>{columnName}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {members &&
          members.map((member: User, index: number) => {
            return (
              <TableRow
                key={index}
                count={index + 1}
                member={member}
                isMyTeam={isMyTeam}
                userId={userId}
              />
            );
          })}
      </tbody>
    </StyledTeamUserTable>
  );
};

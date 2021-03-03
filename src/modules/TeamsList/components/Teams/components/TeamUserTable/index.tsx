import React, { FC } from 'react';
import { StyledTeamUserTable } from './styled';
import { User } from 'types';
import { TableRow } from './components/TableRow';
import { TABLE_TEAMS_HEADERS } from 'appConstants';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <StyledTeamUserTable>
      <thead>
        <tr>
          {TABLE_TEAMS_HEADERS.map((columnName: string) => {
            return !isMyTeam && columnName === 'Action' ? null : (
              <th key={columnName}>{t(columnName)}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {members &&
          members.map((member: User, index: number) => {
            return (
              <TableRow
                key={member.id}
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

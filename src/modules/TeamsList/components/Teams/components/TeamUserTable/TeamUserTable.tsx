import React, { FC } from 'react';
import { StyledTeamUserTable } from './styled';
import { User } from 'types';
import { ExpelButton } from './components/ExpelButton/ExpelButton';

const tableHeaders: string[] = [
  '№',
  'First / Last Name',
  'Score',
  'Telegram',
  'Discord',
  'Github',
  'Location',
  'Action',
];

type TeamUserTableProps = {
  members: User[] | undefined;
  isMyTeam?: boolean;
};

const formatSocialLinks = (link: string | null): string => {
  if (link) {
    return '@' + link.replace('@', '');
  }
  return '';
};

const getTableRow = (member: User, index: number, isMyTeam?: boolean) => {
  console.log('isMyTeam', isMyTeam);
  return (
    <tr key={member.discord + index}>
      <td>{index + 1}</td>
      <td>{`${member.firstName} ${member.lastName}`}</td>
      <td>{member.score}</td>
      <td>{formatSocialLinks(member.telegram)}</td>
      <td>{formatSocialLinks(member.discord)}</td>
      <td>{formatSocialLinks(member.github)}</td>
      <td>{`${member.city}, ${member.country}`}</td>
      {isMyTeam ? (
        <td>
          {/*TODO: Сделать проверку на текущего пользователя*/}
          <ExpelButton />
        </td>
      ) : null}
    </tr>
  );
};

const getHeaderCells = (colName: string[], isMyTeam: boolean | undefined) => {
  const headerRow = colName.map((columnName: string, index: number) => {
    return !isMyTeam && columnName === 'Action' ? null : (
      <th key={index}>{columnName}</th>
    );
  });
  return <tr>{headerRow}</tr>;
};

export const TeamUserTable: FC<TeamUserTableProps> = ({
  members,
  isMyTeam,
}) => {
  const rows = members?.map((member: User, index: number) =>
    getTableRow(member, index, isMyTeam)
  );

  return (
    <StyledTeamUserTable>
      <thead>{getHeaderCells(tableHeaders, isMyTeam)}</thead>
      <tbody>
        {/*TODO: Удалить множественные строки */}
        {rows}
        {rows}
        {rows}
        {rows}
      </tbody>
    </StyledTeamUserTable>
  );
};

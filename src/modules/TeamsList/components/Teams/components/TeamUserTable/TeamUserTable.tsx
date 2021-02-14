import React, { FC } from 'react';
import { StyledTeamUserTable } from './styled';
import { User } from 'types';

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
};

const getTableRow = (member: User, index: number) => {
  return (
    <tr key={member.discord + index}>
      <td>{index + 1}</td>
      <td>{`${member.firstName} ${member.lastName}`}</td>
      <td>{member.score}</td>
      <td>@{member.telegram?.replace('@', '')}</td>
      <td>@{member.discord?.replace('@', '')}</td>
      <td>@{member.github?.replace('@', '')}</td>
      <td>{`${member.city}, ${member.country}`}</td>
      <td>x</td>
    </tr>
  );
};

const getHeaderCells = (colName: string[]) => {
  const headerRow = colName.map((columnName: string, index: number) => (
    <th key={index}>{columnName}</th>
  ));
  return <tr>{headerRow}</tr>;
};

export const TeamUserTable: FC<TeamUserTableProps> = ({ members }) => {
  const rows = members?.map((member: User, index: number) =>
    getTableRow(member, index)
  );

  return (
    <StyledTeamUserTable>
      <thead>{getHeaderCells(tableHeaders)}</thead>
      <tbody>
        {rows}
        {rows}
        {rows}
        {rows}
      </tbody>
    </StyledTeamUserTable>
  );
};

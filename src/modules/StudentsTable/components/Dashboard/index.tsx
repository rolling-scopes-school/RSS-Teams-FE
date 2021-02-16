import React, { FC } from 'react';
import { TableBody, TableHead } from './components';
import { StyledTable } from './styled';
import { User } from 'types';

const tableHeaders: string[] = [
  '№',
  'First / Last Name',
  'Score',
  'Team Number',
  'Telegram',
  'Discord',
  'Github',
  'Location',
  'Courses',
];

type DashboardProps = {
  users: User[];
  page: number;
};

export const Dashboard: FC<DashboardProps> = ({ users, page }) => {
  return (
    <StyledTable>
      <TableHead tableHeaders={tableHeaders} />
      <TableBody users={users} page={page} />
    </StyledTable>
  );
};

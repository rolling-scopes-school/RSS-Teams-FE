import React, { FC } from 'react';
import { TableBody, TableHead } from './components';
import { StyledTable } from './styled';
import { User } from 'types';

type DashboardProps = {
  users: User[];
  page: number;
};

export const Dashboard: FC<DashboardProps> = ({ users, page }) => {
  return (
    <StyledTable>
      <TableHead />
      <TableBody {...{ users, page }} />
    </StyledTable>
  );
};

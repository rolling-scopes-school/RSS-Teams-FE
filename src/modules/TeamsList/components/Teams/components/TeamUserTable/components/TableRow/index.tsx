import React, { FC } from 'react';
import { User } from 'types';
import { TableCell } from './components';
import { ExpelButton } from './components';

type TableRowProps = {
  member: User;
  count: number;
  isMyTeam?: boolean;
  userId?: string;
};

export const TableRow: FC<TableRowProps> = ({
  member,
  count,
  isMyTeam,
  userId,
}) => {
  const {
    firstName,
    lastName,
    score,
    telegram,
    discord,
    github,
    country,
    city,
    id,
  } = member;
  return (
    <tr>
      <TableCell value={count.toString(10)} />
      <TableCell value={`${firstName} ${lastName}`} />
      <TableCell value={score} />
      <TableCell value={telegram} isSocialLink={true} />
      <TableCell value={discord} isSocialLink={true} />
      <TableCell value={github} isSocialLink={true} />
      <TableCell value={`${city}, ${country}`} />
      {isMyTeam && <TableCell value={id !== userId && <ExpelButton />} />}
    </tr>
  );
};

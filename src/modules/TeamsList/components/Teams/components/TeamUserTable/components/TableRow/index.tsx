import React, { FC } from 'react';
import { ExpelButton } from '../ExpelButton';
import { User } from '../../../../../../../../types';

type TableRowProps = {
  member: User;
  count: number;
  isMyTeam?: boolean;
  userId?: string;
};

const formatSocialLinks = (link: string | null): string =>
  link ? '@' + link.replace('@', '') : '';

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
      <td>{count}</td>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{score}</td>
      <td>{formatSocialLinks(telegram)}</td>
      <td>{formatSocialLinks(discord)}</td>
      <td>{formatSocialLinks(github)}</td>
      <td>{`${city}, ${country}`}</td>
      {isMyTeam && <td>{id !== userId && <ExpelButton />}</td>}
    </tr>
  );
};

import React, { FC } from 'react';

type TTableCell = {
  value: any;
  isSocialLink?: boolean;
};

const formatSocialLinks = (link: string | null): string =>
  link ? '@' + link.replace('@', '') : '';

export const TableCell: FC<TTableCell> = ({ value, isSocialLink = false }) => {
  return <td>{isSocialLink ? formatSocialLinks(value) : value}</td>;
};

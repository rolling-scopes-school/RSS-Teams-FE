import React, { FC } from 'react';
// import { TablePopup } from 'components/TablePopup';

type TTableCell = {
  value: any;
  hasPopup?: boolean;
  isSocialLink?: boolean;
};

const formatSocialLinks = (link: string | null): string =>
  link ? '@' + link.replace('@', '') : '';

export const TableCell: FC<TTableCell> = ({ value, isSocialLink }) => {
  return <td>{isSocialLink ? formatSocialLinks(value) : value}</td>;
};

TableCell.defaultProps = {
  hasPopup: false,
  isSocialLink: false,
};

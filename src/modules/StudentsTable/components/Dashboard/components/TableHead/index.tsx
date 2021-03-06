import React, { FC } from 'react';
import { TABLE_HEADERS } from 'appConstants';
import {
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableHeader,
} from './styled';
import { useTranslation } from 'react-i18next';

export const TableHead: FC = () => {
  const { t } = useTranslation();
  return (
    <StyledTableHead>
      <StyledTableHeadRow>
        {TABLE_HEADERS.map((tableHeader: string, index: number) => (
          <StyledTableHeader
            className={`TableItem--${index}`}
            key={tableHeader}
          >
            {t(tableHeader)}
          </StyledTableHeader>
        ))}
      </StyledTableHeadRow>
    </StyledTableHead>
  );
};

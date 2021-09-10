import React, { FC } from 'react';
import { TeamsTitleWrapper } from 'modules/TeamsList/styled';
import { useTranslation } from 'react-i18next';
import { ContentPageWrapper } from 'typography';
import { StudentTableWrapper, TableTitle } from 'modules/StudentsTable/styled';
import { AdminPageWrapper } from './components';

export const AdminPage: FC = () => {
  const { t } = useTranslation();

  return (
    <ContentPageWrapper>
      <StudentTableWrapper>
        <TeamsTitleWrapper>
          <TableTitle>{t('Admin page')}</TableTitle>
        </TeamsTitleWrapper>
        <AdminPageWrapper />
      </StudentTableWrapper>
    </ContentPageWrapper>
  );
};

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ContentPageWrapper, PageTitle } from 'typography';
import { NotFoundPageWrapper } from './styled';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  return (
    <ContentPageWrapper>
      <NotFoundPageWrapper>
        <PageTitle>{t('Not found!')}</PageTitle>
      </NotFoundPageWrapper>
    </ContentPageWrapper>
  );
};

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t('Not found!')}</p>
    </div>
  );
};

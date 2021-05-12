import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StepBlockWrapper, StepBlockText } from './styled';
import { PageTitle } from 'typography';

type StepBlockProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
};

export const StepBlock: FC<StepBlockProps> = ({ title, subtitle, imageSrc, altText }) => {
  const { t } = useTranslation();
  return (
    <StepBlockWrapper>
      <PageTitle>{t(title)}</PageTitle>
      <StepBlockText>{t(subtitle)}</StepBlockText>
      <img src={imageSrc} alt={altText} className="StepBlockImage" />
    </StepBlockWrapper>
  );
};

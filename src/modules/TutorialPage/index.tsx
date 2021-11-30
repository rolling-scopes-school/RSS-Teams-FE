import React, { FC, useState } from 'react';
import { TutorialPageWrapper, StyledTitle, SwitchWrapper } from './styled';
import { Switch, TutorialForStudent, TutorialForMentor } from './components';
import { MAIN1_COLOR } from 'appConstants/colors';
import { ContentPageWrapper } from 'typography';
import { useTranslation } from 'react-i18next';

export const TutorialPage: FC = () => {
  const [isToggled, setIsToggled] = useState(true);
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsToggled(e.target.checked);
  };

  return (
    <ContentPageWrapper>
      <TutorialPageWrapper>
        <SwitchWrapper>
          <StyledTitle color={MAIN1_COLOR} fontSize="21px">
            {t('Tutorial for')}
          </StyledTitle>
          <Switch id="tutorial" toggled={isToggled} onChange={handleChange} />
        </SwitchWrapper>
        {isToggled ? <TutorialForStudent /> : <TutorialForMentor />}
      </TutorialPageWrapper>
    </ContentPageWrapper>
  );
};

import React, { FC, useCallback } from 'react';
import { TutorialPageWrapper } from './styled';
import editProfileExampleEN from 'assets/images/editProfileExampleEN.png';
import editProfileExampleRU from 'assets/images/editProfileExampleRU.png';
import teamActionsExampleEN from 'assets/images/teamActionsExampleEN.png';
import teamActionsExampleRU from 'assets/images/teamActionsExampleRU.png';
import { NoteBlock, StepBlock } from './components';
import { tutorialNoteInfo } from './tutorialPageInfo';
import { useSelector } from 'react-redux';
import { selectCurrLanguage } from 'modules/LoginPage/selectors';
import { ContentPageWrapper } from 'typography';
import { useTranslation } from 'react-i18next';

export const TutorialPage: FC = () => {
  const currentLang = useSelector(selectCurrLanguage);
  const { t } = useTranslation();
  const TUTORIAL_PAGE_NOTES_INFO = useCallback(
    () => tutorialNoteInfo(currentLang, t),
    [currentLang, t]
  );

  return (
    <ContentPageWrapper>
      <TutorialPageWrapper>
        <StepBlock
          title="Step 1"
          subtitle="The app will suggest"
          imageSrc={
            currentLang === 'en' ? editProfileExampleEN : editProfileExampleRU
          }
          altText="Profile example"
        />
        <NoteBlock
          listItems={['The “score” field should be filled in with your score']}
          isNote="Note"
        />
        <StepBlock
          title="Step 2"
          subtitle="On the teams page you will see two available buttons"
          imageSrc={
            currentLang === 'en' ? teamActionsExampleEN : teamActionsExampleRU
          }
          altText="Team actions example"
        />
        {TUTORIAL_PAGE_NOTES_INFO().map(
          ({ title, subtitle, listItems, isNote, children }, index) => (
            <NoteBlock {...{ title, subtitle, listItems, isNote }} key={index}>
              {children}
            </NoteBlock>
          )
        )}
      </TutorialPageWrapper>
    </ContentPageWrapper>
  );
};

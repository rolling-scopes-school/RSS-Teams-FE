import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectCurrLanguage } from 'modules/LoginPage/selectors';
import { tutorialPageInfo } from './tutorialPageInfo';
import { NoteBlock } from '../NoteBlock';
import { StepBlock } from '../StepBlock';
import editProfileExampleEN from 'assets/images/editProfileExampleEN.png';
import editProfileExampleRU from 'assets/images/editProfileExampleRU.png';
import teamActionsExampleEN from 'assets/images/teamActionsExampleEN.png';
import teamActionsExampleRU from 'assets/images/teamActionsExampleRU.png';

export const TutorialForStudent: FC = () => {
  const currentLang = useSelector(selectCurrLanguage);
  const { t } = useTranslation();
  const TUTORIAL_PAGE_NOTES_INFO = useCallback(
    () => tutorialPageInfo(currentLang, t),
    [currentLang, t]
  );

  return (
    <>
      <StepBlock
        title="Step 1"
        subtitle="The app will suggest"
        imageSrc={currentLang === 'en' ? editProfileExampleEN : editProfileExampleRU}
        altText="Profile example"
      />
      <NoteBlock
        listItems={['The “score” field should be filled in with your score']}
        isNote="Note"
      />
      <StepBlock
        title="Step 2"
        subtitle="On the teams page you will see two available buttons"
        imageSrc={currentLang === 'en' ? teamActionsExampleEN : teamActionsExampleRU}
        altText="Team actions example"
      />
      {TUTORIAL_PAGE_NOTES_INFO().map(({ title, subtitle, listItems, isNote, children }) => (
        <NoteBlock
          {...{ title, subtitle, listItems, isNote }}
          key={listItems ? JSON.stringify(listItems) : title}
        >
          {children}
        </NoteBlock>
      ))}
    </>
  );
};

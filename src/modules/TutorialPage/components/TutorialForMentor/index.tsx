import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrLanguage } from 'modules/LoginPage/selectors';
import { NoteBlock } from '../NoteBlock';
import { StepBlock } from '../StepBlock';
import { tutorialPageInfo } from './tutorialPageInfo';
import editProfileMentorEN from 'assets/images/editProfileMentorEN.png';
import editProfileMentorRU from 'assets/images/editProfileMentorRU.png';
import mentorActionsExampleEN from 'assets/images/mentorActionsExampleEN.png';
import mentorActionsExampleRU from 'assets/images/mentorActionsExampleRU.png';

export const TutorialForMentor: FC = () => {
  const currentLang = useSelector(selectCurrLanguage);
  const tutorialPageNotesInfo = useCallback(() => tutorialPageInfo(currentLang), [currentLang]);

  return (
    <>
      <StepBlock
        title="Step 1"
        subtitle="The app will suggest"
        imageSrc={currentLang === 'en' ? editProfileMentorEN : editProfileMentorRU}
        altText="Profile example"
      />
      <NoteBlock listItems={['Tutorial for Mentor note 1']} isNote="Note" />
      <StepBlock
        title="Step 2 for Mentor"
        subtitle="Step 2 description"
        imageSrc={currentLang === 'en' ? mentorActionsExampleEN : mentorActionsExampleRU}
        altText="Team actions example"
      />
      {tutorialPageNotesInfo().map(({ title, subtitle, listItems, isNote, children }) => (
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

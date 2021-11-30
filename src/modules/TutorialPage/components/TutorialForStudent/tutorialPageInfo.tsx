import { TFunction } from 'react-i18next';
import myTeamExampleEN from 'assets/images/myTeamExampleEN.png';
import myTeamExampleRU from 'assets/images/myTeamExampleRU.png';

export const tutorialPageInfo = (currentLang: string, t: TFunction<'translation'>) => {
  const TUTORIAL_PAGE_NOTES_INFO = [
    {
      title: 'Create team',
      subtitle: 'The team creation process is taken place in three steps',
      listItems: [
        'Press the “Create team” button',
        'Provide a link to a team chat',
        'Specify password',
      ],
      children: <p>{t('The only person who creates the team is Team Lead')}</p>,
    },
    {
      title: 'Join team',
      subtitle: 'To join an existing team',
      listItems: [`Press the “Join team” button`, `Specify the password`],
    },
    {
      listItems: [
        `If you have not found a team`,
        `If the team has fewer members than is required for the task`,
      ],
      isNote: 'Note',
    },
    {
      title: 'You will see the following after joining the team',
      children: (
        <img
          src={currentLang === 'en' ? myTeamExampleEN : myTeamExampleRU}
          alt="My team example"
          className="StepBlockImage"
        />
      ),
    },
    {
      title: 'Leave team',
      subtitle: 'To leave the team',
    },
  ];
  return TUTORIAL_PAGE_NOTES_INFO;
};

import myTeamExampleEN from 'assets/images/myTeamExampleEN.png';
import myTeamExampleRU from 'assets/images/myTeamExampleRU.png';

export const tutorialPageInfo = (currentLang: string) => {
  const TUTORIAL_PAGE_NOTES_INFO = [
    {
      title: 'Join team',
      subtitle: 'To join an existing team',
      listItems: [`Press the “Join as a mentor” button`, `Specify the password`],
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

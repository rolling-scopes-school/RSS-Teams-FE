import { Button, InvertedButton, ButtonsBlock } from 'typography';
import { setIsTourOpen } from 'modules/LoginPage/loginPageReducer';
import { LINK_TO_REPO } from 'appConstants';

export const tourConfig = (history: any, dispatch: any) => [
  {
    content: ({ goTo }: { goTo: (step: number) => void }) => (
      <div>
        <p>Welcome to RSS Teams!</p>
        <ButtonsBlock>
          <InvertedButton onClick={() => goTo(9)}>Skip</InvertedButton>
          <Button onClick={() => goTo(1)}>Next!</Button>
        </ButtonsBlock>
      </div>
    ),
    action: () => history.push('/'),
  },
  {
    selector: '.secondStep',
    content: `You can create new team - you only need the link to your future team chat.`,
    action: () => history.push('/'),
  },
  {
    selector: '.thirdStep',
    content: `Or join exited team! You should have the password from your team.`,
    action: () => history.push('/'),
  },
  {
    selector: '.fourthStep',
    content: `You can always leave the course.`,
    action: () => history.push('/'),
  },
  {
    content: `On Teams page you can see other teams.`,
    action: () => history.push('/'),
  },
  {
    selector: '.sixthStep',
    content: `With dropdown you can switch the course in case if you have several courses.`,
  },
  {
    selector: '.seventhStep',
    content: `On Dashboard page you can check/find another students.`,
    action: () => history.push('/studentsTable'),
  },
  {
    selector: '.eighthStep',
    content: `With using filter you can make the search for students easier.`,
    position: 'bottom',
    action: () => history.push('/studentsTable'),
  },
  {
    content: `On Edit profile page you can add/remove course or edit your profile.`,
    action: () => history.push('/editProfile'),
  },
  {
    content: `If you forget something use Tutorial tab to remember.`,
    action: () => history.push('/tutorial'),
  },
  {
    content: () => (
      <div>
        <p>
          Support us by pressing a star in{' '}
          <a
            href={LINK_TO_REPO}
            className="linkToRepo"
            target="_blank"
            rel="noreferrer"
          >
            our repo
          </a>
          !
        </p>
        <ButtonsBlock>
          <Button onClick={() => dispatch(setIsTourOpen(false))}>
            Got it!
          </Button>
        </ButtonsBlock>
      </div>
    ),
    action: () => history.push('/'),
  },
];

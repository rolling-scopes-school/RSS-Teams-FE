import { Button, InvertedButton, ButtonsBlock } from 'typography';
import { setIsTourOpen } from 'modules/LoginPage/loginPageReducer';

export const tourConfig = (dispatch: (payload: any) => void) => [
  {
    content: ({ goTo }: { goTo: (step: number) => void }) => (
      <div>
        <p>Welcome to RSS Teams!</p>
        <ButtonsBlock>
          <InvertedButton onClick={() => dispatch(setIsTourOpen(false))}>
            Skip
          </InvertedButton>
          <Button onClick={() => goTo(1)}>Next!</Button>
        </ButtonsBlock>
      </div>
    ),
  },
  {
    selector: '.secondStep',
    content: `You can create new team - you need only link to your future team chat.`,
  },
  {
    selector: '.thirdStep',
    content: `Or join exited team! You should have the password from your team.`,
  },
  {
    selector: '.fourthStep',
    content: `You can always leave the course.`,
  },
];

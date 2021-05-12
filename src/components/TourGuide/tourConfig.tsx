import { Button, InvertedButton, ButtonsBlock } from 'typography';
import { setIsTourOpen } from 'modules/LoginPage/loginPageReducer';
import { LINK_TO_REPO } from 'appConstants';
import { LinkButton } from './styled';
import { Dispatch } from 'redux';
import { History, LocationState } from 'history';

export const tourConfig = (
  history: History<LocationState>,
  dispatch: Dispatch,
  t: (text: string) => string
) => [
  {
    content: ({ goTo }: { goTo: (step: number) => void }) => (
      <div>
        <p>{t('Welcome to RSS Teams')}</p>
        <ButtonsBlock>
          <InvertedButton onClick={() => goTo(9)}>{t('Skip')}</InvertedButton>
          <Button onClick={() => goTo(1)}>{t('Next')}</Button>
        </ButtonsBlock>
      </div>
    ),
    action: () => history.push('/'),
  },
  {
    selector: '.secondStep',
    content: t('You can create new team'),
    action: () => history.push('/'),
  },
  {
    selector: '.thirdStep',
    content: t('Or join existing team'),
    action: () => history.push('/'),
  },
  {
    selector: '.fourthStep',
    content: t('You can always leave the course'),
    action: () => history.push('/'),
  },
  {
    content: t('On Teams page you can see other teams'),
    action: () => history.push('/'),
  },
  {
    content: t('On Dashboard page'),
    action: () => history.push('/studentsTable'),
  },
  {
    selector: '.seventhStep',
    content: t('With filter usage'),
    position: 'bottom',
    action: () => history.push('/studentsTable'),
  },
  {
    selector: '.eighthStep',
    content: t('With dropdown you can switch the course'),
    position: 'bottom',
    action: () => history.push('/studentsTable'),
  },
  {
    content: t('On Edit profile page'),
    action: () => history.push('/editProfile'),
  },
  {
    content: t('If you forget something'),
    action: () => history.push('/tutorial'),
  },
  {
    content: () => (
      <div>
        <p>
          {t('Support us')}{' '}
          <a href={LINK_TO_REPO} className="linkToRepo" target="_blank" rel="noreferrer">
            {t('our repo')}
          </a>
          !
        </p>
        <ButtonsBlock>
          <LinkButton
            onClick={() => {
              dispatch(setIsTourOpen(false));
            }}
            href={LINK_TO_REPO}
            target="_blank"
            rel="noreferrer"
          >
            {t('Got it')}
          </LinkButton>
        </ButtonsBlock>
      </div>
    ),
    action: () => history.push('/'),
  },
];

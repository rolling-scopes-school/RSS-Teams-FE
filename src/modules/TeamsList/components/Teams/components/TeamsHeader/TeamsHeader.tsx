import React, { FC } from 'react';
import {
  StyledTeamHeader,
  StyledTeamHeaderRight,
  StyledTeamHeaderSubtitle,
  StyledTeamHeaderTitle,
  StyledButtonBlock,
  StyledTeamHeaderLeft,
  HeaderManPic,
} from './styled';
import { Button } from '../../../../../../typography';
import { DARK_TEXT_COLOR } from 'appConstants/colors';

export const TeamsHeader: FC = () => {
  return (
    <StyledTeamHeader>
      <StyledTeamHeaderLeft>
        <HeaderManPic />
      </StyledTeamHeaderLeft>
      <StyledTeamHeaderRight>
        <StyledTeamHeaderTitle>
          Become a member of the team!
        </StyledTeamHeaderTitle>
        <StyledTeamHeaderSubtitle>
          To become a member of the team you can create your own team or join
          team. If not, you will be added to the team automatically.
        </StyledTeamHeaderSubtitle>
        <StyledButtonBlock>
          <Button color={DARK_TEXT_COLOR}>Create team</Button>
          <Button color={DARK_TEXT_COLOR}>Join team</Button>
        </StyledButtonBlock>
      </StyledTeamHeaderRight>
    </StyledTeamHeader>
  );
};

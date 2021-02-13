import React, { FC } from 'react';
import {
  TeamsHeaderStyled,
  TeamsHeaderRightStyled,
  TeamsHeaderSubtitleStyled,
  TeamsHeaderTitleStyled,
  TeamHeaderLeftStyled,
  HeaderManPic,
} from './styled';
import { Button } from 'typography';
import { DARK_TEXT_COLOR, WHITE_COLOR } from 'appConstants/colors';
import { Team } from 'types';
import { MembersListToggle } from './components/MemberListToggle/MemberListToggle';
import { MyTeamInfoBlock } from './components/MyTeamInfoBlock/MyTeamInfoBlock';

type MyTeamProps = {
  team?: Team;
};

export const MyTeam: FC<MyTeamProps> = () => {
  return (
    <TeamsHeaderStyled>
      <TeamsHeaderRightStyled>
        <TeamsHeaderTitleStyled>
          <p>My team </p>
        </TeamsHeaderTitleStyled>
        <TeamsHeaderSubtitleStyled>
          <MyTeamInfoBlock
            title={'Invitation password'}
            value={'q4w2t4'}
            icon={'info'}
          />
          <MyTeamInfoBlock
            title={'Link to group'}
            value={'t.me/ololo123'}
            icon={'edit'}
          />
        </TeamsHeaderSubtitleStyled>
      </TeamsHeaderRightStyled>
      <TeamHeaderLeftStyled>
        <HeaderManPic />
        <Button bgc={WHITE_COLOR} color={DARK_TEXT_COLOR}>
          Leave team
        </Button>
        <MembersListToggle open={false} countMembers={3} />
      </TeamHeaderLeftStyled>
    </TeamsHeaderStyled>
  );
};

import React, { FC, useState } from 'react';
import {
  MyTeamsHeader,
  MyTeamsHeaderRight,
  MyTeamHeaderLeft,
  HeaderDecor,
  MyTeamInfoBlockWrapper,
  MyTeamHeaderTitle,
} from './styled';
import { Button } from 'typography';
import { DARK_TEXT_COLOR, WHITE_COLOR } from 'appConstants/colors';
import { Team } from 'types';
import { MembersListToggle } from '../MemberListToggle/MemberListToggle';
import { MyTeamInfoBlock } from './components/MyTeamInfoBlock/MyTeamInfoBlock';
import { TeamUserTable } from '../TeamUserTable/TeamUserTable';

type MyTeamProps = {
  team?: Team;
};

export const MyTeam: FC<MyTeamProps> = ({ team }) => {
  const [isOpen, setToggle] = useState(false);

  const toggleListHandler = () => {
    setToggle(!isOpen);
  };

  const countMember: number | undefined = team?.members.length;
  return (
    <>
      <MyTeamsHeader>
        <MyTeamsHeaderRight>
          <MyTeamHeaderTitle>My team - Team {team?.number}</MyTeamHeaderTitle>
          <MyTeamInfoBlockWrapper>
            <MyTeamInfoBlock
              title={'Invitation password'}
              value={team?.password}
              icon={'info'}
            />
            <MyTeamInfoBlock
              title={'Link to group'}
              value={team?.socialLink}
              icon={'edit'}
            />
          </MyTeamInfoBlockWrapper>
        </MyTeamsHeaderRight>
        <MyTeamHeaderLeft>
          <HeaderDecor />
          <Button bgc={WHITE_COLOR} color={DARK_TEXT_COLOR}>
            Leave team
          </Button>
          <MembersListToggle
            open={isOpen}
            countMembers={countMember}
            onToggleList={toggleListHandler}
          />
        </MyTeamHeaderLeft>
      </MyTeamsHeader>
      {isOpen ? <TeamUserTable members={team?.members} /> : null}
    </>
  );
};

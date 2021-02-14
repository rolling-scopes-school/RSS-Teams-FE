import React, { FC, useState } from 'react';
import { StyledMyTeam, HeaderDecor, TableWrapper } from './styled';
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
  const [isOpen, setOpenState] = useState(false);

  const toggleListHandler = () => {
    setOpenState(!isOpen);
  };

  const countMember: number | undefined = team?.members.length;
  return (
    <StyledMyTeam open={isOpen}>
      <div className={'myTeam__header'}>
        <h2 className={'myTeam__title'}>My team - Team {team?.number}</h2>
        <div className={'myTeam__info-wrapper'}>
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
        </div>
        <div className={'myTeam__button'}>
          <Button bgc={WHITE_COLOR} color={DARK_TEXT_COLOR}>
            Leave team
          </Button>
        </div>
        <div className={'myTeam__toggle'}>
          <MembersListToggle
            isOpen={isOpen}
            countMembers={countMember}
            onToggleList={toggleListHandler}
          />
        </div>
        <HeaderDecor />
      </div>
      <TableWrapper open={isOpen}>
        {isOpen ? (
          <TeamUserTable members={team?.members} isMyTeam={true} />
        ) : null}
      </TableWrapper>
    </StyledMyTeam>
  );
};

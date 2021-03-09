import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTIVE_MODAL_LEAVE, ACTIVE_MODAL_REMOVE_COURSE } from 'appConstants';

import { StyledMyTeam, HeaderDecor, TableWrapper } from './styled';
import { TeamButton } from 'typography';
import { DARK_TEXT_COLOR, WHITE_COLOR } from 'appConstants/colors';
import { Team } from 'types';
import { MembersListToggle } from '../MemberListToggle';
import { MyTeamInfoBlock } from './components/MyTeamInfoBlock';
import { TeamUserTable } from '../TeamUserTable';
import { useTranslation } from 'react-i18next';

type MyTeamProps = {
  team: Team;
  userId: string;
};

export const MyTeam: FC<MyTeamProps> = ({ team, userId }) => {
  const [isOpen, setOpenState] = useState(false);
  const { t } = useTranslation();

  const toggleListHandler = () => {
    setOpenState(!isOpen);
  };
  const dispatch = useDispatch();

  const leaveTeam = () => dispatch({ type: ACTIVE_MODAL_LEAVE, payload: true });
  const removeCourse = () =>
    dispatch({ type: ACTIVE_MODAL_REMOVE_COURSE, payload: true });

  const countMember = team?.members?.length;
  return (
    <StyledMyTeam open={isOpen}>
      <div className="myTeam__header">
        <h2 className="myTeam__title">
          {t('My team - Team')} {team.number}
        </h2>
        <div className="myTeam__info-wrapper">
          <MyTeamInfoBlock
            title="Invitation password"
            value={team.password}
            icon="info"
          />
          <MyTeamInfoBlock
            title="Link to group"
            value={team.socialLink}
            icon="edit"
          />
        </div>
        <div className="myTeam__leave">
          <TeamButton
            bgc={WHITE_COLOR}
            color={DARK_TEXT_COLOR}
            type="button"
            onClick={removeCourse}
          >
            {t('Leave course')}
          </TeamButton>
        </div>
        <div className="myTeam__button">
          <TeamButton
            bgc={WHITE_COLOR}
            color={DARK_TEXT_COLOR}
            type="button"
            onClick={leaveTeam}
          >
            {t('Leave team')}
          </TeamButton>
        </div>
        <div className="myTeam__toggle">
          <MembersListToggle
            isOpen={isOpen}
            countMembers={countMember}
            onToggleList={toggleListHandler}
          />
        </div>
        <HeaderDecor />
      </div>
      <TableWrapper open={isOpen}>
        {isOpen && (
          <TeamUserTable
            members={team.members}
            isMyTeam={true}
            userId={userId}
          />
        )}
      </TableWrapper>
    </StyledMyTeam>
  );
};

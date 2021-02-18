import React, { FC } from 'react';
import {
  TeamsHeaderStyled,
  TeamsHeaderRightStyled,
  TeamsHeaderSubtitleStyled,
  TeamsHeaderButtonsBlockStyled,
  TeamHeaderLeftStyled,
  HeaderManPic,
  TeamHeaderTitle,
} from './styled';
import { Button } from 'typography';
import { DARK_TEXT_COLOR, WHITE_COLOR } from 'appConstants/colors';
import { ACTIVE_MODAL_CREATE_TEAM, ACTIVE_MODAL_JOIN } from 'appConstants';
import { useDispatch } from 'react-redux';

export const TeamsHeader: FC = () => {
  const dispatch = useDispatch();
  return (
    <TeamsHeaderStyled>
      <TeamsHeaderRightStyled>
        <TeamHeaderTitle>Become a member of the team!</TeamHeaderTitle>
        <TeamsHeaderSubtitleStyled>
          To become a member of the team you can create your own team or join
          team. If not, you will be added to the team automatically.
        </TeamsHeaderSubtitleStyled>
        <TeamsHeaderButtonsBlockStyled>
          <Button
            bgc={WHITE_COLOR}
            color={DARK_TEXT_COLOR}
            type={'button'}
            onClick={() =>
              dispatch({ type: ACTIVE_MODAL_CREATE_TEAM, payload: true })
            }
          >
            Create team
          </Button>
          <Button
            bgc={WHITE_COLOR}
            color={DARK_TEXT_COLOR}
            type={'button'}
            onClick={() => dispatch({ type: ACTIVE_MODAL_JOIN, payload: true })}
          >
            Join team
          </Button>
        </TeamsHeaderButtonsBlockStyled>
      </TeamsHeaderRightStyled>
      <TeamHeaderLeftStyled>
        <HeaderManPic />
      </TeamHeaderLeftStyled>
    </TeamsHeaderStyled>
  );
};

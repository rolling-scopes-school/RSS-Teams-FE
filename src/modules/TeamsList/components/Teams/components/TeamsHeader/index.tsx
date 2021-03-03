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
import {
  ACTIVE_MODAL_CREATE_TEAM,
  ACTIVE_MODAL_JOIN,
  ACTIVE_MODAL_REMOVE_COURSE,
} from 'appConstants';
import { useDispatch } from 'react-redux';

export const TeamsHeader: FC = () => {
  const dispatch = useDispatch();
  const buttonsInfo: [string, () => void][] = [
    [
      'Create team',
      () => dispatch({ type: ACTIVE_MODAL_CREATE_TEAM, payload: true }),
    ],
    ['Join team', () => dispatch({ type: ACTIVE_MODAL_JOIN, payload: true })],
    [
      'Leave course',
      () => dispatch({ type: ACTIVE_MODAL_REMOVE_COURSE, payload: true }),
    ],
  ];

  return (
    <TeamsHeaderStyled>
      <TeamsHeaderRightStyled>
        <TeamHeaderTitle>Become a member of the team!</TeamHeaderTitle>
        <TeamsHeaderSubtitleStyled>
          To become a member of the team you can create your own team or join
          team. If not, you will be added to the team automatically.
        </TeamsHeaderSubtitleStyled>
        <TeamsHeaderButtonsBlockStyled>
          {buttonsInfo.map((item) => {
            return (
              <Button
                bgc={WHITE_COLOR}
                color={DARK_TEXT_COLOR}
                type="button"
                onClick={item[1]}
                key={JSON.stringify(item)}
              >
                {item[0]}
              </Button>
            );
          })}
        </TeamsHeaderButtonsBlockStyled>
      </TeamsHeaderRightStyled>
      <TeamHeaderLeftStyled>
        <HeaderManPic />
      </TeamHeaderLeftStyled>
    </TeamsHeaderStyled>
  );
};

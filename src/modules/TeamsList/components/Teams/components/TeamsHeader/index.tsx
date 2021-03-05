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
import { TeamButton } from 'typography';
import { DARK_TEXT_COLOR, WHITE_COLOR } from 'appConstants/colors';
import {
  ACTIVE_MODAL_CREATE_TEAM,
  ACTIVE_MODAL_JOIN,
  ACTIVE_MODAL_REMOVE_COURSE,
} from 'appConstants';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const TeamsHeader: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
        <TeamHeaderTitle>{t('Become a member of the team!')}</TeamHeaderTitle>
        <TeamsHeaderSubtitleStyled>
          {t('To become a member')}
        </TeamsHeaderSubtitleStyled>
        <TeamsHeaderButtonsBlockStyled>
          {buttonsInfo.map((item) => {
            return (
              <TeamButton
                bgc={WHITE_COLOR}
                color={DARK_TEXT_COLOR}
                type="button"
                onClick={item[1]}
                key={JSON.stringify(item)}
              >
                {t(item[0])}
              </TeamButton>
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

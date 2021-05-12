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
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  activeModalJoin,
  activeModalCreateTeam,
  activeModalRemoveCourse,
} from 'modules/TeamsList/teamsListReducer';

export const TeamsHeader: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const buttonsInfo: {
    name: string;
    callback: () => void;
    className: string;
  }[] = [
    {
      name: 'Create team',
      callback: () => dispatch(activeModalCreateTeam(true)),
      className: 'secondStep',
    },
    {
      name: 'Join team',
      callback: () => dispatch(activeModalJoin(true)),
      className: 'thirdStep',
    },
    {
      name: 'Leave course',
      callback: () => dispatch(activeModalRemoveCourse(true)),
      className: 'fourthStep',
    },
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
                onClick={item.callback}
                className={item.className}
                key={JSON.stringify(item)}
              >
                {t(item.name)}
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

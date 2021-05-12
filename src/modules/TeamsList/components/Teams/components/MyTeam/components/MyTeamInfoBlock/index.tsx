import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledMyTeamInfoBlock, InfoButton } from './styled';
import { MyTeamInfoLine } from './components/MyTeamInfoLine';
import { ReactComponent as InfoIcon } from 'assets/svg/info.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import NotificationPopup from './components/NotificationPopup';
import { useTranslation } from 'react-i18next';
import { activeModalUpdateSocialLink } from 'modules/TeamsList/teamsListReducer';

type MyTeamInfoBlockProps = {
  title: string;
  icon: 'info' | 'edit';
  value: string;
};

export const MyTeamInfoBlock: FC<MyTeamInfoBlockProps> = ({ title, icon, value }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const { t } = useTranslation();
  return (
    <StyledMyTeamInfoBlock>
      <div className="infoBlock__title">{t(title)}</div>
      <MyTeamInfoLine value={value} />
      {icon === 'info' ? (
        <InfoButton onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
          <InfoIcon />
          {hover && (
            <NotificationPopup>{t('The password is required to join the team.')}</NotificationPopup>
          )}
        </InfoButton>
      ) : (
        <InfoButton onClick={() => dispatch(activeModalUpdateSocialLink(true))}>
          <EditIcon />
        </InfoButton>
      )}
    </StyledMyTeamInfoBlock>
  );
};

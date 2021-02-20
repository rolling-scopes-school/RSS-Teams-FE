import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledMyTeamInfoBlock, InfoButton } from './styled';
import { MyTeamInfoLine } from './components/MyTeamInfoLine';
import { ReactComponent as InfoIcon } from 'assets/svg/info.svg';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import NotificationPopup from './components/NotificationPopup';
import { ACTIVE_MODAL_UPDATE_SOCIAL_LINK } from 'appConstants';

type MyTeamInfoBlockProps = {
  title: string;
  icon: 'info' | 'edit';
  value: string;
};

export const MyTeamInfoBlock: FC<MyTeamInfoBlockProps> = ({
  title,
  icon,
  value,
}) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  return (
    <StyledMyTeamInfoBlock>
      <div className="infoBlock__title">{title}</div>
      <MyTeamInfoLine value={value} />
      {icon === 'info' ? (
        <InfoButton
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <InfoIcon />
          {hover && (
            <NotificationPopup>
              The password is required to join the team.
            </NotificationPopup>
          )}
        </InfoButton>
      ) : (
        <InfoButton onClick={() => console.log('Info notification')}>
          <EditIcon
            onClick={() =>
              dispatch({ type: ACTIVE_MODAL_UPDATE_SOCIAL_LINK, payload: true })
            }
          />
        </InfoButton>
      )}
    </StyledMyTeamInfoBlock>
  );
};

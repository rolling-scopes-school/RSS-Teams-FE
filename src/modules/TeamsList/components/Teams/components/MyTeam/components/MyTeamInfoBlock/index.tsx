import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { StyledMyTeamInfoBlock, InfoButton, EditButton } from './styled';
import { MyTeamInfoLine } from './components/MyTeamInfoLine';
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

  return (
    <StyledMyTeamInfoBlock>
      <div className="infoBlock__title">{title}</div>
      <MyTeamInfoLine value={value} />
      {icon === 'edit' ? (
        <EditButton
          onClick={() =>
            dispatch({ type: ACTIVE_MODAL_UPDATE_SOCIAL_LINK, payload: true })
          }
        />
      ) : (
        <InfoButton />
      )}
    </StyledMyTeamInfoBlock>
  );
};

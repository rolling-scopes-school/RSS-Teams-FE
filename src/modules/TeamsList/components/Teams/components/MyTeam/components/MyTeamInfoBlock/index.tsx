import React, { FC } from 'react';
import { StyledMyTeamInfoBlock, InfoButton, EditButton } from './styled';
import { MyTeamInfoLine } from './components/MyTeamInfoLine';

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
  return (
    <StyledMyTeamInfoBlock>
      <div className="infoBlock__title">{title}</div>
      <MyTeamInfoLine value={value} />
      {icon === 'edit' ? <EditButton /> : <InfoButton />}
    </StyledMyTeamInfoBlock>
  );
};

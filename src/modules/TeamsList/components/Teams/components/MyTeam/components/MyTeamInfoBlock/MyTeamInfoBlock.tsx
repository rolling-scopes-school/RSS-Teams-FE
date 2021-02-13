import React, { FC } from 'react';
import { MyTeamInfoTitle, MyTeamInfoBlockStyled } from './styled';
import { MyTeamInfoLine } from './components/MyTeamInfoLine/MyTeamInfoLine';
import { MyTeamInfoEditButton } from './components/MyTeamInfoEditButton/MyTeamInfoEditButton';

type MyTeamInfoBlockProps = {
  title: string;
  icon: 'info' | 'edit';
  value: string | undefined;
};

export const MyTeamInfoBlock: FC<MyTeamInfoBlockProps> = ({
  title,
  icon,
  value,
}) => {
  return (
    <MyTeamInfoBlockStyled>
      <MyTeamInfoTitle>{title}</MyTeamInfoTitle>
      <MyTeamInfoLine value={value} />
      <MyTeamInfoEditButton icon={icon} />
    </MyTeamInfoBlockStyled>
  );
};

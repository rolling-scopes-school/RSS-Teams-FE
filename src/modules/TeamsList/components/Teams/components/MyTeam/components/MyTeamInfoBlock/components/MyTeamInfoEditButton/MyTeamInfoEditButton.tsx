import React, { FC } from 'react';
import { EditButton, InfoButton } from './styled';

type MyTeamInfoEditButtonProps = {
  icon: 'edit' | 'info';
};

export const MyTeamInfoEditButton: FC<MyTeamInfoEditButtonProps> = ({
  icon,
}) => {
  return icon === 'edit' ? <EditButton /> : <InfoButton />;
};

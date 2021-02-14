import React, { FC } from 'react';
import { MembersListToggleStyled, Chevron } from './styled';

type MembersListToggle = {
  countMembers: number | undefined;
  open: boolean;
  onToggleList: () => void;
  color?: string;
};

export const MembersListToggle: FC<MembersListToggle> = ({
  countMembers,
  open,
  onToggleList,
  color,
}) => {
  return (
    <MembersListToggleStyled
      onClick={() => {
        !!countMembers ? onToggleList() : null;
      }}
      color={color}
    >
      <div>{countMembers ? countMembers : 0} members</div>
      <Chevron open={open} />
    </MembersListToggleStyled>
  );
};

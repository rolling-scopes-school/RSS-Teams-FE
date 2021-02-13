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
  console.log('State Open:', onToggleList);
  return (
    <MembersListToggleStyled onClick={onToggleList} color={color}>
      <div>{countMembers ? countMembers : 0} members</div>
      <Chevron open={open} />
    </MembersListToggleStyled>
  );
};

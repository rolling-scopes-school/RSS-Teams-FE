import React, { FC } from 'react';
import { MembersListToggleStyled, Chevron } from './styled';

type MembersListToggle = {
  countMembers: number | undefined;
  open: boolean;
  onToggleList: () => void;
};

export const MembersListToggle: FC<MembersListToggle> = ({
  countMembers,
  open,
  onToggleList,
}) => {
  console.log('State Open:', onToggleList);
  return (
    <MembersListToggleStyled onClick={onToggleList}>
      <div>{countMembers ? countMembers : 0} members</div>
      <Chevron open={open} />
    </MembersListToggleStyled>
  );
};

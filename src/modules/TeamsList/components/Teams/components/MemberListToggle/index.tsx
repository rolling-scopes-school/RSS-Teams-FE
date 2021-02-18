import React, { FC } from 'react';
import { MembersListToggleStyled, Chevron } from './styled';

type MembersListToggle = {
  countMembers: number;
  isOpen: boolean;
  onToggleList: () => void;
  color?: string;
};

export const MembersListToggle: FC<MembersListToggle> = ({
  countMembers,
  isOpen,
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
      <div>{countMembers} members</div>
      <Chevron open={isOpen} />
    </MembersListToggleStyled>
  );
};

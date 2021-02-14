import React, { FC, useState } from 'react';
import { TeamItemStyled, TeamItemTableWrapper } from './styled';
import { User } from 'types';
import { MembersListToggle } from '../MemberListToggle/MemberListToggle';
import { LIGHT_TEXT_COLOR } from 'appConstants/colors';
import { TeamUserTable } from '../TeamUserTable/TeamUserTable';

type TeamItemProps = {
  name: string;
  description?: string;
  countMember: number;
  members: User[];
};

export const TeamItem: FC<TeamItemProps> = ({
  name,
  countMember,
  description,
  members,
}) => {
  const [isOpen, setToggle] = useState(false);
  const toggleListHandler = () => {
    setToggle(!isOpen);
  };
  return (
    <TeamItemStyled>
      <div className={'teamItem__header'}>
        <div className={'teamItem__name'}>{name}</div>
        <div className={'teamItem__description'}>
          {description ? description : null}
        </div>
        <MembersListToggle
          countMembers={countMember}
          open={isOpen}
          onToggleList={toggleListHandler}
          color={LIGHT_TEXT_COLOR}
        />
      </div>
      <TeamItemTableWrapper open={isOpen}>
        {isOpen ? <TeamUserTable members={members} /> : null}
      </TeamItemTableWrapper>
    </TeamItemStyled>
  );
};

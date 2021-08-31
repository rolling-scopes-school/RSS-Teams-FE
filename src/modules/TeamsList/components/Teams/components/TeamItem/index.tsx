import React, { FC, useState } from 'react';
import { TeamItemStyled, TeamItemTableWrapper } from './styled';
import { User } from 'types';
import { MembersListToggle } from '../MemberListToggle';
import { LIGHT_TEXT_COLOR } from 'appConstants/colors';
import { TeamUserTable } from '../TeamUserTable';

type TeamItemProps = {
  name: string;
  description?: string;
  countMember: number;
  members: User[];
};

export const TeamItem: FC<TeamItemProps> = ({ name, countMember, description, members }) => {
  const [isOpen, setToggle] = useState(false);
  const toggleListHandler = () => {
    setToggle(!isOpen);
  };
  return (
    <TeamItemStyled>
      <div className="teamItem__header">
        <div className="teamItem__name">{name}</div>
        {description && <div className="teamItem__description">{description}</div>}
        <MembersListToggle
          countMembers={countMember}
          isOpen={isOpen}
          onToggleList={toggleListHandler}
          color={LIGHT_TEXT_COLOR}
        />
      </div>
      <TeamItemTableWrapper open={isOpen}>
        {isOpen && <TeamUserTable members={members} secondTable />}
      </TeamItemTableWrapper>
    </TeamItemStyled>
  );
};

import React, { FC } from 'react';
import { MembersListToggleStyled, Chevron } from './styled';
import { ReactComponent as ChevronArrow } from 'assets/svg/chevron-arrow.svg';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <MembersListToggleStyled
      onClick={() => {
        !!countMembers && onToggleList();
      }}
      color={color}
    >
      <div>
        {countMembers || 0} {countMembers === 1 ? t('member') : t('members')}
      </div>
      <Chevron open={isOpen}>
        <ChevronArrow />
      </Chevron>
    </MembersListToggleStyled>
  );
};

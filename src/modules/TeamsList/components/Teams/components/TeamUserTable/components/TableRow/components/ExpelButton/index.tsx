import React, { FC } from 'react';
import { SmallCrossIcon, StyledExpelButton } from './styled';

type ExpelButtonProps = {
  onClickHandler?: () => void;
};

export const ExpelButton: FC<ExpelButtonProps> = ({ onClickHandler }) => {
  return (
    <StyledExpelButton onClick={onClickHandler}>
      <SmallCrossIcon />
      Expel
    </StyledExpelButton>
  );
};

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RSLogo } from 'typography';
import { StyledHeader } from './styled';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <RSLogo />
      </Link>
    </StyledHeader>
  );
};

import React, { FC } from 'react';
import { RSLogo } from 'typography';
import styled from 'styled-components';
import { MAIN1_COLOR } from 'appConstants/colors';

const StyledHeader = styled.header`
  background-color: ${MAIN1_COLOR};
  padding: 25px 60px;
  max-width: 1320px;
  margin: 0 auto;
`;

export const Header: FC = () => {
  return (
    <StyledHeader>
      <a href="/">
        <RSLogo />
      </a>
    </StyledHeader>
  );
};

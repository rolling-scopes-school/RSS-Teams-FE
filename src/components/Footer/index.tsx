import React, { FC } from 'react';
import { RSLogo } from 'typography';
import { StyledFooter, FooterWrapper, FooterContentBlockLogo } from './styled';
import { Link } from 'react-router-dom';
import { FooterContent } from './components';

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterContentBlockLogo>
          <Link to="/">
            <RSLogo login=" " />
          </Link>
        </FooterContentBlockLogo>
        <FooterContent />
      </FooterWrapper>
    </StyledFooter>
  );
};

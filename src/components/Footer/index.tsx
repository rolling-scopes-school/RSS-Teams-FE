import React, { FC, useState } from 'react';
import { RSLogo } from 'typography';
import { StyledFooter, FooterWrapper, FooterContentBlockLogo } from './styled';
import { Link } from 'react-router-dom';
import { FooterContent, LangSelect } from './components';

export const Footer: FC = () => {
  const [displayLangList, setDisplayLangList] = useState(false);
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterContentBlockLogo>
          <Link to="/">
            <RSLogo login=" " />
          </Link>
          <LangSelect {...{ displayLangList, setDisplayLangList }} />
        </FooterContentBlockLogo>
        <FooterContent />
      </FooterWrapper>
    </StyledFooter>
  );
};

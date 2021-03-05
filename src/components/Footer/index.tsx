import React, { FC, useState } from 'react';
import { RSLogo } from 'typography';
import { FooterContentBlock, StyledFooter } from './styled';
import { Link } from 'react-router-dom';
import { FooterContent, LangSelect } from './components';

export const Footer: FC = () => {
  const [displayLangList, setDisplayLangList] = useState(false);
  return (
    <StyledFooter>
      <Link to="/">
        <RSLogo login=" " />
      </Link>
      <FooterContentBlock>
        <LangSelect {...{ displayLangList, setDisplayLangList }} />
      </FooterContentBlock>
      <FooterContent />
    </StyledFooter>
  );
};

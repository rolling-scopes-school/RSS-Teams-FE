import React, { FC } from 'react';
import {
  FooterContentBlock,
  FooterContentWrapper,
  FooterTitle,
} from 'components/Footer/styled';
import { FOOTER_INFO } from 'appConstants';

export const FooterContent: FC = () => {
  return (
    <FooterContentWrapper>
      {FOOTER_INFO.map((item, index) => {
        return (
          <FooterContentBlock key={JSON.stringify(item)}>
            <FooterTitle>{item.title}</FooterTitle>
            <div className={`contentBlock${!!index ? ' designBlock' : ''}`}>
              {item.members.map((item: string) => {
                return (
                  <a
                    href={!!index ? '#' : `https://github.com/${item}`}
                    className={`contentItem${!!index ? ' designItem' : ''}`}
                    key={item}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </FooterContentBlock>
        );
      })}
    </FooterContentWrapper>
  );
};

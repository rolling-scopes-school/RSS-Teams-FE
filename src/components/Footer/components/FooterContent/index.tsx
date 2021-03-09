import React, { FC } from 'react';
import {
  FooterContentBlock,
  FooterContentWrapper,
  FooterTitle,
} from 'components/Footer/styled';
import { FOOTER_INFO } from 'appConstants';
import { useTranslation } from 'react-i18next';

export const FooterContent: FC = () => {
  const { t } = useTranslation();
  return (
    <FooterContentWrapper>
      {FOOTER_INFO.map((item, index) => {
        return (
          <FooterContentBlock key={JSON.stringify(item)}>
            <FooterTitle>{t(item.title)}</FooterTitle>
            <div className={`contentBlock${!!index ? ' designBlock' : ''}`}>
              {item.members.map((item: string) => {
                return (
                  <a
                    href={
                      !!index
                        ? 'https://www.linkedin.com/in/nastya-kapylova-54126215a'
                        : `https://github.com/${item}`
                    }
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

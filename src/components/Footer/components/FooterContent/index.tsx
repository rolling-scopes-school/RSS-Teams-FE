import React, { FC } from 'react';
import {
  FooterContentBlock,
  FooterContentWrapper,
  FooterTitle,
} from 'components/Footer/styled';
import { FOOTER_INFO, LINK_TO_DESIGN_BLOCK } from 'appConstants';
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
                        ? LINK_TO_DESIGN_BLOCK
                        : `https://github.com/${item}`
                    }
                    className={`contentItem${!!index ? ' designItem' : ''}`}
                    key={item}
                    target="_blank"
                    rel="noreferrer"
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

import styled from 'styled-components';
import {
  DARK_TEXT_COLOR,
  FOOTER_NAMES_COLOR,
  WHITE_COLOR,
} from 'appConstants/colors';
import { GeneralAdaptiveFont } from 'typography';

export const StyledFooter = styled.footer`
  position: sticky;
  top: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  background-color: ${DARK_TEXT_COLOR};
  padding: 1.8% 4.2% 0;
  @media (max-width: 440px) {
    height: 105px;
    padding: 4.8% 4.2% 0;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1320px;
  height: 100%;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 5.6%;

  @media (max-width: 1150px) {
    display: none;
  }
`;

export const FooterContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  .contentBlock {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: 992px) {
      gap: 0;
    }

    .contentItem {
      margin-bottom: -20px;
      font: 400 1rem/24px 'Poppins', sans-serif;
      color: ${FOOTER_NAMES_COLOR};
      text-decoration: none;
      outline: none;
      ${GeneralAdaptiveFont};

      &:hover {
        color: ${WHITE_COLOR};
      }

      @media (max-width: 992px) {
        margin-bottom: 15px;
      }
    }
  }

  .contentBlock.designBlock {
    width: auto;
  }

  .contentItem.designItem {
    width: 140px;
  }
`;

export const FooterContentBlockLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 33%;

  & > .LanguageSelect {
    ${GeneralAdaptiveFont};
    min-height: 35px;
    & > div {
      height: 35px;
    }

    @media (max-width: 768px) {
      width: 110px;
    }
    @media (max-width: 440px) {
      width: 90px;
      & > div {
        padding: 0px 5px;
      }
    }
  }

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const FooterTitle = styled.h1`
  font: 600 1rem/24px 'Poppins', sans-serif;
  color: ${WHITE_COLOR};
  margin: 0;
  ${GeneralAdaptiveFont};
`;

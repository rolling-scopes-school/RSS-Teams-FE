import styled from 'styled-components';
import {
  DARK_TEXT_COLOR,
  FOOTER_NAMES_COLOR,
  WHITE_COLOR,
} from 'appConstants/colors';
import { GeneralAdaptiveFont } from 'typography';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 182px;
  background-color: ${DARK_TEXT_COLOR};
  margin-top: 60px;
  padding: 2.8% 4.2% 0;
  @media (max-width: 768px) {
    height: 160px;
  }
  @media (max-width: 550px) {
    height: 150px;
  }
  @media (max-width: 440px) {
    height: 130px;
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

  @media (max-width: 1200px) and (min-width: 800px) {
    gap: 0;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const FooterContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .contentBlock {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 450px;

    @media (max-width: 992px) {
      width: 360px;
      gap: 0;
    }

    .contentItem {
      margin-bottom: -20px;
      font: 400 1rem/24px 'Poppins', sans-serif;
      color: ${FOOTER_NAMES_COLOR};
      text-decoration: none;
      outline: none;
      width: 130px;
      ${GeneralAdaptiveFont};

      &:nth-child(3) {
        width: 100px;
      }

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
  flex-direction: column;

  & > .LanguageSelect {
    ${GeneralAdaptiveFont};
    min-height: 35px;
    margin-top: -15px;
    & > div {
      height: 35px;
    }

    @media (max-width: 800px) {
      margin-top: 0;
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

  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const FooterTitle = styled.h1`
  font: 600 1rem/24px 'Poppins', sans-serif;
  color: ${WHITE_COLOR};
  margin: 0;
  ${GeneralAdaptiveFont};
`;

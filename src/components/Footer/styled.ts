import styled from 'styled-components';
import {
  DARK_TEXT_COLOR,
  FOOTER_NAMES_COLOR,
  WHITE_COLOR,
} from 'appConstants/colors';

export const StyledFooter = styled.footer`
  position: absolute;
  top: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 182px;
  background-color: ${DARK_TEXT_COLOR};
  margin-top: 60px;
  padding: 40px 60px 0;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.6%;
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

    .contentItem {
      margin-bottom: -20px;
      font: 400 1rem/24px 'Poppins', sans-serif;
      color: ${FOOTER_NAMES_COLOR};
      text-decoration: none;
      outline: none;
      width: 130px;
    }
  }

  .contentBlock.designBlock {
    width: auto;
  }

  .contentItem.designItem {
    width: 140px;
  }
`;
export const FooterTitle = styled.h1`
  font: 600 1rem/24px 'Poppins', sans-serif;
  color: ${WHITE_COLOR};
  margin: 0;
`;

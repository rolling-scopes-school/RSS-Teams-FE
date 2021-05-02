import styled from 'styled-components';
import { DARK_TEXT_COLOR } from 'appConstants/colors';
import { ScrollBar } from 'typography';

export const StudentTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  max-width: 1440px;
  padding: 0 4% 60px;
  overflow-y: scroll;
  ${ScrollBar};
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const TableTitle = styled.h1`
  align-self: flex-start;
  width: 80%;
  margin: 40px 0;
  font: 700 30px/45px 'Poppins', sans-serif;
  color: ${DARK_TEXT_COLOR};

  @media (max-width: 1200px) {
    font-size: 26px;
    line-height: 35px;
  }
  @media (max-width: 992px) {
    margin: 35px 0;
    font-size: 24px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    margin: 30px 0;
    font-size: 22px;
    line-height: 25px;
  }
  @media (max-width: 550px) {
    margin: 30px 0;
    font-size: 20px;
    line-height: 25px;
  }
  @media (max-width: 440px) {
    margin: 20px 0;
    font-size: 17px;
    line-height: 20px;
  }
`;

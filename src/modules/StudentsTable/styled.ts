import styled from 'styled-components';
import { DARK_TEXT_COLOR } from 'appConstants/colors';

export const StudentTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 4%;
`;

export const TableTitle = styled.h1`
  align-self: flex-start;
  width: 80%;
  margin: 40px 0;
  font: 700 30px/45px 'Poppins', sans-serif;
  color: ${DARK_TEXT_COLOR};

  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 26px;
    line-height: 35px;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    margin: 35px 0;
    font-size: 24px;
    line-height: 30px;
  }
  @media (max-width: 767px) and (min-width: 550px) {
    margin: 30px 0;
    font-size: 22px;
    line-height: 25px;
  }
  @media (max-width: 549px) and (min-width: 440px) {
    margin: 30px 0;
    font-size: 20px;
    line-height: 25px;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    margin: 20px 0;
    font-size: 17px;
    line-height: 20px;
  }
`;

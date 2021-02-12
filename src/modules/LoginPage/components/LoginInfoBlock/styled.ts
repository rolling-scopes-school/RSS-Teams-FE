import styled from 'styled-components';
import { WHITE_COLOR, DARK_TEXT_COLOR, MAIN1_COLOR } from 'appConstants/colors';

export const StyledLoginInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 12%;
  padding: 20px;
  font-size: 1rem;
  color: ${DARK_TEXT_COLOR};
  background-color: ${WHITE_COLOR};
  border-radius: 20px;

  gap: 30px;
  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 0.95rem;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    margin: 0 auto;
    font-size: 0.9rem;
  }
  @media (max-width: 767px) and (min-width: 550px) {
    margin: 0 auto;
    padding: 20px 15px;
    font-size: 0.825rem;

    gap: 25px;
  }
  @media (max-width: 549px) and (min-width: 440px) {
    margin: 0 auto;
    padding: 20px 15px;
    font-size: 0.8rem;

    gap: 20px;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    margin: 0 auto;
    padding: 20px 15px;
    font-size: 0.68rem;

    gap: 15px;
  }
`;

export const StyledLoginTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 28px;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 26px;
  }
  @media (max-width: 767px) and (min-width: 550px) {
    font-size: 24px;
  }
  @media (max-width: 549px) and (min-width: 440px) {
    font-size: 22px;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    font-size: 20px;
  }
`;

export const StyledLoginRegistrationLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 13px 50px;
  text-align: center;
  color: ${WHITE_COLOR};
  text-decoration: none;
  background-color: ${MAIN1_COLOR};
  border-radius: 20px;
`;

export const StyledLoginTextWrapper = styled.div`
  display: flex;
  font-weight: normal;
  line-height: 150%;

  gap: 10px;
  p {
    margin: 0;
  }
  a {
    font-weight: 500;
    color: ${MAIN1_COLOR};
    text-decoration: none;
  }
`;

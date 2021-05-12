import styled from 'styled-components';
import { WHITE_COLOR, DARK_TEXT_COLOR, MAIN1_COLOR } from 'appConstants/colors';
import { GeneralAdaptiveFont, GeneralButtonPadding, H1AdaptiveFont } from 'typography';

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
  ${GeneralAdaptiveFont};

  @media (max-width: 992px) {
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    padding: 20px 15px;
    gap: 25px;
  }
  @media (max-width: 550px) {
    gap: 20px;
  }
  @media (max-width: 440px) {
    gap: 15px;
  }
`;

export const StyledLoginTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  ${H1AdaptiveFont};
`;

export const StyledLoginRegistrationLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  text-align: center;
  color: ${WHITE_COLOR};
  text-decoration: none;
  background-color: ${MAIN1_COLOR};
  border-radius: 20px;
  ${GeneralButtonPadding}
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

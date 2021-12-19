import styled from 'styled-components';
import { GeneralAdaptiveFont, TextSemiBold } from 'typography';

export const TutorialPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 680px;
  height: fit-content;
  padding: 60px 0;
  gap: 40px;

  .StepBlockImage {
    margin: 20px 0;
    border-radius: 20px;
    box-shadow: 0px 4px 50px rgba(6, 73, 140, 0.1);

    @media (max-width: 440px) {
      margin: 0;
    }
  }

  div:nth-of-type(6) {
    margin-top: -17px;
  }

  div:last-child {
    margin-top: 20px;
    & > p {
      margin-bottom: 0;
    }
  }

  p,
  li {
    ${GeneralAdaptiveFont};
  }

  h4 {
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: 992px) {
    width: 640px;

    h4 {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 768px) {
    width: 600px;

    h1 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 650px) {
    width: 500px;
    padding: 55px 0;
    gap: 30px;

    div:last-child {
      margin-top: 0;
    }

    h1 {
      font-size: 1.25rem;
    }
    h4 {
      font-size: 1.15rem;
    }
  }
  @media (max-width: 550px) {
    width: 400px;
    padding: 50px 0;
    gap: 25px;

    h1 {
      font-size: 1.1rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
  @media (max-width: 440px) {
    width: 280px;
    padding: 40px 0;
    gap: 20px;

    h1 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.9rem;
      line-height: 22px;
    }
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  ${TextSemiBold}
  margin: 0 10px 0 0;
`;

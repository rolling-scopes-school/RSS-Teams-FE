import styled from 'styled-components';
import { BG_COLOR } from 'appConstants/colors';
import { GeneralAdaptiveFont } from 'typography';

export const CourseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  background-color: ${BG_COLOR};
  padding: 20px;
  border-radius: 20px;

  & > div:nth-child(1) {
    font-weight: 600;
  }

  & > div {
    ${GeneralAdaptiveFont};
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    width: 40%;
    gap: 10px;

    & > div:nth-child(1) {
      text-align: left;
    }

    button,
    div {
      width: 90%;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 450px) {
    gap: 5px;
  }
`;

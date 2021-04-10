import styled from 'styled-components';

export const TutorialPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 680px;
  height: fit-content;
  padding: 60px 0;

  .StepBlockImage {
    margin: 20px 0;
    border-radius: 20px;
    box-shadow: 0px 4px 50px rgba(6, 73, 140, 0.1);
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
`;

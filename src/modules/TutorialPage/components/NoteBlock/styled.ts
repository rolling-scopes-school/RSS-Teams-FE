import {
  DARK_TEXT_COLOR,
  MAIN1_COLOR,
  NOTE_BLOCK_COLOR,
  WHITE_COLOR,
} from 'appConstants/colors';
import styled from 'styled-components';

type NoteProps = {
  isNote?: string;
};

export const NoteWrapper = styled.div<NoteProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${({ isNote }) => isNote && '20px'};
  padding: ${({ isNote }) => isNote && '30px'};
  background-color: ${({ isNote }) => isNote && NOTE_BLOCK_COLOR};
  border-radius: 20px;

  p {
    margin-top: 0;
  }

  & > h4 {
    color: ${({ isNote }) => (isNote ? MAIN1_COLOR : DARK_TEXT_COLOR)};
    margin: 0 0 20px;
  }

  .SelectCourseExample {
    width: 300px;
    margin-left: 40px;

    @media (max-width: 550px) {
      width: 250px;
      margin-left: 35px;
    }
    @media (max-width: 440px) {
      width: 200px;
      margin-left: 30px;
    }
  }

  @media (max-width: 650px) {
    padding: ${({ isNote }) => isNote && '27.5px'};
  }
  @media (max-width: 550px) {
    padding: ${({ isNote }) => isNote && '25px'};
  }
  @media (max-width: 440px) {
    padding: ${({ isNote }) => isNote && '20px'};
    margin-bottom: ${({ isNote }) => isNote && '10px'};
  }
`;

export const NoteList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 25px;
  list-style: none;
  counter-reset: counter;
  margin: 0 0 20px;
  padding-inline-start: 0;

  li {
    counter-increment: counter;
    margin: 0 0 0 40px;
    text-align: justify;
    @media (max-width: 550px) {
      margin-left: 35px;
    }
    @media (max-width: 440px) {
      margin-left: 30px;
    }
  }

  li::before {
    content: counter(counter);
    background-color: ${MAIN1_COLOR};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    line-height: 30px;
    color: ${WHITE_COLOR};
    text-align: center;
    margin: 0 10px -3px -40px;

    @media (max-width: 550px) {
      width: 25px;
      height: 25px;
      line-height: 25px;
      margin-left: -35px;
    }
    @media (max-width: 440px) {
      width: 20px;
      height: 20px;
      line-height: 22px;
      margin-left: -30px;
    }
  }

  @media (max-width: 550px) {
    gap: 20px;
  }
  @media (max-width: 440px) {
    gap: 15px;
  }
`;

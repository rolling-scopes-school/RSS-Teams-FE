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
    font-size: 20px;
    line-height: 150%;
    color: ${MAIN1_COLOR};
    color: ${({ isNote }) => (isNote ? MAIN1_COLOR : DARK_TEXT_COLOR)};
    margin: 0 0 20px;
  }

  .SelectCourseExample {
    width: 300px;
    margin-left: 40px;
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
  }
`;

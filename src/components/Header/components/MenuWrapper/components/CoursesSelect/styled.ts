import {
  MAIN1_DARK_COLOR,
  WHITE_COLOR,
  MAIN1_COLOR,
} from 'appConstants/colors';
import styled from 'styled-components';
import { ReactComponent as CoursesSelectArrow } from 'assets/svg/coursesSelectArrow.svg';

type TStyledCoursesSelectInfo = {
  hover: boolean;
};

type TStyledCoursesSelectList = {
  isClicked: boolean;
};

export const StyledCoursesSelectWrapper = styled.div<TStyledCoursesSelectList>`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  min-height: 40px;
  overflow: hidden;
  font: 1rem 500 24px;
  color: ${WHITE_COLOR};
  background-color: ${MAIN1_DARK_COLOR};
  border-radius: 10px;

  ul {
    margin-top: ${({ isClicked }) => (isClicked ? '0px' : '-100%')};
  }
`;

export const StyledCoursesSelectHeaderWrapper = styled.div<TStyledCoursesSelectList>`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 8px 15px;
  background-color: ${MAIN1_DARK_COLOR};
  border-radius: 10px;

  p {
    margin: 0;
    font-weight: 400;
  }

  svg {
    transform: ${({ isClicked }) =>
      isClicked ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const StyledCoursesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  margin-top: 0;
  padding: 8px 10px;
  transition: all 0.7s ease-in-out;
  gap: 5px;

  li {
    padding: 5px;
    list-style: none;
    background-color: ${MAIN1_COLOR};
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: transparent;
    }
  }
`;

export const StyledCoursesSelectInfo = styled.div<TStyledCoursesSelectInfo>`
  display: flex;
  align-items: center;

  &:hover {
    cursor: ${({ hover }) => (hover ? 'pointer' : 'unset')};
  }

  p {
    margin-left: 5px;
    margin-right: ${({ hover }) => (hover ? '16px' : '31px')};
    font-weight: 500;
    line-height: 27px;
  }
`;

export const StyledCoursesSelectArrow = styled(CoursesSelectArrow)`
  width: 10px;
  height: 5px;
  transition: transform 0.3s ease-in-out;
`;

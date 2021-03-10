import {
  MAIN1_DARK_COLOR,
  WHITE_COLOR,
  MAIN1_COLOR,
  DARK_TEXT_COLOR,
} from 'appConstants/colors';
import styled from 'styled-components';
import { ReactComponent as CoursesSelectArrow } from 'assets/svg/coursesSelectArrow.svg';
import { GeneralAdaptiveFont, SVGArrowAdaptive } from 'typography';

type TStyledCoursesSelectInfo = {
  hover: boolean;
} & TFooterProp;

type TStyledCoursesSelectList = {
  isClicked: boolean;
} & TFooterProp;

type TFooterProp = {
  footer?: string;
};

export const StyledCoursesSelectWrapper = styled.div<TStyledCoursesSelectList>`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: ${({ footer }) => (footer ? '130px' : '300px')};
  height: fit-content;
  min-height: 40px;
  overflow: hidden;
  font: 400 1rem/24px 'Poppins', sans-serif;
  color: ${({ footer }) => (footer ? DARK_TEXT_COLOR : WHITE_COLOR)};
  background-color: ${({ footer }) =>
    footer ? WHITE_COLOR : MAIN1_DARK_COLOR};
  border-radius: 10px;

  ul {
    margin-top: ${({ isClicked }) => (isClicked ? '0px' : '-100%')};
  }

  @media (max-width: 945px) {
    display: ${({ footer }) => !footer && 'none'};
  }
`;

export const StyledCoursesSelectHeaderWrapper = styled.div<TStyledCoursesSelectList>`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 8px 15px;
  background-color: ${({ footer }) =>
    footer ? WHITE_COLOR : MAIN1_DARK_COLOR};
  border-radius: 10px;
  ${GeneralAdaptiveFont};

  p {
    margin: 0;
    font-weight: ${({ footer }) => (footer ? 600 : 400)};
  }

  svg {
    transform: ${({ isClicked }) =>
      isClicked ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const StyledCoursesList = styled.ul<TFooterProp>`
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
    background-color: ${({ footer }) => (footer ? WHITE_COLOR : MAIN1_COLOR)};
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
  justify-content: ${({ footer }) => footer && 'space-between'};

  &:hover {
    cursor: ${({ hover }) => (hover ? 'pointer' : 'unset')};
  }

  p {
    overflow: hidden;
    max-width: 155px;
    margin-left: 5px;
    margin-right: ${({ hover }) => (hover ? '16px' : '31px')};
    font-weight: ${({ footer }) => (footer ? 600 : 500)};
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  svg {
    ${SVGArrowAdaptive};
  }
`;

export const StyledCoursesSelectArrow = styled(CoursesSelectArrow)<TFooterProp>`
  transition: transform 0.3s ease-in-out;

  path {
    fill: ${({ footer }) => footer && DARK_TEXT_COLOR};
  }
`;

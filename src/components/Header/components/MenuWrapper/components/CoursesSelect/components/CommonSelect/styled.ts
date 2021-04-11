import {
  MAIN1_DARK_COLOR,
  WHITE_COLOR,
  MAIN1_COLOR,
} from 'appConstants/colors';
import styled from 'styled-components';
import { ReactComponent as CoursesSelectArrow } from 'assets/svg/coursesSelectArrow.svg';
import { HeaderAdaptiveFont, SVGArrowAdaptive } from 'typography';

type TStyledCoursesSelectInfo = {
  hover: boolean;
} & TFooterProp;

type TStyledCoursesSelectList = {
  isClicked: boolean;
} & TFooterProp;

type TFooterProp = {
  isLang?: string;
};

export const StyledCoursesSelectWrapper = styled.div<TStyledCoursesSelectList>`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: ${({ isLang }) => (isLang ? '82px' : '300px')};
  height: fit-content;
  min-height: 40px;
  margin: ${({ isLang }) => !isLang && '0 20px 0 60px'};
  overflow: hidden;
  font: 400 1rem/24px 'Poppins', sans-serif;
  color: ${WHITE_COLOR};
  background-color: ${MAIN1_DARK_COLOR};
  border-radius: 10px;
  ${HeaderAdaptiveFont}

  ul {
    margin-top: ${({ isClicked }) => (isClicked ? '0px' : '-150%')};
  }

  & > div {
    width: ${({ isLang }) => isLang && '100%'};
    @media (max-width: 440px) {
      & > p {
        display: ${({ isLang }) => !isLang && 'none'};
      }
    }
  }

  @media (max-width: 700px) {
    width: ${({ isLang }) => (isLang ? '75px' : '260px')};
  }
  @media (max-width: 600px) {
    display: ${({ isLang }) => isLang && 'none'};
    margin: ${({ isLang }) => !isLang && '0 20px 0 0'};
  }
  @media (max-width: 440px) {
    width: ${({ isLang }) => !isLang && '200px'};
    & > div > div {
      width: ${({ isLang }) => !isLang && '100%'};
    }
  }
  @media (max-width: 375px) {
    width: ${({ isLang }) => !isLang && '180px'};
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
  ${HeaderAdaptiveFont};

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
  ${HeaderAdaptiveFont}

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
  justify-content: space-between;

  &:hover {
    cursor: ${({ hover }) => (hover ? 'pointer' : 'unset')};
  }

  p {
    overflow: hidden;
    max-width: 155px;
    margin-left: 5px;
    margin-right: ${({ hover }) => (hover ? '10px' : '31px')};
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  svg {
    ${SVGArrowAdaptive};
  }
`;

export const StyledCoursesSelectArrow = styled(CoursesSelectArrow)`
  transition: transform 0.3s ease-in-out;
`;

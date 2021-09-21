import styled from 'styled-components';
import { BG_COLOR, LIGHT_TEXT_COLOR, MAIN1_COLOR, WHITE_COLOR } from 'appConstants/colors';
import { Button, SVGParamsAdaptive } from 'typography';

type TPlusButton = {
  active?: boolean;
};

export const FieldWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const SelectCourse = styled.div`
  width: 300px;
  height: 38px;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20px;
  margin-top: 8px;
  @media (max-width: 440px) {
    width: 100%;
  }
`;

export const CourseButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  svg {
    ${SVGParamsAdaptive};
  }
`;

export const PlusButton = styled(CourseButton)<TPlusButton>`
  background-color: ${({ active }) => (active ? MAIN1_COLOR : BG_COLOR)};

  path {
    stroke: ${({ active }) => (active ? WHITE_COLOR : LIGHT_TEXT_COLOR)};
  }
`;

export const CrossButton = styled(CourseButton)`
  background: ${BG_COLOR}
    url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.05029 3.05054L12.9499 12.9501' stroke='%237E96C2' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M12.9497 3.05029L3.0501 12.9499' stroke='%237E96C2' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A")
    no-repeat center center;
`;
export const JoinButton = styled(Button)`
  height: 38px;
  margin-top: 8px;
  line-height: 0;
  padding: 10px 15px;
  width: 80px;
  @media (max-width: 992px) {
    padding: 5px 7px;
  }
`;

export const PlaceholderOption = styled.option`
  display: none;
`;

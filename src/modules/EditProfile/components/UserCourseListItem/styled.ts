import styled from 'styled-components';
import { BG_COLOR, DARK_TEXT_COLOR } from 'appConstants/colors';
import { PlusButton } from 'components/CourseField/styled';
import { GeneralAdaptiveFont, Input } from 'typography';

export const UserCourseListItemStyled = styled.div`
  display: flex;
`;

export const InfoBox = styled.div`
  flex-grow: 1;
  height: 38px;
  width: 100%;
  padding: 8px 8px;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-top: 8px;
  max-width: 300px;
  border-radius: 10px;
  background-color: ${BG_COLOR};
  color: ${DARK_TEXT_COLOR};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${GeneralAdaptiveFont};
`;

export const MinusButton = styled(PlusButton)`
  background-image: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  margin-left: 0;
`;

export const UserCourseInput = styled(Input)`
  height: 40px;
  margin-top: 8px;
`;

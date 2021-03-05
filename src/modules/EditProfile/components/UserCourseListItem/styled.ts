import styled from 'styled-components';
import { BG_COLOR, DARK_TEXT_COLOR } from 'appConstants/colors';
import { PlusButton } from 'components/CourseField/styled';
import { GeneralAdaptiveFont } from 'typography';

export const UserCourseListItemStyled = styled.div`
  display: flex;

  div {
    flex-grow: 1;
    padding: 8px 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: ${BG_COLOR};
    color: ${DARK_TEXT_COLOR};
    ${GeneralAdaptiveFont}
  }
`;

export const MinusButton = styled(PlusButton)`
  background-image: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

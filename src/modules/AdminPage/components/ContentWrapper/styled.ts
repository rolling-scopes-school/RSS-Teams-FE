import { DARK_TEXT_COLOR, WHITE_COLOR } from 'appConstants/colors';
import styled from 'styled-components';
import { H2AdaptiveFont } from 'typography';

export const AdminPageContentWrapper = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1320px;
  min-height: 75vh;
  padding: 20px 0;
  background-color: ${WHITE_COLOR};
  border-radius: 20px;
`;

export const ListTitle = styled.h4`
  ${H2AdaptiveFont}
  font-size: 25px;
  color: ${DARK_TEXT_COLOR};
  text-align: center;
`;

export const CourseListSettings = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 10px 5% 30px;

  @media (max-width: 1100px) {
    justify-content: flex-start;
    padding: 10px 9% 80px;
  }
  @media (max-width: 768px) {
    padding: 10px 10% 80px;
  }
`;

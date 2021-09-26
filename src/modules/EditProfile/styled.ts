import styled from 'styled-components';
import { BG_COLOR, DARK_TEXT_COLOR, LIGHT_TEXT_COLOR, WHITE_COLOR } from 'appConstants/colors';
import {
  PageTitle,
  H1AdaptiveFont,
  GeneralAdaptiveFont,
  ScrollBar,
  MainComponentHeight,
} from 'typography';

export const EditProfileWrapper = styled.form`
  background-color: ${WHITE_COLOR};
  width: 680px;
  padding: 30px;
  border-radius: 20px;
  margin: 75px 0 15px;
  @media screen and (max-width: 768px) {
    width: 320px;
    padding: 15px 10px;
    flex-direction: column;
    margin: 50px 0 30px;
  }

  @media (max-width: 440px) {
    width: 280px;
  }
`;

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
  ${ScrollBar};
  ${MainComponentHeight};
`;

export const FormTitle = styled(PageTitle)`
  margin-top: 0;
  margin-bottom: 32px;
  ${H1AdaptiveFont};
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CoursesWrapper = styled.div`
  width: 100%;
`;
export const UserCoursesListTitle = styled.div`
  color: ${LIGHT_TEXT_COLOR};
  margin-bottom: 10px;
  ${GeneralAdaptiveFont}
`;

export const UserCourseListItem = styled.div`
  padding: 8px 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${BG_COLOR};
  color: ${DARK_TEXT_COLOR};
`;

export const CommonWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

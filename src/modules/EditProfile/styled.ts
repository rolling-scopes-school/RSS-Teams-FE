import styled from 'styled-components';
import {
  BG_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  WHITE_COLOR,
} from 'appConstants/colors';
import { PageTitle } from 'typography';

export const EditProfileWrapper = styled.form`
  background-color: ${WHITE_COLOR};
  width: 680px;
  padding: 30px;
  border-radius: 20px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    width: 320px;
    padding: 15px 10px;
    flex-direction: column;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const FormTitle = styled(PageTitle)`
  margin-top: 0;
  margin-bottom: 32px;
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
  max-width: 300px;
  width: 100%;
`;
export const UserCoursesListTitle = styled.div`
  color: ${LIGHT_TEXT_COLOR};
  margin-bottom: 10px;
`;

export const UserCourseListItem = styled.div`
  padding: 8px 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${BG_COLOR};
  color: ${DARK_TEXT_COLOR};
`;

import styled from 'styled-components';
import {
  BG_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  WHITE_COLOR,
} from 'appConstants/colors';

export const EditProfileWrapper = styled.form`
  background-color: ${WHITE_COLOR};
  width: 680px;
  padding: 30px;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    width: 320px;
    margin-top: 20px;
    padding: 15px 10px;
    flex-direction: column;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const UserCoursesListTitle = styled.div`
  color: ${LIGHT_TEXT_COLOR};
  margin-bottom: 5px;
`;
export const UserCourseListItem = styled.div`
  padding: 8px 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${BG_COLOR};
  color: ${DARK_TEXT_COLOR};
`;

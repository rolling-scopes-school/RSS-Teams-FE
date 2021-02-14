import styled from 'styled-components';
import { WHITE_COLOR } from 'appConstants/colors';

export const EditProfileWrapper = styled.form`
  background-color: ${WHITE_COLOR};
  width: 680px;
  padding: 25px 30px;
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

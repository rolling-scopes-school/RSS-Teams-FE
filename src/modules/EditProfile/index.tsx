import React, { FC } from 'react';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
// import { useCoursesQuery } from 'hooks/graphql';
// import { selectUserData } from 'modules/StudentsTable/selectors';
import { PageTitle, Button } from 'typography';
import { InputField } from 'components/InputField';
import { SelectField } from 'components/SelectField';
import { WHITE_COLOR } from 'appConstants/colors';

const EditProfileWrapper = styled.div`
  background-color: ${WHITE_COLOR};
  width: 680px;
  margin: 80px auto;
  padding: 25px 30px;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    width: 320px;
    margin-top: 20px;
    padding: 15px 10px;
    flex-direction: column;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const EditProfile: FC = () => {
  // const { loading, error, courses } = useCoursesQuery();
  // // const userData = useSelector(selectUserData);
  return (
    <EditProfileWrapper>
      <PageTitle>Enter your profile information</PageTitle>
      <InputsWrapper>
        <InputField labelText="First Name" placeholder="Enter first name" />
        <InputField labelText="Second Name" placeholder="Enter second name" />
        <InputField labelText="Discord" placeholder="Enter discord" />
        <InputField labelText="Telegram" placeholder="Enter telegram" />
        <InputField labelText="City" placeholder="Enter city" />
        <InputField labelText="Country" placeholder="Enter country" />
        <SelectField labelText="Course" placeholder="Select course" />
        <InputField labelText="Score" placeholder="Enter score" />
      </InputsWrapper>
      <ButtonWrapper>
        <Button>Submit</Button>
      </ButtonWrapper>
    </EditProfileWrapper>
  );
};

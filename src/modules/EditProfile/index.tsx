import React, { FC, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { useCoursesQuery, useWhoAmIQuery } from 'hooks/graphql';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { PageTitle, Button } from 'typography';
import { InputField } from 'components/InputField';
import { CourseField } from 'components/CourseField';

import { useForm } from 'react-hook-form';
import { EditProfileWrapper, InputsWrapper, ButtonWrapper } from './styled';

type Course = {
  courseId: string;
  course: string;
};

interface IProfileFormInput {
  firstName: string;
  lastName: string;
  discord: string;
  telegram: string;
  city: string;
  coutry: string;
  courses: Course[];
  score: number;
}

export const EditProfile: FC = () => {
  const { loading, error, courses } = useCoursesQuery();
  const { loadingW, errorW, whoAmI } = useWhoAmIQuery();
  const userData = useSelector(selectUserData);
  console.log(userData);
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm<IProfileFormInput>();
  // {
  // defaultValues: {
  //   firstName: userData.firstname ? userData.firstname : '',
  //   lastName: userData.lastname,
  //   discord: userData.discord,
  //   telegram: userData.telegram,
  //   city: userData.city,
  //   coutry: userData.country,
  //   // courses: Course[];
  //   score: userData.score,
  // },
  // });

  const onSubmit = useCallback((formValues: IProfileFormInput) => {
    console.log(formValues);
  }, []);

  return (
    <EditProfileWrapper onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>Enter your profile information</PageTitle>
      <InputsWrapper>
        <InputField
          name="firstname"
          labelText="First Name"
          placeholder="Enter first name"
          register={register}
        />
        <InputField
          name="secondname"
          labelText="Second Name"
          placeholder="Enter second name"
          register={register}
        />
        <InputField
          name="discord"
          labelText="Discord"
          placeholder="Enter discord"
          register={register}
        />
        <InputField
          name="telegram"
          labelText="Telegram"
          placeholder="Enter telegram"
          register={register}
        />
        <InputField
          name="city"
          labelText="City"
          placeholder="Enter city"
          register={register}
        />
        <InputField
          name="country"
          labelText="Country"
          placeholder="Enter country"
          register={register}
        />
        <CourseField
          name="courses"
          labelText="Course"
          placeholder="Select course"
          register={register}
          multi
          courses={courses}
        />
        <InputField
          name="score"
          labelText="Score"
          placeholder="Enter score"
          register={register}
        />
      </InputsWrapper>
      <ButtonWrapper>
        <Button>Submit</Button>
      </ButtonWrapper>
    </EditProfileWrapper>
  );
};

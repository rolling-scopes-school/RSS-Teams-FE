import React, { FC, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { useCoursesQuery } from 'hooks/graphql';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectToken } from 'modules/LoginPage/selectors';
import { Redirect } from 'react-router-dom';
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
  firstname: string;
  lastname: string;
  discord: string;
  telegram: string;
  city: string;
  country: string;
  courses: Course[];
  score: number;
}

export const EditProfile: FC = () => {
  const { loading, error, courses } = useCoursesQuery();
  const loginToken = useSelector(selectToken);

  const userData = useSelector(selectUserData);
  console.log(userData);
  const { register, handleSubmit, watch, errors } = useForm<IProfileFormInput>({
    defaultValues: {
      firstname: userData.firstName,
      lastname: userData.lastName,
      discord: userData.discord,
      telegram: userData.telegram || '',
      city: userData.city,
      country: userData.country,
      // courses: Course[],
      score: userData.score,
    },
  });

  const onSubmit = useCallback((formValues: IProfileFormInput) => {
    console.log(formValues);
    console.log(errors, watch);
  }, []);

  if (!loginToken) return <Redirect to={'/login'} />;

  return (
    <EditProfileWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>Enter your profile information</PageTitle>
      <InputsWrapper>
        <InputField
          name="firstname"
          labelText="First Name"
          placeholder="Enter first name"
          aria-invalid={errors.firstname ? 'true' : 'false'}
          message={errors.firstname?.message}
          register={register({
            required: 'This is required.',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'This input is letters only.',
            },
            minLength: {
              value: 3,
              message: 'minimal length is 3',
            },
            maxLength: {
              value: 12,
              message: 'This input exceed maxLength.',
            },
          })}
        />
        <InputField
          name="lastname"
          labelText="Second Name"
          placeholder="Enter second name"
          aria-invalid={errors.lastname ? 'true' : 'false'}
          message={errors.lastname?.message}
          register={register({
            required: 'This is required.',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'This input is letters only.',
            },
            minLength: {
              value: 3,
              message: 'minimal length is 3',
            },
            maxLength: {
              value: 14,
              message: 'This input exceed maxLength.',
            },
          })}
        />
        <InputField
          name="discord"
          labelText="Discord"
          placeholder="Enter discord"
          aria-invalid={errors.discord ? 'true' : 'false'}
          message={errors.discord?.message}
          register={register({
            required: 'This is required.',
            pattern: {
              value: /^[A-Za-z0-9]+$/i,
              message: 'This input is letters and digits only.',
            },
            minLength: {
              value: 3,
              message: 'minimal length is 3',
            },
            maxLength: {
              value: 12,
              message: 'This input exceed maxLength.',
            },
          })}
        />
        <InputField
          name="telegram"
          labelText="Telegram"
          placeholder="Enter telegram"
          message={errors.telegram?.message}
          aria-invalid={errors.telegram ? 'true' : 'false'}
          register={register({
            required: 'This is required.',
            pattern: {
              value: /^[A-Za-z0-9]+$/i,
              message: 'This input is letters and digits only.',
            },
            minLength: {
              value: 3,
              message: 'minimal length is 3',
            },
            maxLength: {
              value: 12,
              message: 'This input exceed maxLength.',
            },
          })}
        />
        <InputField
          name="city"
          labelText="City"
          placeholder="Enter city"
          message={errors.city?.message}
          aria-invalid={errors.city ? 'true' : 'false'}
          register={register({
            required: 'This is required.',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'This input is letters only.',
            },
            minLength: {
              value: 3,
              message: 'minimal length is 3',
            },
            maxLength: {
              value: 12,
              message: 'This input exceed maxLength.',
            },
          })}
        />
        <InputField
          name="country"
          labelText="Country"
          placeholder="Enter country"
          message={errors.country?.message}
          aria-invalid={errors.country ? 'true' : 'false'}
          register={register({
            required: 'This is required.',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'This input is letters only.',
            },
            minLength: {
              value: 3,
              message: 'minimal length is 3',
            },
            maxLength: {
              value: 12,
              message: 'This input exceed maxLength.',
            },
          })}
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
          message={errors.score?.message}
          aria-invalid={errors.score ? 'true' : 'false'}
          register={register({
            required: 'This is required.',
            pattern: {
              value: /^[0-9]+$/i,
              message: 'This input is number only.',
            },
            minLength: {
              value: 3,
              message: 'minimal length is 3',
            },
            maxLength: {
              value: 5,
              message: 'This input exceed maxLength.',
            },
          })}
        />
      </InputsWrapper>
      <ButtonWrapper>
        <Button>Submit</Button>
      </ButtonWrapper>
    </EditProfileWrapper>
  );
};

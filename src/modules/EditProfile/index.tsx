import React, { FC, memo } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Loader, InputField, CourseField } from 'components';
import { useCoursesQuery, useUpdUserMutation } from 'hooks/graphql';
import { PageTitle, Button } from 'typography';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectToken } from 'modules/LoginPage/selectors';

import { EditProfileWrapper, InputsWrapper, ButtonWrapper } from './styled';

const testUpdatedData = {
  id: '8b63e270-a57b-44d7-ba97-747cc332bcc6',
  firstName: 'serge',
  lastName: 'qefds',
  telegram: 'wewq4',
  discord: 'werwer',
  score: 9999,
  country: 'wewr',
  city: 'wewrewrew',
  courseIds: ['4dc87a18-0ef2-414a-a906-37111f458d21'],
};
interface IProfileFormInput {
  firstName: string;
  lastName: string;
  discord: string;
  telegram: string;
  city: string;
  country: string;
  coursesIds: string[];
  score: number;
}

export const EditProfile: FC = memo(() => {
  // const history = useHistory();
  const loginToken = useSelector(selectToken);
  const userData = useSelector(selectUserData);
  const { loading, courses } = useCoursesQuery();
  const { updateUser, loadingM } = useUpdUserMutation({
    user: testUpdatedData,
  });

  console.log('userDataRedux', userData);
  const { register, handleSubmit, errors } = useForm<IProfileFormInput>({
    defaultValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      discord: userData.discord,
      telegram: userData.telegram || '',
      city: userData.city,
      country: userData.country,
      // courses: Course[],
      score: userData.score,
    },
  });

  const onSubmit = (formValues: IProfileFormInput) => {
    console.log(formValues);
    updateUser();
    // history.push('/');
  };

  if (!loginToken) return <Redirect to={'/login'} />;
  if (loading || loadingM) return <Loader />;

  return (
    <EditProfileWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>Enter your profile information</PageTitle>
      <InputsWrapper>
        <InputField
          name="firstName"
          labelText="First Name"
          placeholder="Enter first name"
          aria-invalid={errors.firstName ? 'true' : 'false'}
          message={errors.firstName?.message}
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
          name="lastName"
          labelText="Second Name"
          placeholder="Enter second name"
          aria-invalid={errors.lastName ? 'true' : 'false'}
          message={errors.lastName?.message}
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
});

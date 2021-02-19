import React, { FC, useEffect, useMemo, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Loader, InputField, CourseField } from 'components';
import { useCoursesQuery, useUpdUserMutation } from 'hooks/graphql';
import { PageTitle, Button } from 'typography';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectToken } from 'modules/LoginPage/selectors';
import { Course, UpdateUserInput } from 'types';

import {
  EditProfileWrapper,
  InputsWrapper,
  ButtonWrapper,
  FormWrapper,
  UserCourseListItem,
  UserCoursesListTitle,
} from './styled';
import { BG_COLOR, MAIN1_COLOR } from 'appConstants/colors';
import { CURRENT_YEAR } from 'appConstants';

export const EditProfile: FC = () => {
  const history = useHistory();
  const loginToken = useSelector(selectToken);
  const userData = useSelector(selectUserData);
  const [userCourses, setUserCourses] = useState<Course[]>(userData.courses);
  const { loading, courses } = useCoursesQuery();
  const defaultData = useMemo(
    () => ({
      id: userData.id,
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      discord: userData.discord || '',
      telegram: userData.telegram || '',
      city: userData.city || '',
      country: userData.country || '',
      courseIds: ['9c5a1bee-efb7-4eae-b306-c3d2061e9a32'],
      score: userData.score,
    }),
    [userData]
  );
  const [inputValues, setInputValues] = useState<UpdateUserInput>(defaultData);

  const { updateUser, loadingM } = useUpdUserMutation({
    user: {
      ...inputValues,
      courseIds: userCourses.map((course: Course) => course.id),
    },
  });

  const [isValidCoursesList, setValidCoursesList] = useState(true);

  const isUserNew = userData.telegram === null;

  const currentCourses = courses
    ?.filter(({ name }: Course) => name.includes(`${CURRENT_YEAR}`))
    .filter(
      (item: Course) =>
        !userCourses.filter((uItem: Course) => uItem.name === item.name).length
    );

  const { register, handleSubmit, errors, reset } = useForm<UpdateUserInput>({
    defaultValues: inputValues,
  });

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (userCourses.length) {
      updateUser();
      history.push('/');
    } else {
      setValidCoursesList(false);
    }
  };

  const localCourseUpdate = (course: Course) => {
    if (course) {
      setUserCourses([...userCourses, course]);
      setValidCoursesList(true);
    }
  };

  useEffect(() => {
    if (userData.id !== '' && !inputValues.id) {
      setInputValues(defaultData);
      setUserCourses(userData.courses);
      reset(defaultData);
    }
  }, [reset, inputValues, defaultData, userData]);

  if (!loginToken) return <Redirect to={'/login'} />;
  if (loading || loadingM) return <Loader />;

  return (
    <FormWrapper>
      <EditProfileWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <PageTitle>Enter your profile information</PageTitle>
        <InputsWrapper>
          <InputField
            name="firstName"
            value={userData.firstName}
            labelText="First Name"
            placeholder="Enter first name"
            aria-invalid={errors.firstName ? 'true' : 'false'}
            message={errors.firstName?.message}
            onChange={changeInputValue}
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
            labelText="Last Name"
            placeholder="Enter last name"
            aria-invalid={errors.lastName ? 'true' : 'false'}
            message={errors.lastName?.message}
            onChange={changeInputValue}
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
            onChange={changeInputValue}
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
            })}
          />
          <InputField
            name="telegram"
            labelText="Telegram"
            placeholder="Enter telegram"
            message={errors.telegram?.message}
            aria-invalid={errors.telegram ? 'true' : 'false'}
            onChange={changeInputValue}
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
            })}
          />
          <InputField
            name="city"
            labelText="City"
            placeholder="Enter city"
            message={errors.city?.message}
            aria-invalid={errors.city ? 'true' : 'false'}
            onChange={changeInputValue}
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
            onChange={changeInputValue}
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
          <div>
            <UserCoursesListTitle>Course</UserCoursesListTitle>
            {userCourses.map((item: Course) => {
              return (
                <UserCourseListItem key={item.id}>
                  {item.name}
                </UserCourseListItem>
              );
            })}

            <CourseField
              name="courses"
              placeholder="Select course"
              register={register}
              multi
              onAdd={localCourseUpdate}
              courses={currentCourses}
              isValid={isValidCoursesList}
            />
          </div>
          <InputField
            name="score"
            labelText="Score"
            placeholder="Enter score"
            message={errors.score?.message}
            aria-invalid={errors.score ? 'true' : 'false'}
            onChange={changeInputValue}
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
          {!isUserNew && (
            <Button
              type="button"
              bgc={BG_COLOR}
              color={MAIN1_COLOR}
              mr="20px"
              onClick={history.goBack}
            >
              Cancel
            </Button>
          )}
          <Button>{isUserNew ? 'Submit' : 'Save'}</Button>
        </ButtonWrapper>
      </EditProfileWrapper>
    </FormWrapper>
  );
};

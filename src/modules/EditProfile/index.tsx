import React, { FC, useEffect, useMemo, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FieldError, useForm } from 'react-hook-form';

import { Loader, InputField, CourseField, ErrorModal } from 'components';
import { useCoursesQuery, useUpdUserMutation } from 'hooks/graphql';
import { Button } from 'typography';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectToken } from 'modules/LoginPage/selectors';
import { Course, UpdateUserInput, User } from 'types';
import { formFields } from './formFields';

import {
  EditProfileWrapper,
  InputsWrapper,
  ButtonWrapper,
  FormWrapper,
  UserCoursesListTitle,
  FormTitle,
  CoursesWrapper,
} from './styled';
import { BG_COLOR, MAIN1_COLOR } from 'appConstants/colors';
import {
  CURRENT_YEAR,
  SET_CURR_COURSE,
  SET_USER_DATA,
  CURRENT_COURSE,
  INPUT_VALUES_EDIT_PROFILE,
} from 'appConstants';
import {
  IOldCourses,
  UserCourseListItem,
} from './components/UserCourseListItem';

export const EditProfile: FC = () => {
  const history = useHistory();
  const loginToken = useSelector(selectToken);
  const userData = useSelector(selectUserData);

  const oldCourses: IOldCourses[] = userData.courses.map((course: Course) => ({
    ...course,
    isNew: true,
  }));

  const [userCourses, setUserCourses] = useState<IOldCourses[]>(oldCourses);
  const { loading, courses, error } = useCoursesQuery();
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

  const { updateUser, loadingM, errorM } = useUpdUserMutation({
    user: {
      ...inputValues,
      courseIds: userCourses.map((course: Course) => course.id),
    },
  });

  const [isValidCoursesList, setValidCoursesList] = useState(true);

  const dispatch = useDispatch();

  const isUserNew = userData.telegram === null;
  const isUserWithoutCourse = !!userData.courses.length;

  const currentCourses = courses
    ?.filter(({ name }: Course) => name.includes(`${CURRENT_YEAR}`))
    .filter(
      (item: Course) =>
        !userCourses.filter((uItem: Course) => uItem.name === item.name).length
    )
    .filter((item: Course) => item.name !== 'RSS React 2021 Q1');

  const { register, handleSubmit, errors, reset } = useForm<UpdateUserInput>({
    defaultValues: inputValues,
    mode: 'onChange',
  });

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value.trim(),
    });
  };

  const onSubmit = () => {
    if (userCourses.length) {
      updateUser().then(({ data: { updateUser } }) => {
        if (userData.courses.length !== updateUser.courses.length) {
          const newCurrentCourse = updateUser.courses.find(
            (course: Course) =>
              course.id === userCourses[userCourses.length - 1].id
          );
          localStorage.setItem(
            CURRENT_COURSE,
            JSON.stringify(newCurrentCourse)
          );
          dispatch({
            type: SET_CURR_COURSE,
            payload: newCurrentCourse,
          });
        }
        dispatch({ type: SET_USER_DATA, payload: updateUser });
        history.push('/');
      });
    } else {
      setValidCoursesList(false);
    }
  };

  const localCourseUpdate = (course: IOldCourses) => {
    if (course) {
      setUserCourses([...userCourses, course]);
      setValidCoursesList(true);
    }
  };

  const localCourseSub = (course: IOldCourses) => {
    if (course) {
      const copyCourses: IOldCourses[] = [...userCourses];

      const index = copyCourses.findIndex((item: IOldCourses) => {
        return item.id === course.id;
      });

      if (index >= 0) {
        copyCourses.splice(index, 1);
      }

      setUserCourses([...copyCourses]);
      setValidCoursesList(true);
    }
  };
  useEffect(() => {
    if (userData.id !== '' && !inputValues.id) {
      setInputValues(defaultData);
      setUserCourses(oldCourses);
      reset(defaultData);
    }
  }, [reset, inputValues, defaultData, userData, oldCourses]);

  if (!loginToken) return <Redirect to={'/login'} />;
  if (loading || loadingM) return <Loader />;
  if (error || errorM) return <ErrorModal />;

  return (
    <FormWrapper>
      <EditProfileWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Enter your profile information</FormTitle>
        <InputsWrapper>
          {formFields.map((item, index) => {
            return (
              <InputField
                key={JSON.stringify(item)}
                name={item.name}
                value={
                  userData[
                    INPUT_VALUES_EDIT_PROFILE[index] as keyof User
                  ] as string
                }
                labelText={item.labelText}
                placeholder={item.placeholder}
                aria-invalid={
                  (errors[
                    INPUT_VALUES_EDIT_PROFILE[index] as keyof UpdateUserInput
                  ] as FieldError)
                    ? 'true'
                    : 'false'
                }
                message={
                  (errors[
                    INPUT_VALUES_EDIT_PROFILE[index] as keyof UpdateUserInput
                  ] as FieldError)?.message
                }
                onChange={changeInputValue}
                register={register(item.register)}
              />
            );
          })}
          <CoursesWrapper>
            <UserCoursesListTitle>Course</UserCoursesListTitle>
            {userCourses.map((item: IOldCourses) => {
              return (
                <UserCourseListItem
                  key={item.id}
                  deleteButton={item.isNew}
                  course={item}
                  onSub={localCourseSub}
                >
                  {item.name}
                </UserCourseListItem>
              );
            })}
            {currentCourses.length !== 0 && (
              <CourseField
                name="courses"
                placeholder="Select course"
                register={register}
                multi
                onAdd={localCourseUpdate}
                courses={currentCourses}
                isValid={isValidCoursesList}
              />
            )}
          </CoursesWrapper>
        </InputsWrapper>
        <ButtonWrapper>
          {!isUserNew && isUserWithoutCourse && (
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
